<script lang="ts">
  import { propsToDataAttrs } from "@/registry/sveltekit/lib/utilities";
  import "$components/container/container.css";
	import type { HTMLAttributes } from "svelte/elements";

  interface LkContainerProps extends HTMLAttributes<HTMLDivElement> {
    maxWidth?: LkContainerWidth;
  }

  let props: LkContainerProps = $props();
  const { maxWidth = "md", children, ...restProps } = props;
    
  const dataAttrs = $derived(
    propsToDataAttrs({ maxWidth }, "container"),
  );
</script>

<div {...dataAttrs} {...restProps}>
  {@render children?.()}
</div>