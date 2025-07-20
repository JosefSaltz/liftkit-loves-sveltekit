<script lang="ts" context="module">
  import { Icon } from "@lucide/svelte";

  import "$registry/sveltekit/components/icon/icon.css";

  export interface LkIconProps {
    name?: IconName;
    fontClass?: Exclude<LkFontClass, `${string}-bold` | `${string}-mono`>;
    color?: LkColor | "currentColor";
    display?: "block" | "inline-block" | "inline";
    strokeWidth?: number;
    opticShift?: boolean; //if true, pulls icon slightly upward
  }

  let {
    name = "roller-coaster",
    fontClass,
    color = "onsurface",
    strokeWidth = 2,
    opticShift = false,
    ...restProps
  } = $props()
</script>

<div data-lk-component="icon" data-lk-icon-offset={opticShift} {...restProps} data-lk-icon-font-class={fontClass} >
  <Icon name={name} width="1em" height="1em" color={`var(--lk-${color})`} strokeWidth={strokeWidth} />
</div>
