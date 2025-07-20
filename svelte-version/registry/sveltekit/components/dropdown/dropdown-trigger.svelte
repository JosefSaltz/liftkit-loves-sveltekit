<script lang="ts">
let { children }: LkDropdownTriggerProps = $props() 
  const { open, setOpen, triggerRef } = getContext('DropdownContext');
  return React.cloneElement(children, {
    ref: triggerRef,
    onClick: () => setOpen(!open),
    "aria-expanded": open,
    "aria-haspopup": "menu",
  } as any);

</script>

