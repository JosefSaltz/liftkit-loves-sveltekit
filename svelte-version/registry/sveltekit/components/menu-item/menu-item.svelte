<script lang="ts">
/**
 * A menu item component that displays content with optional start and end icons.
 *
 * @param props - The menu item component props
 * @param props.startIcon - Optional icon configuration to display at the start of the menu item
 * @param props.endIcon - Optional icon configuration to display at the end of the menu item
 * @param props.children - The content to display in the menu item between the icons
 * @param props.fontClass - Font class to apply to the menu item, defaults to "body"
 * @param props.title - Optional title attribute for the menu item element
 * @param props.className - Additional CSS classes to apply to the menu item
 * @param props.restProps - Additional HTML div attributes passed through to the component
 *
 * @returns A menu item component with icons, content, and a state layer for interactions
 *
 * @example
 * ```tsx
 * <MenuItem startIcon="🏠" endIcon="→">
 *   Home
 * </MenuItem>
 * ```
 */

import StateLayer from "@/registry/sveltekit/components/state-layer";
import Icon from "$components/icon";
import type { LkIconProps } from "$components/icon";
import type { HTMLAttributes } from "svelte/elements";


interface LkMenuItemProps extends HTMLAttributes<HTMLDivElement> {
  startIcon?: LkIconProps;
  endIcon?: LkIconProps;
  fontClass?: LkFontClass;
  title?: string;
  onClick?: () => void
  keyToListen: string;
  tabindex: number;
}
  // const dataAttrs = useMemo(() => propsToDataAttrs(restProps, "menu-item"), [restProps]); omitting because it is not used

let {
  startIcon,
  endIcon,
  fontClass = "body",
  title,
  children,
  class: className,
  onClick,
  tabindex,
  keyToListen,
  ...restProps
}: LkMenuItemProps = $props() 
</script>

<div
  data-lk-component="menu-item"
  title={typeof children === "string" ? children : ""}
  class={`${className || ""}`}
  onclick={onClick || undefined}
  onkeydown={(e) => { if(onClick && e.key === keyToListen) onClick()}}
  role="menuitem"
  tabindex={tabindex}
>
  {#if startIcon} 
    <Icon {...startIcon} data-lk-icon-position="start"></Icon>
  {/if}
  <p data-lk-menu-item-element="content-wrap">{@render children?.()}</p>
  {#if endIcon} 
    <Icon {...endIcon} data-lk-icon-position="end"></Icon>
  {/if}
  <StateLayer></StateLayer>
</div>

