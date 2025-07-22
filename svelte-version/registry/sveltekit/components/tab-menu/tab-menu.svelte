<script lang="ts">
  import { propsToDataAttrs } from "@/registry/sveltekit/lib/utilities";
  import Row from "@/registry/sveltekit/components/row";
  import TabLink from "@/registry/sveltekit/components/tab-link";
  import "@/registry/sveltekit/components/tab-menu/tab-menu.css";
	import type { HTMLAttributes } from "svelte/elements";
  //  TODO: This needs to be a more correct Svelte typing
  interface LkTabMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
    tabLinks?: string[];
    alignItems?: "start" | "center" | "end" | "stretch";
    justifyContent?: "start" | "center" | "end" | "space-between" | "space-around";
    activeTab: number;
    setActiveTab: (index: number) => void;
    onClick?: (index: number) => void; // Optional function to lift state
  }

  let {
    tabLinks = ["Tab Link 1", "Tab Link 2", "Tab Link 3"],
    alignItems,
    justifyContent,
    activeTab,
    setActiveTab,
    onClick,
    ...restProps
  }: LkTabMenuProps = $props();

/**Don't include tabLinks or setActiveTab props in the useMemo hook, because they don't affect CSS. */
  const dataAttrs = $derived(
    propsToDataAttrs({ alignItems, justifyContent, activeTab }, "tab-menu")
  );
</script>

<div data-lk-component="tab-menu" {...dataAttrs} {...restProps}>
  <Row alignItems={alignItems} justifyContent={justifyContent}>
    {#each tabLinks as label, index}
      <TabLink data-key={index} selected={index === activeTab} onclick={() => setActiveTab(index)}>
        <div>{label ?? "Tab Link"}</div>
      </TabLink>
    {/each}
  </Row>
</div>
