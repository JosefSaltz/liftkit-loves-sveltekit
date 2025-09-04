<script lang="ts">
  import { propsToDataAttrs } from "$registry/lib/utilities";
  import "$components/column/column.css";
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";

  interface LkColumnProps extends HTMLAttributes<HTMLDivElement> {
    alignItems?: "start" | "center" | "end" | "stretch";
    justifyContent?: "start" | "center" | "end" | "space-between" | "space-around";
    gap?: LkSizeUnit | "none";
    wrapChildren?: boolean;
    defaultChildBehavior?: "auto-grow" | "auto-shrink" | "ignoreFlexRules" | "ignoreIntrinsicSize";
    children?: Snippet;
  }
 
  let { children, alignItems = "stretch", justifyContent = "start", gap, wrapChildren, defaultChildBehavior, ...restProps }: LkColumnProps = $props();

  const lkColumnAttrs = $derived(
    propsToDataAttrs({ alignItems, defaultChildBehavior, justifyContent, gap, wrapChildren }, "column"),
  );
</script>

<div {...lkColumnAttrs} {...restProps} data-lk-component="column">
  {@render children?.()}
</div>

