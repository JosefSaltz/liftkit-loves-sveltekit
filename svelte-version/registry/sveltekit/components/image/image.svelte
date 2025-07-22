<script lang="ts">
  /**
   * A customizable image component with built-in aspect ratio, sizing, and styling options.
   * 
   * @param aspect - The aspect ratio of the image. Defaults to "auto"
   * @param borderRadius - The border radius size unit or "none"/"zero". Defaults to undefined
   * @param objectFit - CSS object-fit property value. Defaults to "fill"
   * @param width - Width size unit or "auto". Defaults to "auto"
   * @param height - Height size unit or "auto". Defaults to "auto"
   * @param rest - Additional HTML img element attributes
   * 
   * @returns A styled img element with data attributes for CSS styling
   */
  import { propsToDataAttrs } from "@/registry/sveltekit/lib/utilities";
  import "@/registry/sveltekit/components/image/image.css";

	import type { EnhancedImgAttributes } from "@sveltejs/enhanced-img";

  type LkAspectRatio =
    | "auto"
    | "1/1"
    | "2.39/1"
    | "2/1"
    | "16/9"
    | "3/2"
    | "4/3"
    | "5/4"
    | "1/2.39"
    | "1/2"
    | "9/16"
    | "4/5";

  type LkSizeUnit =
    | "3xs"
    | "2xs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl";

  type LkBorderRadii = 
    "none"
    | "zero"
    | "3xs"
    | "2xs"
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"

  type LkImageProps = EnhancedImgAttributes & {
    aspect?: LkAspectRatio;
    borderRadius?: LkSizeUnit | "none" | "zero" | undefined;
    objectFit?: React.CSSProperties["objectFit"];
    width?: LkSizeUnit | "auto";
    height?: LkSizeUnit | "auto";
    "lk-image-border-radius": LkBorderRadii;
  };

  let {
    aspect = "auto",
    borderRadius = undefined,
    objectFit = "fill",
    width = "auto",
    height = "auto",
    ...rest
  }: LkImageProps = $props()

  const attrs = $derived(propsToDataAttrs({ aspect, borderRadius, objectFit, width, height }, "image"));
</script>

<enhanced:img data-lk-component="image" {...attrs} {...rest} alt="" />
