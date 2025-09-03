<script lang="ts">
  import Column from "$components/column";
  import Heading from "$components/heading";
  import Row from "$components/row";
  import Section from "$components/section";
  import Container from "$components/container";
  import MenuItem from "$components/menu-item";
  import type { LkIconProps } from "$components/icon/icon.types";
  import { DropdownTrigger, DropdownMenu, Dropdown } from "$components/dropdown";
  import IconButton from "$components/icon-button";

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
    
  const startIconConfig: LkIconProps = {
    name: "circle",
    fontClass: "body",
    color: "error",
    display: "block",
    strokeWidth: 4,
  };

  const endIconConfig: LkIconProps = {
    name: "arrow-right",
    fontClass: "body",
    color: "success",
    display: "block",
    strokeWidth: 2,
  };
// This is left over unused code, if you wanted to implement this it needs its own Svelte file
// function MenuItemGroup({
//   color = "warning",
//   fontClass = "body",
// }: {
//   color?: LkColor | string;
//   fontClass?: LkFontClass;
// }) {
//   return (
//     <>
//       <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
//         End icon
//       </MenuItem>
//       <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
//         End icon with long text
//       </MenuItem>
//       <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
//         boop
//       </MenuItem>
//       <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
//         End icon with extremely long text
//       </MenuItem>
//     </>
//   );
// }
</script>

<Section padding="md">
  <Container>
    <Heading tag="h2" class="mb-md">
      Dropdown Menu Component Tests
    </Heading>
  </Container>
  <Row defaultChildBehavior="auto-grow">
    <Column>
      {#each fontClasses as fontClass}
        <div>
          <h2 class="subheading mono mb-xs">
            fontClass=<strong class="color-primary">{fontClass}</strong>
          </h2>
          <Dropdown>
            <DropdownTrigger>
              <IconButton fontClass={fontClass} icon="ellipsis"></IconButton>
            </DropdownTrigger>
            <DropdownMenu
              cardProps={{ scaleFactor: fontClass, material: "glass", materialProps: { thickness: "normal" } }}
            >
              <DropdownMenu startIcon={startIconConfig} endIcon={endIconConfig}>
                End icon with extremely long text
              </DropdownMenu>
              <DropdownMenu startIcon={startIconConfig} endIcon={endIconConfig}>
                End icon with extremely long text
              </DropdownMenu>
              <DropdownMenu startIcon={startIconConfig} endIcon={endIconConfig}>
                End icon with extremely long text
              </DropdownMenu>
            </DropdownMenu>
          </Dropdown>
        </div>
      {/each}
    </Column>
    <Column>
      {#each fontClasses as fontClass}
        <div>
          <h2 class="subheading mono mb-xs">
            fontClass=<strong class="color-primary">{fontClass}</strong>
          </h2>
          <Dropdown>
            <DropdownTrigger>
              <IconButton fontClass={fontClass} icon="ellipsis"></IconButton>
            </DropdownTrigger>
            <DropdownMenu
              cardProps={{ scaleFactor: fontClass, material: "glass", materialProps: { thickness: "normal" } }}
            >
              <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                End icon with extremely long text
              </MenuItem>
              <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                End icon with extremely long text
              </MenuItem>
              <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                End icon with extremely long text
              </MenuItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      {/each}
    </Column>
    <Column>
      {#each fontClasses as fontClass}
        <div>
          <h2 class="subheading mono mb-xs">
            fontClass=<strong class="color-primary">{fontClass}</strong>
          </h2>
          <Dropdown>
            <DropdownTrigger>
              <IconButton fontClass={fontClass} icon="ellipsis"></IconButton>
            </DropdownTrigger>
            <DropdownMenu
              cardProps={{ scaleFactor: fontClass, material: "glass", materialProps: { thickness: "normal" } }}
            >
              <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                End icon with extremely long text
              </MenuItem>
              <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                End icon with extremely long text
              </MenuItem>
              <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                End icon with extremely long text
              </MenuItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      {/each}
    </Column>
  </Row>
</Section>

