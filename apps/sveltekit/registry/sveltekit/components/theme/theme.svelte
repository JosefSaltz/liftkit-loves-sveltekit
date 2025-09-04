<script lang="ts">
  import { onMount, setContext, getContext } from "svelte";
  import { globalTheme, updateTheme } from "./theme.svelte.ts";
  // Props
  let { children } = $props();
  // Context helper functions
  export function getThemeContext() { return getContext<Partial<typeof globalTheme>>("ThemeContext"); }
  export function setThemeContext(themeData: Partial<typeof globalTheme>) {
    setContext('ThemeContext', themeData)
  };
  setContext("ThemeContext", globalTheme);

// update the root css variables with the theme values
$effect(() => {
  const root = document.documentElement;
  // console.log(root);
  Object.keys(theme.light).forEach((key) => {
    root.style.setProperty(`--light__${key.toLowerCase()}_lkv`, theme.light[key]);
  });

  Object.keys(theme.dark).forEach((key) => {
    root.style.setProperty(`--dark__${key.toLowerCase()}_lkv`, theme.dark[key]);
  });

  if (colorMode === "dark") {
    Object.keys(theme.dark).forEach((key) => {
      root.style.setProperty(`--light__${key.toLowerCase()}_lkv`, theme.dark[key]);
    });
  }
});
//Initial theme generation on mount
onMount(() => {
  updateTheme(palette);
  /**TODO: Debundle scroll behavior overrides from the central theme context */
  /**This is such a confusing place to put it. */

  const disableScrollOnNumberInputs = (event: WheelEvent) => {
    const activeElement = document.activeElement as HTMLInputElement;
    if (activeElement?.type === "number") {
      event.preventDefault();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const activeElement = document.activeElement as HTMLInputElement;
    if (["ArrowUp", "ArrowDown"].includes(event.key) && activeElement?.type === "number") {
      event.preventDefault();
    }
  };

  document.addEventListener("wheel", disableScrollOnNumberInputs, {
    passive: false,
  });
  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("wheel", disableScrollOnNumberInputs);
    document.removeEventListener("keydown", handleKeyDown);
  };
});
</script>

{@render children?.()}