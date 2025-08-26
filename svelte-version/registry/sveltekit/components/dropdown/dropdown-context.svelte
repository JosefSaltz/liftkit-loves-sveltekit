<script lang="ts" module>
  // CustomDropdown.tsx
  import type { LkCardProps } from "$components/card";
  import "$components/dropdown/dropdown.css";
  import { setContext, type Snippet } from 'svelte';

  interface LkDropdownContext {
    open: boolean;
    setOpen: (open: boolean) => void;
    triggerRef: React.RefObject<HTMLElement | null>;
    contentRef: React.RefObject<HTMLDivElement | null>;
  }

  export interface LkDropdownTriggerProps {
    children: Snippet;
  }

  export interface LkDropdownMenuProps {
    children: Snippet;
    cardProps?: LkCardProps; // Optional props to pass to the child Card component.
  }
  // Context for dropdown state
  setContext<LkDropdownContext>("DropdownContext", {} as LkDropdownContext);
  let open = $state(false);
  const setOpen = (state: boolean) => { open = state };
  const triggerRef = $state(null);
  const contentRef = $state(null);

  // Global singleton registry
  $effect(() => {
    if (!open) return;
    const self = { close: () => setOpen(false) };
    DropdownRegistry.register(self);
    return () => DropdownRegistry.unregister(self);
  });

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
</script>