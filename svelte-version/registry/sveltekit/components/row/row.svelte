<script lang="ts">
  import { propsToDataAttrs } from "@/registry/sveltekit/lib/utilities";
  import "@/registry/sveltekit/components/row/row.css";
	import type { HTMLAttributes } from "svelte/elements";

  interface LkRowProps extends HTMLAttributes<HTMLDivElement> {
    alignItems?: "start" | "center" | "end" | "stretch";
    justifyContent?: "start" | "center" | "end" | "space-between" | "space-around";
    gap?: LkSizeUnit;
    wrapChildren?: string | boolean; // Extended with string to deal with props typecasting issue of booleans
    defaultChildBehavior?: "auto-grow" | "auto-shrink" | "ignoreFlexRules" | "ignoreIntrinsicSize";
  }

  let {
    children,
    alignItems="start",
    justifyContent="start",
    gap,
    wrapChildren,
    defaultChildBehavior,
    ...restProps
  }: LkRowProps = $props();

  const lkRowAttrs = $derived(
    propsToDataAttrs({ alignItems, justifyContent, gap, wrapChildren, defaultChildBehavior }, "row")
  );
</script>

<div {...lkRowAttrs} {...restProps} data-lk-component="row">
  {@render children?.()}
</div>
