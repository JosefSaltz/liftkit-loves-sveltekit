<script lang="ts">
	import '$components/text/text.css';
	import type { HTMLAttributes } from 'svelte/elements';

	type LkSemanticTag = string;

	export interface LkTextProps extends HTMLAttributes<Text> {
		fontClass?: LkFontClass;
		content?: string;
		color?: LkColor;
		tag?: LkSemanticTag;
		className?: string; // explicitly extracting because internal logic controls its rendering order
	}

	let {
		tag = 'div',
		fontClass,
		color,
		children,
		style,
		class: className = '',
		...restProps
	}: LkTextProps = $props();

	/**Temporarily removing the attr spreader because it's not being used */
	// const textAttrs = useMemo(() => propsToDataAttrs(restProps, "text"), [restProps]);
</script>

<svelte:element
  this={tag}
	data-lk-component="text"
	class={`${fontClass || ''} ${color ? 'color-' + color : ''} ${className || ''}`}
	{style}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
