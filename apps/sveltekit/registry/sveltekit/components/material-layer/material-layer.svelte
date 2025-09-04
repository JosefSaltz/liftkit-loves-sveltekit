<script lang="ts">
  // import "./material-layer-core.css";
  import { propsToDataAttrs } from "@/registry/sveltekit/lib/utilities";

  /** LKMatProps is an object of any of the given types. Each material type has different unique props. */
  type LkMatProps = LkMatProps_Glass | LkMatProps_Flat;

  type LkMatProps_Glass = {
    thickness?: "thick" | "normal" | "thin"; // Thickness of the glass material. Thicker material blurs more.
    tint?: LkColor; // Optional tint color for the glass material.
    tintOpacity?: number; // Optional opacity for the tint color. Defaults to 0.5.
    light?: boolean; // Optional. If true, adds a secondary layer for luminance effects.
    lightExpression?: string; //Optional. The value to pass to the light's background css property. Should be a gradient.
  };

  type LkMatProps_Flat = {
    bgColor?: LkColorWithOnToken;
    textColor?: LkColor;
  };

  type LkMaterialType = "flat" | "glass" | "debug";

  interface LkMaterialLayerProps extends React.HTMLAttributes<HTMLDivElement> {
    zIndex?: number; // Optional z-index for the material layer. Different use cases might need it to be at different z-indexes.
    type?: LkMaterialType;
    materialProps?: LkMatProps; // Optional material-specific properties
  }

  let { zIndex = 0, type, materialProps }: LkMaterialLayerProps = $props();
  /**If materialProps are provided, loop through the keys and pass each one as a data attribute to the component. */
  let lkMatProps: LkMatProps | undefined = $derived(materialProps ? propsToDataAttrs(materialProps, `${type}`) : undefined);
  // Svelte work around for Next.js CSS-In-JS feature
  const blurToLkSize = (blur: LkMatProps_Glass["thickness"]) => { 
    if(blur === "thick") return '--lk-size-lg';
    if(blur === "normal") return "--lk-size-md";
    if(blur === "thin") return "--lk-size-xs";
    // Exception default
    return "--lk-size-md"
   }
  // Dynamic CSS-In-JS values extrapolated
  const baseGlassOpacity = $derived(`${getGlassFillOpacity((materialProps as LkMatProps_Glass)?.thickness || "normal")}`)
  const materialBlur = $derived(blurToLkSize((materialProps as LkMatProps_Glass)?.thickness || "normal"));
  const materialBackgroundColorLight = $derived(`${getGlassFillOpacity((materialProps as LkMatProps_Glass)?.thickness || "normal")}`);
  const materialBackgroundColor = $derived(`--lk-${(materialProps as LkMatProps_Glass)?.tint || "transparent"}`);
  const materialOpacity = $derived((materialProps as LkMatProps_Glass)?.tintOpacity || 0.2);
  const flatBgColor = $derived(`${getBgColor((materialProps as LkMatProps_Flat)?.bgColor)}`);
  /**Commented out, was likely used for debugging */

  // switch (material) {
  //   case "glass":
  //     break;
  //   case "debug":
  //     break;
  // }

  function getGlassFillOpacity(thickness: "thick" | "normal" | "thin") {
    switch (thickness) {
      case "thick":
        return 0.8;
      case "normal":
        return 0.6;
      case "thin":
        return 0.4;
      default:
        return 0.6;
    }
  }

  function getBgColor(token: LkColorWithOnToken | undefined) {
    if (token) {
      return `var(--lk-${token})`;
    } else {
      return `var(--lk-surface)`;
    }
  }
</script>

 <div data-lk-component="material-layer" data-lk-material-type={type} style:zIndex={ zIndex } style="
  --base-glass-opacity: {baseGlassOpacity}
  --flat-background-color: {flatBgColor}
  --material-blur: {materialBlur}; 
  --material-background-light: {materialBackgroundColorLight}
  --material-background-color: {materialBackgroundColor}; 
  --material-opacity: {materialOpacity}
  ">
  {#if type === "glass"}
    <div>
      <div data-lk-material-sublayer="texture">
        {#if (materialProps as LkMatProps_Glass)?.tint}
          <div data-lk-material-sublayer="tint">
            {#if (materialProps as LkMatProps_Glass)?.light} 
              <div data-lk-material-sublayer="light"></div>
            {/if}
          </div>
        {/if}
      </div>
      <div data-lk-material-sublayer="base-glass-fill"></div>
    </div>
  {/if}

  {#if type === "flat"}
    <div><div data-lk-material-sublayer="bgColor"></div></div>
  {/if}
</div>

<style>
  [data-lk-component="material-layer"] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    [data-lk-material-sublayer] {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
  }

  /* Glass behavior */

  [data-lk-material-type="glass"] {
    [data-lk-material-sublayer="tint"] {
      opacity: var(--material-opacity);
      background-color: var(--material-background-color);
    }

    [data-lk-material-sublayer="texture"] {
      z-index: 1;
      isolation: isolate;
      backdrop-filter: blur(var(--material-blur));
    }

    [data-lk-material-sublayer="light"] {
      background: var(--material-background-light);
      mix-blend-mode: soft-light;
      opacity: 1;
    }

    [data-lk-material-sublayer="base-glass-fill"] {
      background-color: var(--lk-surface);
      opacity: var(--base-glass-opacity);
    }
  }
  [data-lk-material-type="flat"] {
    [data-lk-material-sublayer="bgColor"] {
      background-color: var(--flat-background-color);
    }
  }
</style>