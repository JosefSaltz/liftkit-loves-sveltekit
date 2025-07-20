<script lang="ts">
  import "$registry/sveltekit/components/state-layer/state-layer.css";

  export interface LkStateLayerProps {
    bgColor?: LkColor | "currentColor";
    forcedState?: "hover" | "active" | "focus"; // Used when you need a static state controlled by something higher, like a select field that keeps actively-selected options grayed out
  }

  let { bgColor = "currentColor", forcedState }: LkStateLayerProps = $props() 

</script>

<div
  data-lk-component="state-layer"
  className={bgColor !== "currentColor" ? `bg-${bgColor}` : ""}
  style={bgColor === "currentColor" ? { backgroundColor: "currentColor" } : {}}
  {...(forcedState && { "data-lk-forced-state": forcedState })}
></div>