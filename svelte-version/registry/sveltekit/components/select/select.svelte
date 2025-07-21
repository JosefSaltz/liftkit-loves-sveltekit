<script lang="ts">

// CustomSelect.tsx
import { setContext } from "svelte";
import Card, { LkCardProps } from "@/registry/sveltekit/components/card";
import Column from "@/registry/sveltekit/components/column";
import Icon from "@/registry/sveltekit/components/icon";
import { LkIconProps } from "@/registry/sveltekit/components/icon";
import "@/registry/sveltekit/components/select/select.css";
import StateLayer from "@/registry/sveltekit/components/state-layer";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  labelPosition?: "default" | "on-input";
  helpText?: string;
  placeholderText?: string;
  options: Option[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  children: React.ReactNode;
}

interface LkSelectContext {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  options: Option[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
}

export interface LkSelectTriggerProps {
  children: React.ReactElement;
}

export interface LkSelectMenuProps {
  children: React.ReactNode;
  cardProps?: LkCardProps;
}

export interface LkSelectOptionProps {
  value: string;
  children: React.ReactNode;
  onClick?: () => void;
  startIcon?: LkIconProps;
  endIcon?: LkIconProps;
}

// Context for select state
setContext<LkSelectContext>("SelectContext", {} as LkSelectContext);

  let { children, options = [], value = "", onChange, name }: SelectProps = $props();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const triggerRef = useRef(null);
  const contentRef = useRef(null);
  const hiddenSelectRef = useRef<HTMLSelectElement>(null);

  // Update selected value when prop changes
  $effect(() => {
    setSelectedValue(value);
  }, [value]);

  // Handle value changes and trigger onChange callback
  const handleValueChange = (newValue: string) => {
    setSelectedValue(newValue);
    setOpen(false);

    // Update hidden select and trigger change event
    if (hiddenSelectRef.current && onChange) {
      hiddenSelectRef.current.value = newValue;
      const syntheticEvent = {
        target: hiddenSelectRef.current,
        currentTarget: hiddenSelectRef.current,
        nativeEvent: new Event("change", { bubbles: true }),
        bubbles: true,
        cancelable: true,
        defaultPrevented: false,
        eventPhase: 0,
        isTrusted: false,
        timeStamp: Date.now(),
        type: "change",
        isDefaultPrevented: () => false,
        isPropagationStopped: () => false,
        persist: () => {},
        preventDefault: () => {},
        stopPropagation: () => {},
      } as React.ChangeEvent<HTMLSelectElement>;
      onChange(syntheticEvent);
    }
  };

  // Global singleton registry
  $effect(() => {
    if (!open) return;
    const self = { close: () => setOpen(false) };
    SelectRegistry.register(self);
    return () => SelectRegistry.unregister(self);
  });

  // Singleton registry to track open selects
  const SelectRegistry = (() => {
    interface SelectInstance {
      close: () => void;
    }

    let current: SelectInstance | null = null;
    return {
      register(instance: SelectInstance) {
        if (current && current !== instance) current.close();
        current = instance;
      },
      unregister(instance: SelectInstance) {
        if (current === instance) current = null;
      },
    };
  })();
</script>

<SelectContext.Provider
  value={{
    open,
    setOpen,
    triggerRef,
    contentRef,
    selectedValue,
    setSelectedValue: handleValueChange,
    options,
    onChange,
    name,
  }}
>
  <!-- Hidden native select for form compatibility -->
  <select
    ref={hiddenSelectRef}
    name={name}
    value={selectedValue}
    onChange={() => {}} // Controlled by our custom logic
    style={{
      position: "absolute",
      left: "-9999px",
      width: "1px",
      height: "1px",
      opacity: 0,
      pointerEvents: "none",
    }}
    tabIndex={-1}
    aria-hidden="true"
  >
    <option value="" disabled></option>
    {#each options as option}
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    {/each}
  </select>

  {@render children()}




