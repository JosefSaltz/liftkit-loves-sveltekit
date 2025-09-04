<script lang="ts">
  import "@/registry/sveltekit/components/tab-content/tab-content.css";
	import type { Snippet } from "svelte";

  interface TabContentProps {
    children: Snippet;
  }
  let { children }: TabContentProps = $props();
</script>

<div data-lk-component="tab-content">{@render children()}</div>;

