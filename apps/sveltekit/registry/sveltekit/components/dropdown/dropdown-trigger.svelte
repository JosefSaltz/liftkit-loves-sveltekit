<script lang="ts">
	import { getContext, type Snippet } from "svelte";
	import type { DropdownContext } from "./dropdown.svelte.ts";

  let { children } = $props();
  let { open, setOpen, triggerRef, setTriggerRef } = getContext("DropdownContext") as DropdownContext;  
</script>

{#each children as Child}
  <Child
    bind:this={triggerRef}
    onClick={() => setOpen(!open)}
    aria-expanded={open}
    aria-has-popup="menu"
  />
{/each}