<script lang="ts">
  import type { ReactNode } from "react";
  import "@/registry/sveltekit/components/tab-content/tab-content.css";

  interface TabContentProps {
    children: ReactNode;
  }
  let { children }: TabContentProps = $props();
</script>

<div data-lk-component="tab-content">{@render children()}</div>;

