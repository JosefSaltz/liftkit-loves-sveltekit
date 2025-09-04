<script lang="ts">
	import { setContext } from "svelte";
  import DropdownState from "./dropdown.svelte.ts";
  
  let { children } = $props();
  const { DropdownRegistry, setOpen } = DropdownState;
  // Global singleton registry
  $effect(() => {
    if (!open) return;
    const self = { close: () => setOpen(false) };
    DropdownRegistry.register(self);
    return () => DropdownRegistry.unregister(self);
  });
  // Set Context to be passed to Dropdown Menu and Dropdown Trigger
  setContext('DropdownContext', DropdownState);
</script>

{@render children?.()}