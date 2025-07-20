<script lang="ts">
  import { propsToDataAttrs } from "$registry/sveltekit/lib/utilities";
  import "$registry/sveltekit/components/container/container.css";

  interface LkContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    maxWidth?: LkContainerWidth;
  }

  let props: LkContainerProps = $props();
    const { maxWidth = "md", children, ...restProps } = props;
    
    const dataAttrs = useMemo(
      () => propsToDataAttrs({ maxWidth }, "container"),
      [maxWidth],
    );
</script>

<div {...dataAttrs} {...restProps}>
  {@render children()}
</div>
