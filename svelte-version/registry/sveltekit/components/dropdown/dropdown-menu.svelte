<script lang="ts">
  import { getContext } from "svelte"
  let { children, cardProps }: LkDropdownMenuProps= $props() 
  const { open, setOpen, triggerRef, contentRef } = getContext('DropdownContext');

  $effect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  if (!open || !triggerRef.current) return null;

  const rect = triggerRef.current.getBoundingClientRect();

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

    var positionStyle: React.CSSProperties = {};

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

  const quadrantData = getQuadrant();

  const style = {
    top: rect.bottom + window.scrollY,
    left: rect.right + window.scrollX,
  };

  return snip(() =>
    
  );
}
</script>
<div
      ref={contentRef}
      style={quadrantData.positionStyle}
      role="menu"
      data-lk-component="dropdown-menu"
      data-isactive={open}
      data-lk-dropdown-trigger-quadrant={quadrantData.triggerQuadrant}
    >
      <Card {...cardProps} className="shadow-xl">
        <Column gap="none" className={cardProps?.scaleFactor}>
          {children}
        </Column>
      </Card>
    </div>,
    document.body