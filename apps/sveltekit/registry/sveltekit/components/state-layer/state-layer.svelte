<script lang="ts" module>
  export interface LkStateLayerProps {
    bgColor?: LkColor | "currentColor";
    forcedState?: "hover" | "active" | "focus"; // Used when you need a static state controlled by something higher, like a select field that keeps actively-selected options grayed out
  }
</script>

<script lang="ts">
  import "$components/state-layer/state-layer.css";

  let { bgColor = "currentColor", forcedState }: LkStateLayerProps = $props();
</script>

<div
  data-lk-component="state-layer"
  class={bgColor !== "currentColor" ? `bg-${bgColor}` : ""}
  style:backgroundColor={bgColor === "currentColor" ? "currentColor" : ''}
  {...(forcedState && { "data-lk-forced-state": forcedState })}
></div>