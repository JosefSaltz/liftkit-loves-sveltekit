<script lang="ts">
  import { getContext } from "svelte";
  let { children, cardProps }: LkSelectMenuProps = $props();
  const { open, setOpen, triggerRef, contentRef } = getContext("SelectContext");

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

  // Handle keyboard navigation
  $effect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!open) return;

      if (e.key === "Escape") {
        setOpen(false);
        if (triggerRef.current) {
          (triggerRef.current as HTMLElement).focus();
        }
      }
    }

    if (open) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  if (!open || !triggerRef.current) return null;

  const rect = triggerRef.current.getBoundingClientRect();
</script>

<!-- TODO: Figure out correct return for this -->
return ReactDOM.createPortal(
  <div
    ref={contentRef}
    style={{ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX }}
    role="menu"
    data-lk-component="select-menu"
    data-isactive={open}
  >
    <Card {...cardProps} className="shadow-xl">
      <Column gap="none" className={cardProps?.scaleFactor}>
        {children}
      </Column>
    </Card>
  </div>,
  document.body
);