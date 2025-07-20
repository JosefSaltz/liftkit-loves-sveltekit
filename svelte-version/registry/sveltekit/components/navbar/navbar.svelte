<script lang="ts">
  import { propsToDataAttrs } from "$registry/sveltekit/lib/utilities";
  import Image from "$registry/sveltekit/components/image";
  import IconButton from "$registry/sveltekit/components/icon-button";
  import Row from "$registry/sveltekit/components/row";
  import Column from "$registry/sveltekit/components/column";
  import "$registry/sveltekit/components/navbar/navbar.css";
  import MaterialLayer from "$registry/sveltekit/components/material-layer";
  import PlaceholderBlock from "$registry/sveltekit/components/placeholder-block";

  interface LkNavBarProps extends React.HTMLAttributes<HTMLDivElement> {
    material?: LkMaterial;
    // TODO: These types need to be changed to something more appropriate
    navButtons?: React.ReactNode;
    navDropdowns?: React.ReactNode;
    iconButtons?: React.ReactNode;
    ctaButtons?: React.ReactNode;
  }

  /**
   * A responsive navigation bar component that displays different layouts for desktop and mobile views.
   *
   * @param material - The visual style/material of the navbar, defaults to "flat"
   * @param navButtons - React elements to be displayed as navigation buttons
   * @param navDropdowns - React elements to be displayed as navigation dropdown menus
   * @param iconButtons - React elements to be displayed as icon-based buttons
   * @param ctaButtons - React elements to be displayed as call-to-action buttons
   * @param restProps - Additional props to be passed to the component
   *
   * @returns A JSX element containing a responsive navbar with desktop and mobile layouts
   *
   * @example
   * ```tsx
   * <NavBar
   *   material="elevated"
   *   navButtons={<Button>Home</Button>}
   *   navDropdowns={<Dropdown items={menuItems} />}
   *   iconButtons={<IconButton icon="search" />}
   *   ctaButtons={<Button variant="primary">Sign Up</Button>}
   * />
   * ```
   */
  let {
    material = "flat",
    navButtons,
    navDropdowns,
    iconButtons,
    ctaButtons,
    ...restProps
  }: LkNavBarProps = $props()
  const dataAttrs = $state(propsToDataAttrs({ material, restProps }, "navbar"));

  let menuOpen = useState(false);
  const setMenuOpen = (state: boolean) => menuOpen = state;
  const toggleMenu = () => setMenuOpen(!menuOpen);


  // If no navButtons or navDropdowns are provided, render placeholder blocks
  function getPlaceholderBlocks(count: number) {
    const blocks = [];
    for (let i = 0; i < count; i++) {
      blocks.push(() => <PlaceholderBlock key={i} />);
    }
    return blocks;
  }

</script>

<div data-lk-component="navbar" {...dataAttrs}>
  <!-- Desktop Navbar -->
  <div className="navbar-desktop">
    <Row alignItems="center" gap="sm">
      <Link href="/">
        <Image alt="" src="/logotype.svg" height="md"/>
      </Link>
    </Row>
    <Row>
      <Row data-lk-slot="nav-buttons">{navButtons || getPlaceholderBlocks(2)}</Row>
      <Row data-lk-slot="nav-dropdowns">{navDropdowns || getPlaceholderBlocks(2) }</Row>
    </Row>
    <Row data-lk-navbar-el="nav-menu-end">
      <div data-lk-slot="nav-icon-buttons">{iconButtons || getPlaceholderBlocks(3)}</div>
      <div data-lk-slot="nav-cta-buttons">{ctaButtons || getPlaceholderBlocks(2)}</div>
    </Row>
  </div>

  <!-- Mobile Navbar -->
  <div data-lk-navbar-el="nav-menu">
    <Column alignItems="start" className={`navbar-mobile ${menuOpen ? "active" : ""}`}>
      <IconButton icon="menu" onClick={() => toggleMenu()} />
      <Link href="/">
        <Image alt="" src="/vercel.svg" width="md" height="md" />
      </Link>
      <Column>{navButtons}</Column>
      <Column>{navDropdowns}</Column>
      <div>{iconButtons}</div>
      <Column className="flex-h gap-sm">{ctaButtons}</Column>
    </Column>
  </div>
  {material === "glass" && <MaterialLayer type="glass"></MaterialLayer>}
</div>

