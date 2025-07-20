<script lang="ts">
  import { useMemo } from "react";
  import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
  import "@/registry/nextjs/components/row/row.css";

  interface LkRowProps extends React.HTMLAttributes<HTMLDivElement> {
    alignItems?: "start" | "center" | "end" | "stretch";
    justifyContent?: "start" | "center" | "end" | "space-between" | "space-around";
    gap?: LkSizeUnit;
    wrapChildren?: boolean;
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
  {@render children()}
</div>
