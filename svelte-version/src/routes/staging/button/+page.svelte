<script lang="ts">
import Button from "$components/button";
import Section from "$components/section";
import Heading from "$components/heading";
import Grid from "$components/grid";
import Row from "$components/row";
import ThemeController from "$components/theme-controller";

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
  ];

  const buttonVariants = ["fill", "outline", "text"];
</script>

<div>
  <Section>
  <ThemeController/>
    <Heading tag="h1" fontClass="display1-bold" className="text-align-center">
      Hello world!
    </Heading>
  </Section>
  <Grid columns={4} gap="md" style={{alignItems: "center", justifyItems: "center"}}>

    {(() => {
      const sizes = ["sm", "md", "lg"];
      const iconConfigs = [
        { startIcon: undefined, endIcon: undefined, label: "No Icons" },
        { startIcon: "circle", endIcon: undefined, label: "Start Icon" },
        { startIcon: undefined, endIcon: "circle", label: "End Icon" },
        { startIcon: "circle", endIcon: "circle", label: "Both Icons" },
      ];

      const generateButtons = (
        colors: LkColorWithOnToken[],
        variants: string[],
        sizes: string[],
        iconConfigs: { startIcon?: string; endIcon?: string; label: string }[],
        colorIndex = 0,
        variantIndex = 0,
        sizeIndex = 0,
        iconIndex = 0
      ): React.JSX.Element[] => {
        if (colorIndex >= colors.length) return [];
        if (variantIndex >= variants.length)
          return generateButtons(colors, variants, sizes, iconConfigs, colorIndex + 1, 0, 0, 0);
        if (sizeIndex >= sizes.length)
          return generateButtons(colors, variants, sizes, iconConfigs, colorIndex, variantIndex + 1, 0, 0);
        if (iconIndex >= iconConfigs.length)
          return generateButtons(colors, variants, sizes, iconConfigs, colorIndex, variantIndex, sizeIndex + 1, 0);

        const currentConfig = iconConfigs[iconIndex];
        const button = (
          
        );
        
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

      return generateButtons(buttonColors, buttonVariants, sizes, iconConfigs);
    })()}
    
  </Grid>
  <Row alignItems="start" style={{ gap: "var(--lk-size-md)" }} className="w-full" wrapChildren={true}></Row>
</div>
