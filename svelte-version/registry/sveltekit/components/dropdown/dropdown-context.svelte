<script lang="ts">
  // CustomDropdown.tsx
  import Card, { LkCardProps } from "@/registry/nextjs/components/card";
  import React, { useContext, useState, useRef, useEffect, createContext } from "react";
  import Column from "@/registry/nextjs/components/column";
  import ReactDOM from "react-dom";
  import "@/registry/nextjs/components/dropdown/dropdown.css";
  import { setContext } from 'svelte';

  interface LkDropdownContext {
    open: boolean;
    setOpen: (open: boolean) => void;
    triggerRef: React.RefObject<HTMLElement | null>;
    contentRef: React.RefObject<HTMLDivElement | null>;
  }

  export interface LkDropdownTriggerProps {
    children: React.ReactElement;
  }

  export interface LkDropdownMenuProps {
    children: React.ReactNode;
    cardProps?: LkCardProps; // Optional props to pass to the child Card component.
  }

  // Context for dropdown state
  const DropdownContext = $setContext<LkDropdownContext>("DropdownContext", {} as LkDropdownContext);
    // TODO: Update this to a svelte type
  let { children }: { children: React.ReactNode } = $props();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const contentRef = useRef(null);

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