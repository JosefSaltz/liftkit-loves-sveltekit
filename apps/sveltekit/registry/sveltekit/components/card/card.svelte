<script lang="ts">
  import { propsToDataAttrs } from "$registry/lib/utilities";
  import "$components/card/card.css";
  import MaterialLayer from "$components/material-layer"; 
  import type { LkCardProps } from "./card.types"
  // TODO: Figure out what the appropriate svelte type to extend off of is
  
  /**
   * A flexible card component that supports various visual styles and behaviors.
   *
   * @param scaleFactor - LkFontClass. Scales card according to this font size. Should be whatever the largest font size in the card is.
   * @param variant - Visual variant. "fill," "outline," or "transparent." Defaults to "fill"
   * @param material - Material style of the card (e.g., "flat", "glass"). Defaults to "flat"
   * @param materialThickness - Thickness of the material scrim when using glass material. "thick", "default," or "thin"
   * @param opticalCorrection - Optical correction method to apply. Defaults to "none"
   * @param isClickable - Whether the card should have clickable styling
   * @param children - Content to be rendered inside the card
   * @param bgColor - Background color of the card. Defaults to "surface"
   * @param className - Additional CSS classes to apply
   * @param restProps - Additional props passed through to the root div element
   *
   * @returns A card component with configurable styling and material effects
   */
  let {
    scaleFactor = "body",
    variant = "fill",
    material = "flat",
    materialProps = {},
    opticalCorrection = "none",
    isClickable,
    children,
    bgColor,
    className,
    isScrollable = false,
    ...restProps
  }: LkCardProps = $props()

  let lkCardAttrs = $derived(propsToDataAttrs({ scaleFactor, variant, material, className }, "card"));

</script>

<div
  data-lk-component="card"
  class={`${isClickable ? "clickable" : ""}  ${className || ""}`}
  {...lkCardAttrs}
  {...restProps}
>
  <div data-lk-card-element="padding-box" class={isScrollable ? "overflow-auto" : ""} data-lk-card-optical-correction={opticalCorrection}>
    <div data-lk-component="slot" data-lk-slot="children">
      {@render children?.()}
    </div>
    <!-- define types for material scrim thickness -->
  </div>
  {#if material === "glass"} 
    <MaterialLayer type="glass" materialProps={materialProps as LkMatProps_Glass} />
  {/if}
  {#if material === "flat"}
    <MaterialLayer type="flat" materialProps={{ bgColor: variant === "fill" ? bgColor : "transparent" }} />
  {/if}
  <!-- TODO: Define outlined card behavior -->
</div>