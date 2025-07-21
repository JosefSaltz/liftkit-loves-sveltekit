<script lang="ts">
  import { propsToDataAttrs } from "@/registry/sveltekit/lib/utilities";
  import "@/registry/sveltekit/components/text-input/text-input.css";
  import Icon from "@/registry/sveltekit/components/icon";
  import Row from "@/registry/sveltekit/components/row";
  import Text from "@/registry/sveltekit/components/text";
  import StateLayer from "@/registry/sveltekit/components/state-layer";
  import { IconName } from "lucide-react/dynamic";
  import { truncateSync } from "node:fs";
  Text;

  interface LkTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelPosition?: "default" | "on-input";
    helpText?: string;
    placeholder?: string;
    name?: string;
    endIcon?: IconName;
    labelBackgroundColor?: LkColor;
  }

  let {
    labelPosition = "default",
    helpText,
    placeholder = "Placeholder",
    name = "Label",
    endIcon = "search",
    labelBackgroundColor,
    ...restProps
  }: LkTextInputProps = $props();

  const textInputProps = $derived(propsToDataAttrs({ labelPosition }, "text-input"));

  let inputValue = $state("");
  const setInputValue = (state: string) => { inputValue = state}
</script>

<div data-lk-component="text-input" {...textInputProps}>
  {#if labelPosition === "default"}
    <label htmlFor={name} className="label">
      {name}
    </label>
  {/if}

  <div data-lk-text-input-el="input-wrap" data-lk-input-help-text={helpText ? "true" : "false"} data-help-text={helpText}>
    {#if labelPosition === "on-input"}
      <label
        htmlFor={name}
        className={`body ${labelBackgroundColor ? ` bg-${labelBackgroundColor}` : ""} ${inputValue ? "on-field-with-value-set" : ""}`}
      >
        {name}
      </label>
    {/if}
    <input
      type="text"
      name={name}
      id={name}
      placeholder={labelPosition !== "on-input" ? placeholder : ""}
      onchange={(e) => setInputValue(e.target.value)}
      value={inputValue}
      {...restProps}
    />
    <StateLayer />
    <Icon name={endIcon} />
    <!-- implementation omitted for brevity -->
  </div>

  {#if helpText}
    <Row alignItems="center">
      <Icon name="info" fontClass="capline" color="outline" opticShift={true} />
      <Text color="outline" fontClass="caption" className="m-left-2xs">Help text goes here</Text>
    </Row>
  {/if}
</div>
