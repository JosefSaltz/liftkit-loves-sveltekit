<script lang="ts">
  import { propsToDataAttrs } from "@/registry/sveltekit/lib/utilities";
  import Text from "@/registry/sveltekit/components/text";
  import "@/registry/sveltekit/components/tab-link/tab-link.css";
  // TODO: This needs more Svelte correct typing
  interface LkTabLinkProps extends React.HTMLAttributes<HTMLDivElement> {
    selected?: boolean;
    fontClass?: LkFontClass;
    indicatorClass?: string;
    children?: React.ReactElement<HTMLDivElement>;
  }

  let {
    selected = false,
    fontClass = "body",
    indicatorClass = "lk-indicator",
    children,
    ...restProps
  }: LkTabLinkProps = props();

  // TODO: This might need to be changed to $derived instead
  const dataAttrs = $derived(propsToDataAttrs({ selected, fontClass, indicatorClass }, "tab-link"));
</script>

<div data-lk-component="tab-link" {...dataAttrs} {...restProps}>
  <div data-lk-slot="child">
    <Text fontClass={fontClass} style={selected ? { fontWeight: 700 } : {}}>
      {@render children()}
    </Text>
  </div>
  <div class={indicatorClass}></div>
</div>

