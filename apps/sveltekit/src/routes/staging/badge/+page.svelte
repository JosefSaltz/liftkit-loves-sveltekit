<script lang="ts">
  import Row from "@/registry/sveltekit/components/row";
  import Badge from "@/registry/sveltekit/components/badge";

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
</script>

<div>
  <Row>
    {#each buttonColors as color}
      <Badge color={color} scale="lg" iconStrokeWidth={1} />
    {/each}
  </Row>
  <Row>
    {#each buttonColors as color}
      <Badge color={color}/>
    {/each}
  </Row>
</div>