import "$components/dropdown/dropdown.css";
import type { LkCardProps } from "$components/card";
import type { HTMLAttributes } from "svelte/elements";

export interface LkDropdownContext {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: HTMLElement | null;
  contentRef: HTMLDivElement | null;
}

export interface LkDropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
  cardProps?: LkCardProps; // Optional props to pass to the child Card component.
}
// Shared State
let open = $state(false);
const setOpen = (state: boolean) => { open = state }

let triggerRef = $state<HTMLElement | null>(null);
const setTriggerRef = (ref: HTMLElement) => { triggerRef = ref }

let contentRef = $state<HTMLElement | null>(null);
const setContentRef = (ref: HTMLElement) => { contentRef = ref }

// Singleton registry to track open dropdowns
const DropdownRegistry = (() => {
  interface DropdownInstance {
    close: () => void;
  }

  let current: DropdownInstance | null = null;

  return {
    register(instance: DropdownInstance) {
      if (current && current !== instance) current.close();
      current = instance;
    },
    unregister(instance: DropdownInstance) {
      if (current === instance) current = null;
    },
  };
})();

const DropdownState = {
  open,
  setOpen,
  triggerRef,
  setTriggerRef,
  contentRef,
  setContentRef,
  DropdownRegistry
}

export type DropdownState = typeof DropdownState;

export default DropdownState;