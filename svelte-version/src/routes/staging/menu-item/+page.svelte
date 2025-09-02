<script lang="ts">
  import Heading from "$components/heading";
  import Row from "$components/row";
  import Section from "$components/section";
  import Container from "$components/container";
  import { MenuItem, MenuItemGroup } from "$components/menu-item";

  const fontClasses: LkFontClass[] = [
    "display1",
    "display2",
    "title1",
    "title2",
    "title3",
    "heading",
    "subheading",
    "body",
    "callout",
    "label",
    "caption",
    "capline",
  ];
</script>

<Section padding="md">
  <Container>
    <Heading tag="h2" class="mb-md">
      Menu Item Component Tests
    </Heading>
  </Container>

  {#each fontClasses as fontClass}
    <Container class="mb-xl">
      <h2 class="subheading mono mb-xs">
        fontClass=<strong class="color-primary">{fontClass}</strong>
      </h2>
      <MenuItemGroup color="onsurface" fontClass={fontClass} />
    </Container>
  {/each}

  <MenuItemGroup color="warning" />
</Section>

