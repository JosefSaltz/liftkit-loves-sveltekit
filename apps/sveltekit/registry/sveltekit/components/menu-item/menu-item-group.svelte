<script lang="ts">
	import Row from "../row";
import MenuItem from "./menu-item.svelte";
  import type { LkIconProps } from "$components/icon";

  type MenuItemGroupProps = {
    color?: LkColor | string;
    fontClass?: LkFontClass;
  }

  let { color = "warning", fontClass = "body" }: MenuItemGroupProps = $props();
  
  const startIconConfig: LkIconProps = {
    name: "circle",
    fontClass: "body",
    color: "error",
    display: "block",
    strokeWidth: 4,
  };

  const endIconConfig: LkIconProps = {
    name: "arrow-right",
    fontClass: "body",
    color: "success",
    display: "block",
    strokeWidth: 2,
  };

  function* TabIndexGenerator() {
    let tabIndex = 0;
    yield tabIndex;
  }

  function* ListenableKeyGenerator() {
    const availableKeys = [
      '1', '2', '3', '4', '5',
      '6', '7', '8', '9', '0',
      '-', '=', '`', 
    ]
  }
</script>

<div class="bg-surfacecontainerhigh p-xl">
  <Row gap="md">
    <div class={`tempcard color-${color}`}>
      <MenuItem tabindex={TabIndexGenerator().value} fontClass={fontClass}>Start icon</MenuItem>
      <MenuItem tabindex={TabIndexGenerator().next().value} fontClass={fontClass}>Start icon with long text</MenuItem>
      <MenuItem tabindex={TabIndexGenerator().next().value} fontClass={fontClass}>boop</MenuItem>
      <MenuItem tabindex={TabIndexGenerator().next().value} fontClass={fontClass}>Start icon with extremely long text</MenuItem>
    </div>
    <div class={`tempcard color-${color}`}>
      <MenuItem fontClass={fontClass} startIcon={startIconConfig}>
        Start icon
      </MenuItem>
      <MenuItem fontClass={fontClass} startIcon={startIconConfig}>
        Start icon with long text
      </MenuItem>
      <MenuItem fontClass={fontClass} startIcon={startIconConfig}>
        boop
      </MenuItem>
      <MenuItem fontClass={fontClass} startIcon={startIconConfig}>
        Start icon with extremely long text
      </MenuItem>
    </div>
    <div class={`tempcard color-${color}`}>
      <MenuItem fontClass={fontClass} endIcon={endIconConfig}>
        End icon
      </MenuItem>
      <MenuItem fontClass={fontClass} endIcon={endIconConfig}>
        End icon with long text
      </MenuItem>
      <MenuItem fontClass={fontClass} endIcon={endIconConfig}>
        boop
      </MenuItem>
      <MenuItem fontClass={fontClass} endIcon={endIconConfig}>
        End icon with extremely long text
      </MenuItem>
    </div>
    <div class={`tempcard color-${color}`}>
      <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
        End icon
      </MenuItem>
      <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
        End icon with long text
      </MenuItem>
      <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
        boop
      </MenuItem>
      <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
        End icon with extremely long text
      </MenuItem>
    </div>
  </Row>
</div>

<style>
  .tempcard {
    padding: 1em;
    background-color: var(--lk-surfacecontainerlowest);
    border-radius: 0.5em;
    display: flex;
    flex-flow: column nowrap;
    flex: 1 0 0;
    flex-basis: 0;
    overflow: hidden;
  }
</style>