<script lang="ts">
  import { Icon } from "@lucide/svelte";
  import "@/registry/sveltekit/components/icon/icon.css";
	import type { LkIconProps } from "./icon.types";

  let {
    name = "roller-coaster",
    fontClass,
    color = "onsurface",
    strokeWidth = 2,
    opticShift = false,
    ...restProps
  }: LkIconProps = $props();
</script>

<div data-lk-component="icon" data-lk-icon-offset={opticShift} {...restProps} data-lk-icon-font-class={fontClass} >
  <Icon name={name} width="1em" height="1em" color={`var(--lk-${color})`} strokeWidth={strokeWidth} />
</div>
