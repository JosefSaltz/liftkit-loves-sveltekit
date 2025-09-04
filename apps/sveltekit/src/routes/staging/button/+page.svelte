<script lang="ts">
	import Button from '$components/button';
	import Section from '$components/section';
	import Heading from '$components/heading';
	import Grid from '$components/grid';
	import Row from '$components/row';
	import ThemeController from '$components/theme-controller';
	import type { IconName } from 'lucide-react/dynamic';

	const scaleFactors: LkFontClass[] = [
		'display1',
		'display2',
		'title1',
		'title2',
		'title3',
		'heading',
		'subheading',
		'body',
		'callout',
		'label',
		'caption',
		'capline'
	] as const;

	const buttonColors: LkColorWithOnToken[] = [
		'primary',
		'secondary',
		'tertiary',
		'error',
		'warning',
		'info',
		'success',
		'primarycontainer',
		'secondarycontainer',
		'tertiarycontainer',
		'errorcontainer',
		'warningcontainer',
		'infocontainer',
		'successcontainer',
		'surface',
		'surfacecontainerlowest',
		'surfacecontainerlow',
		'surfacecontainerhigh',
		'surfacecontainerhighest',
		'surfacevariant',
		'inversesurface',
		'background'
	] as const;

	const sizes = ['sm', 'md', 'lg'] as const;
	const variants = ['fill', 'outline', 'text'] as const;
	const iconConfigs = [
		{ startIcon: undefined, endIcon: undefined, label: 'No Icons' },
		{ startIcon: 'circle', endIcon: undefined, label: 'Start Icon' },
		{ startIcon: undefined, endIcon: 'circle', label: 'End Icon' },
		{ startIcon: 'circle', endIcon: 'circle', label: 'Both Icons' }
	] as const;
  // GPT-5 Solution
  const buttons = buttonColors.flatMap((color) =>
    variants.flatMap((variant) =>
      sizes.flatMap((size) =>
        iconConfigs.map((config) => ({
          color,
          variant,
          size,
          ...config
        }))
      )
    )
  );
</script>


<Section>
  <ThemeController />
  <Heading tag="h1" fontClass="display1-bold" class="text-align-center">Hello world!</Heading>
</Section>
<Grid columns={4} gap="md" style="alignItems: 'center'; justifyItems: 'center';" >
  {#each buttons as { color, variant, size, startIcon, endIcon }, i (i)}
    <Button
      label="Button"
      {variant}
      {color}
      {size}
      {startIcon}
      {endIcon}
      opticIconShift={false}
      style="align-self: center; justify-self: center;"
    />
  {/each}
</Grid>
<Row alignItems="start" style="gap: var(--lk-size-md);" class="w-full" wrapChildren={true}
 />

