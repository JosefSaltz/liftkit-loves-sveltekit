<script lang="ts">
  import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
  import "$registry/sveltekit/components/section/section.css";

  type SpacingSize = "xs" | "sm" | "md" | "lg" | "xl" | "none";

  interface LkSectionProps extends React.HTMLAttributes<HTMLElement> {
    padding?: SpacingSize;
    container?: React.ReactNode;
    px?: SpacingSize;
    py?: SpacingSize;
    pt?: SpacingSize;
    pb?: SpacingSize;
    pl?: SpacingSize;
    pr?: SpacingSize;
    children?: React.ReactNode;
  }

  let { props }: { props: LkSectionProps} = $props();
  //TODO:  Give section default padding of "md" */
  const { container, children, padding, px, py, pt, pb, pl, pr, ...restProps } = props;
  // TODO: This might need to be $derived instead
  const lkSectionAttrs = $state(
    () => propsToDataAttrs({ container, children, padding, px, py, pt, pb, pl, pr }, "section"),
  );

</script>

<section {...lkSectionAttrs} {...restProps}>
  <div data-lk-component="section">{container || children}</div>
</section>