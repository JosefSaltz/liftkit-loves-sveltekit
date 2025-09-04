<script lang="ts">
  import Text from "@/registry/sveltekit/components/text";
  import "@/registry/sveltekit/components/sticker/sticker.css";
  import { getOnToken } from "@/registry/universal/lib/colorUtils";
  import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

  /**
   * Props for the LkSticker component.
   * 
   * @param fontClass - Optional font class styling for the sticker text
   * @param bgColor - Optional background color with on-token support for the sticker
   * @param children - Optional React nodes to render inside the sticker
   * @param className - Optional CSS class name (note: internal logic controls rendering order)
   */
  interface LkStickerProps extends HTMLAttributes<HTMLDivElement> {
    fontClass?: LkFontClass;
    bgColor?: LkColor; // supports all LkColors instead of only those with on-token support
    children?: Snippet;
    className?: string; // explicitly extracting because internal logic controls its rendering order
    content: string;
  }

  let {
    fontClass = "label",
    bgColor = "primarycontainer",
    children,
    className,
    ...restProps
  }: LkStickerProps = $props()
</script>

<div data-lk-component="sticker" {...restProps} class={`bg-${bgColor} color-${getOnToken(bgColor)} ${className || ""}`}>
  <Text fontClass={fontClass}>{children || "Sticker"}</Text>
</div>

