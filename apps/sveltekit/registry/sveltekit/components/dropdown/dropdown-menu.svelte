<script lang="ts">
  import { getContext } from "svelte";
  import type { DropdownContext, LkDropdownMenuProps } from "./dropdown.svelte.ts";
  import Card from "$components/card";
  import Column from "$components/column";
  
  let { children, cardProps }: LkDropdownMenuProps = $props()
  let { open, setOpen, triggerRef, contentRef } = getContext("DropdownContext") as DropdownContext;

  $effect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        contentRef &&
        !contentRef.contains(e.target as Node) &&
        triggerRef &&
        !triggerRef.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const rect = triggerRef?.getBoundingClientRect();

  /**Calculate transform origin based on triggerRef viewport quadrant */
  function getQuadrant() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    /** Origin as in "the corner of the trigger the menu will expand from" */
    var triggerQuadrant: "top-left" | "top-right" | "bottom-right" | "bottom-left";

    const isTop: boolean = rect.top < windowHeight / 2;
    const isLeft: boolean = rect.left < windowWidth / 2;

    if (isTop) {
      triggerQuadrant = isLeft ? "bottom-left" : "bottom-right";
    } else {
      triggerQuadrant = isLeft ? "top-left" : "top-right";
    }

    type DropdownPositionStyle = { top: number, left: number} | undefined;
    var positionStyle: DropdownPositionStyle;

    switch (triggerQuadrant) {
      case "top-left":
        positionStyle = {
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        };
        break;
      case "top-right":
        positionStyle = { top: rect.top + window.scrollY, left: rect.right + window.scrollX };
        break;
      case "bottom-right":
        positionStyle = { top: rect.bottom + window.scrollY, left: rect.right + window.scrollX };
        break;
      case "bottom-left":
        positionStyle = { top: rect.bottom + window.scrollY, left: rect.left + window.scrollX };
        break;
    }

    return { triggerQuadrant, positionStyle };
  }

  const quadrantData = $derived(getQuadrant());
  
  // const style = {
  //   top: rect.bottom + window.scrollY,
  //   left: rect.right + window.scrollX,
  // };
</script>

{#if open && triggerRef}
  <div
    id="dropdown-menu"
    bind:this={contentRef}
    role="menu"
    style:top={quadrantData.positionStyle?.top}
    style:left={quadrantData.positionStyle?.left}
    data-lk-component="dropdown-menu"
    data-isactive={open}
    data-lk-dropdown-trigger-quadrant={quadrantData.triggerQuadrant}
  >
    <Card {...cardProps} class="shadow-xl">
      <Column gap="none" class={cardProps?.scaleFactor}>
        {@render children?.()}
      </Column>
    </Card>
  </div>
{/if}