<script lang="ts">
import Button from "$components/button";
import Section from "$components/section";
import Heading from "$components/heading";
import Grid from "$components/grid";
import Row from "$components/row";
import ThemeController from "$components/theme-controller";
import type { IconName } from "lucide-react/dynamic";
	import { onMount, type Snippet } from "svelte";

  type ButtonSnippetProps = {
    colors: LkColorWithOnToken[];
    colorIndex: number;
    variants: typeof buttonVariants;
    variantIndex: number;
    sizes: typeof buttonSizes;
    sizeIndex: number;
    iconIndex: number;
    currentConfig: (typeof iconConfigs)[number];
	};
  let buttonsToRender = $state<undefined | Snippet[]>(generateButtons(buttonColors, buttonVariants, buttonSizes, iconConfigs))
  const buttonSizes = ['sm', 'md', 'lg'] as const;
  const buttonVariants = ["fill", "outline", "text"] as const;
	const iconConfigs = [
		{ startIcon: undefined, endIcon: undefined, label: 'No Icons' },
		{ startIcon: 'circle', endIcon: undefined, label: 'Start Icon' },
		{ startIcon: undefined, endIcon: 'circle', label: 'End Icon' },
		{ startIcon: 'circle', endIcon: 'circle', label: 'Both Icons' }
	] as const;

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
    "primary",
    "secondary",
    "tertiary",
    "error",
    "warning",
    "info",
    "success",
    "primarycontainer",
    "secondarycontainer",
    "tertiarycontainer",
    "errorcontainer",
    "warningcontainer",
    "infocontainer",
    "successcontainer",
    "surface",
    "surfacecontainerlowest",
    "surfacecontainerlow",
    "surfacecontainerhigh",
    "surfacecontainerhighest",
    "surfacevariant",
    "inversesurface",
    "background",
  ] as const;

  const generateButtons = (
        colors: LkColorWithOnToken[],
        variants: typeof buttonVariants,
        sizes: typeof buttonSizes,
        icons: typeof iconConfigs,
        colorIndex = 0,
        variantIndex = 0,
        sizeIndex = 0,
        iconIndex = 0
      ): Snippet[] => {
        // Return an empty array if the index exceeds the array range
        if (colorIndex >= colors.length) return [];
        // If variant index exceeds possible variants
        if (variantIndex >= variants.length)
          return generateButtons(colors, variants, sizes, icons, colorIndex + 1, 0, 0, 0);
        // If size index exceeds possible sizes
        if (sizeIndex >= sizes.length)
          return generateButtons(colors, variants, sizes, icons, colorIndex, variantIndex + 1, 0, 0);
        // If iconIndex exceeds 
        if (iconIndex >= icons.length)
          return generateButtons(colors, variants, sizes, icons, colorIndex, variantIndex, sizeIndex + 1, 0);

        const currentConfig = icons[iconIndex];
        
        return [
          button,
          ...generateButtons(
            colors,
            variants,
            sizes,
            iconConfigs,
            colorIndex,
            variantIndex,
            sizeIndex,
            iconIndex + 1
          ),
        ];
      };

  onMount(() => {
    buttonsToRender = generateButtons(buttonColors, buttonVariants, buttonSizes, iconConfigs);
  })
</script>

{#snippet button({
	colors,
	colorIndex,
	variants,
	variantIndex,
	sizes,
	sizeIndex,
	iconIndex,
	currentConfig
}: ButtonSnippetProps)}
	<Button
		label={`Button`}
		variant={variants[variantIndex] as 'fill' | 'outline' | 'text'}
		color={colors[colorIndex] as LkColorWithOnToken}
		size={sizes[sizeIndex] as typeof buttonSizes[number]}
		startIcon={currentConfig.startIcon as IconName | undefined}
		endIcon={currentConfig.endIcon as IconName | undefined}
		opticIconShift={false}
		style={'alignSelf: "center"; justifySelf: "center";'}
	/>
{/snippet}

<div>
  <Section>
  <ThemeController/>
    <Heading tag="h1" fontClass="display1-bold" className="text-align-center">
      Hello world!
    </Heading>
  </Section>
  <Grid columns={4} gap="md" style='alignItems: "center"; justifyItems: "center";'>

    {(() => {

      

      return ;
    })}
    
  </Grid>
  <Row alignItems="start" style='gap: "var(--lk-size-md)";' class="w-full" wrapChildren={true}></Row>
</div>
