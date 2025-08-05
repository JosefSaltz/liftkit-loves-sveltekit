<script lang="ts">
  import { propsToDataAttrs } from "@/registry/sveltekit/lib/utilities";
  import "@/registry/sveltekit/components/text/text.css";
	import type { HTMLAttributes } from "svelte/elements";
	import type { ElementType, JSX } from "react";
	import type { Snippet } from "svelte";

  type LkSemanticTag = JSX.IntrinsicAttributes | Snippet;

  export interface LkTextProps extends HTMLAttributes<HTMLElement> {
    fontClass?: LkFontClass;
    content?: string;
    color?: LkColor;
    tag?: LkSemanticTag;
    className?: string; // explicitly extracting because internal logic controls its rendering order
  }

  let { tag = "div", fontClass, color, children, style, class: className = "", ...restProps }: LkTextProps = $props()
  const Tag = tag;
  /**Temporarily removing the attr spreader because it's not being used */
  // const textAttrs = useMemo(() => propsToDataAttrs(restProps, "text"), [restProps]);
</script>

<Tag data-lk-component="text" className={`${fontClass || ""} ${color ? "color-" + color : ""} ${className || ''}`} style={style} {...restProps}>
  {@render children?.()}
</Tag>

