<script lang="ts">
  import { propsToDataAttrs } from "@/registry/sveltekit/lib/utilities";
  import TabMenu from "@/registry/sveltekit/components/tab-menu";
  import "@/registry/sveltekit/components/tabs/tabs.css";
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";


  interface LkTabsProps extends HTMLAttributes<HTMLDivElement> {
    tabLinks: string[];
    children: Snippet;
    scrollableContent?: boolean; // Optional prop to enable scrollable content
    onActiveTabChange?: (index: number) => void; // Optional function to lift state
  }

  let { tabLinks, onActiveTabChange, scrollableContent, children, ...restProps }: LkTabsProps = $props();
    let activeTab = $state(0);
    const setActiveTab = (state: number) => { activeTab = state }
    const handleTabClick = (index: number) => {
      setActiveTab(index); // Set the clicked tab as active
    };

    $effect(() => {
      if (onActiveTabChange) {
        onActiveTabChange(activeTab);
      } else {
        return;
      }
    });

    const dataAttrs = $derived(propsToDataAttrs({ activeTab }, "tabs"));
</script>

<div data-lk-component="tabs" data-lk-tabs-content-scrollable={scrollableContent} {...dataAttrs} {...restProps}>
  <TabMenu
    tabLinks={tabLinks}
    justifyContent="start"
    alignItems="stretch"
    activeTab={activeTab}
    setActiveTab={setActiveTab}
    onClick={handleTabClick}
  />
  <div data-lk-tabs-el="tab-content" data-lk-tabs-content-scrollable={scrollableContent}>
    {#each children as child, index}
      <div data-key={index} style:display={index === activeTab ? "block" : "none" }>
        { child }
      </div>
    {/each}
  </div>
</div>
  

