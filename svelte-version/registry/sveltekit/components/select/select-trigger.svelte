<script lang="ts">
  import { getContext } from "svelte"
  let { children }: LkSelectTriggerProps) = $props()
  let { open, setOpen, triggerRef } = getContext("SelectContext");
    // TODO: FIgure out what appropriate return is for this
</script>

return React.cloneElement(children, {
  ref: triggerRef,
  onClick: () => setOpen(!open),
  "aria-expanded": open,
  "aria-haspopup": "menu",
} as any);