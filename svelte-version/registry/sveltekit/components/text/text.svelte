<script lang="ts">
  import { propsToDataAttrs } from "$registry/sveltekit/lib/utilities";
  import "$registry/sveltekit/components/text/text.css";

  type LkSemanticTag = keyof JSX.IntrinsicElements;

  export interface LkTextProps extends React.HTMLAttributes<HTMLElement> {
    fontClass?: LkFontClass;
    content?: string;
    color?: LkColor;
    tag?: LkSemanticTag;
    className?: string; // explicitly extracting because internal logic controls its rendering order
  }

  let { tag = "div", fontClass, color, children, style, className, ...restProps }: LkTextProps = $props()
  const Tag = tag as ElementType;
  /**Temporarily removing the attr spreader because it's not being used */
  // const textAttrs = useMemo(() => propsToDataAttrs(restProps, "text"), [restProps]);
</script>

<Tag data-lk-component="text" className={`${fontClass || ""} ${color ? "color-" + color : ""} ${className || ''}`} style={style} {...restProps}>
  {@render children()}
</Tag>

