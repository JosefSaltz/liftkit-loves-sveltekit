<!-- <script lang="ts">
  import { setContext, getContext, onMount } from "svelte";
  import type { ThemeContext } from "./theme.svelte";
  let { children } = $props();
  let themeContext = $state<ThemeContext | undefined>(undefined);

  // Context helper functions
  export function getThemeContext() { return getContext<ThemeContext>("ThemeContext"); }
  export function setThemeContext(themeData: Partial<ThemeContext>) {
    setContext('ThemeContext', themeData)
  };
  setContext("ThemeContext", themeContext);
</script>

{@render children?.()} -->