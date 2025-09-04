<script lang="ts">
  import { propsToDataAttrs } from "@/registry/sveltekit/lib/utilities";
  import "@/registry/sveltekit/components/section/section.css";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

  type SpacingSize = "xs" | "sm" | "md" | "lg" | "xl" | "none";

  interface LkSectionProps extends HTMLAttributes<HTMLElement> {
    padding?: SpacingSize;
    container?: Snippet;
    px?: SpacingSize;
    py?: SpacingSize;
    pt?: SpacingSize;
    pb?: SpacingSize;
    pl?: SpacingSize;
    pr?: SpacingSize;
    children?: Snippet;
  }

  let { container, children, padding, px, py, pt, pb, pl, pr, ...restProps }: LkSectionProps = $props();

  const lkSectionAttrs = $derived(
    propsToDataAttrs({ container, children, padding, px, py, pt, pb, pl, pr }, "section"),
  );
</script>

<section {...lkSectionAttrs} {...restProps}>
  <div data-lk-component="section">
    {#if container}
      {@render container()}
    {:else}
      {@render children?.()}
    {/if}
  </div>
</section>