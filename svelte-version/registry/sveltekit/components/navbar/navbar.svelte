<script lang="ts">
  import "@/registry/sveltekit/components/navbar/navbar.css";
  import { propsToDataAttrs } from "@/registry/sveltekit/lib/utilities";
  import Image from "@/registry/sveltekit/components/image";
  import Button from "@/registry/sveltekit/components/button"
  import IconButton from "@/registry/sveltekit/components/icon-button";
  import Row from "@/registry/sveltekit/components/row";
  import Column from "@/registry/sveltekit/components/column";
  import MaterialLayer from "@/registry/sveltekit/components/material-layer";
  import PlaceholderBlock from "@/registry/sveltekit/components/placeholder-block";
	import type { HTMLAttributes } from "svelte/elements";
	import { Dropdown, DropdownMenu, DropdownTrigger } from "@/registry/nextjs/components/dropdown";

  interface LkNavBarProps extends HTMLAttributes<HTMLDivElement> {
    material?: LkMaterial;
    // TODO: These types need to be changed to something more appropriate
    navButtons?: { key: string, label: string, variant: string }[];
    navDropdowns?: { key: string, icon: string, variant: string, color: string }[];
    navIconButtons?: { key: string, icon: string, variant: string, color: string }[];
    ctaButtons?: { key: string, label: string, variant: string, color: string }[];
  }

  /**
   * A responsive navigation bar component that displays different layouts for desktop and mobile views.
   *
   * @param material - The visual style/material of the navbar, defaults to "flat"
   * @param navButtons - React elements to be displayed as navigation buttons
   * @param navDropdowns - React elements to be displayed as navigation dropdown menus
   * @param iconButtons - React elements to be displayed as icon-based buttons
   * @param ctaButtons - React elements to be displayed as call-to-action buttons
   * @param restProps - Additional props to be passed to the component
   *
   * @returns A JSX element containing a responsive navbar with desktop and mobile layouts
   *
   * @example
   * ```tsx
   * <NavBar
   *   material="elevated"
   *   navButtons={<Button>Home</Button>}
   *   navDropdowns={<Dropdown items={menuItems} />}
   *   iconButtons={<IconButton icon="search" />}
   *   ctaButtons={<Button variant="primary">Sign Up</Button>}
   * />
   * ```
   */
  let {
    material = "flat",
    navButtons,
    navDropdowns,
    navIconButtons,
    ctaButtons,
    ...restProps
  }: LkNavBarProps = $props();
  const dataAttrs = $derived(propsToDataAttrs({ material, restProps }, "navbar"));

  let menuOpen = $state(false);
  const setMenuOpen = (state: boolean) => menuOpen = state;
  const toggleMenu = () => setMenuOpen(!menuOpen);

// Using Svelte Templative Syntax for implementation instead
// Next JS Version
// // If no navButtons or navDropdowns are provided, render placeholder blocks
// function getPlaceholderBlock(count: number) {
//   const blocks = [];
//   for (let i = 0; i < count; i++) {
//     blocks.push(() => <PlaceholderBlock key={i} />);
//   }
//   return blocks;
// }

</script>
<!-- Snippets to pass as values for props -->
{#snippet navButton(key, label, variant)}
  <Button {key} {label} {variant} />
{/snippet}

{#snippet navIconButton(key, icon, variant, color)}
  <IconButton {key} {icon} {variant} {color} />
{/snippet}

{#snippet ctaButton(key, label, variant, color)}
  <Button {key} {label} {variant} {color} />
{/snippet}
{#snippet navDropdown(key, icon, variant, color)}
  <!-- TODO: Some dropdown snippet rendering -->
{/snippet}

<div data-lk-component="navbar" {...dataAttrs}>
  <!-- Desktop Navbar -->
  <div class="navbar-desktop">
    <Row alignItems="center" gap="sm">
      <a href="/">
        <Image alt="" src="/logotype.svg" height="md"/>
      </a>
    </Row>
    <Row>
      <Row data-lk-slot="nav-buttons">
        {#if navButtons}
          {#each navButtons as { key, label, variant }}
            {@render navButton(key, label, variant)}
          {/each}
        {:else}
          <PlaceholderBlock count={2} />
        {/if}
      </Row>
      <Row data-lk-slot="nav-dropdowns">
        {#if navDropdowns}
          {#each navDropdowns as { key, icon, variant, color }}
            {@render navDropdown(key, icon, variant, color)}
          {/each}
        {:else}
          <PlaceholderBlock count={2} />
        {/if}
      </Row>
    </Row>
    <Row data-lk-navbar-el="nav-menu-end">
      <div data-lk-slot="nav-icon-buttons">
        {#if navIconButtons}
          {#each navIconButtons as { key, icon, variant, color }}
            {@render navIconButton(key, icon, variant, color)}
          {/each}
        {:else}
          <PlaceholderBlock count={3} />
        {/if}</div>
      <div data-lk-slot="nav-cta-buttons">
        {#if ctaButtons}
          {#each ctaButtons as { key, label, variant, color }}
            {@render ctaButton(key, label, variant, color)}
          {/each}
        {:else}
          <PlaceholderBlock count={2} />
        {/if}</div>
    </Row>
  </div>

  <!-- Mobile Navbar -->
  <div data-lk-navbar-el="nav-menu">
    <Column alignItems="start" class={`navbar-mobile ${menuOpen ? "active" : ""}`}>
      <IconButton icon="menu" onclick={() => toggleMenu()} />
      <a href="/">
        <Image alt="" src="/vercel.svg" width="md" height="md" />
      </a>
      <Column>
        {#if navButtons}
          {#each navButtons as { key, label, variant }}
            {@render navButton(key, label, variant)}
          {/each}
        {/if}
      </Column>
      <Column>
        {#if navDropdowns}
          {#each navDropdowns as { key, icon, variant, color }}
            {@render navDropdown(key, icon, variant, color)}
          {/each}
        {/if}
      </Column>
      <div>
        {#if navIconButtons}
          {#each navIconButtons as { key, icon, variant, color }}
            {@render navIconButton(key, icon, variant, color)}
          {/each}
        {/if}
      </div>
      <Column class="flex-h gap-sm">
        {#if ctaButtons}
          {#each ctaButtons as { key, label, variant, color }}
            {@render ctaButton(key, label, variant, color)}
          {/each}
        {/if}
      </Column>
    </Column>
  </div>
  {#if material === "glass"} 
    <MaterialLayer type="glass"></MaterialLayer>
  {/if}
</div>

