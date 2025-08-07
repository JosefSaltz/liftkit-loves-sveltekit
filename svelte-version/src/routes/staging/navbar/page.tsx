import NavBar from "@/registry/nextjs-reference/components/navbar";
import Section from "@/registry/nextjs-reference/components/section";
import Container from "@/registry/nextjs-reference/components/container";
import Button from "@/registry/nextjs-reference/components/button";
import { Dropdown, DropdownTrigger, DropdownMenu } from "@/registry/nextjs-reference/components/dropdown";
import MenuItem from "@/registry/nextjs-reference/components/menu-item";
import IconButton from "@/registry/nextjs-reference/components/icon-button";

export default function NavbarStaging() {
  return (
    <>
      <NavBar
        material="glass"
        navButtons={[
          <Button key="nav-button-1" variant="text" color="inversesurface" label="Button" size="sm"></Button>,
          <Button key="nav-button-2" variant="text" color="inversesurface" label="Button" size="sm"></Button>,
        ]}
        navDropdowns={[
          <Dropdown key="1">
            <DropdownTrigger>
              <Button
                key="nav-button-3"
                variant="outline"
                color="inversesurface"
                label="Dropdown"
                size="sm"
                endIcon="arrow-down-circle"
              ></Button>
            </DropdownTrigger>
            <DropdownMenu cardProps={{ scaleFactor: "subheading" }}>
              <MenuItem startIcon={{ name: "circle" }}>Agency Services</MenuItem>
              <MenuItem startIcon={{ name: "house" }}>Real Estate</MenuItem>
              <MenuItem startIcon={{ name: "dog" }}>Dog Hotel</MenuItem>
            </DropdownMenu>
          </Dropdown>,
        ]}
        iconButtons={[
          <IconButton key="1" fontClass="callout" icon="home" variant="text"></IconButton>,
          <IconButton key="2" fontClass="callout" icon="heart" variant="text"></IconButton>,
          <IconButton key="3" fontClass="callout" icon="share" variant="text"></IconButton>,
        ]}
        ctaButtons={[
          <Button key="nav-button-1" variant="outline" color="inversesurface" label="FAQ" size="sm"></Button>,
          <Button key="nav-button-2" variant="fill" color="primary" label="Get In Touch" size="sm"></Button>,
        ]}
      ></NavBar>
      <Section padding="md">
        <Container>Lorem ipsum dolor sit amet</Container>
      </Section>
      <Section padding="md">
        <Container>Lorem ipsum dolor sit amet</Container>
      </Section>
      <Section padding="md">
        <Container>Lorem ipsum dolor sit amet</Container>
      </Section>
      <Section padding="md">
        <Container>Lorem ipsum dolor sit amet</Container>
      </Section>
      <Section padding="md">
        <Container>Lorem ipsum dolor sit amet</Container>
      </Section>
      <Section padding="md">
        <Container>Lorem ipsum dolor sit amet</Container>
      </Section>
      <Section padding="md">
        <Container>Lorem ipsum dolor sit amet</Container>
      </Section>
      <Section padding="md">
        <Container>Lorem ipsum dolor sit amet</Container>
      </Section>
      <Section padding="md">
        <Container>Lorem ipsum dolor sit amet</Container>
      </Section>
      <Section padding="md">
        <Container>Lorem ipsum dolor sit amet</Container>
      </Section>
      <Section padding="md">
        <Container>Lorem ipsum dolor sit amet</Container>
      </Section>
      <Section padding="md">
        <Container>Lorem ipsum dolor sit amet</Container>
      </Section>
    </>
  );
}
