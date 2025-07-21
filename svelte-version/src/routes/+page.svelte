<script lang="ts">
  import styles from "./page.module.css";
  import Section from "@/registry/sveltekit/components/section";
  import Text from "@/registry/sveltekit/components/text";
  import Row from "@/registry/sveltekit/components/row";
  
  import Sticker from "@/registry/sveltekit/components/sticker";
  import Button from "@/registry/sveltekit/components/button";
  import Image from "@/registry/sveltekit/components/image";
  import Badge from "@/registry/sveltekit/components/badge";
  import Icon from "@/registry/sveltekit/components/icon";
  import Grid from "@/registry/sveltekit/components/grid";
  import TabContent from "@/registry/sveltekit/components/tab-content";
  import Tabs from "@/registry/sveltekit/components/tabs";
  import Card from "@/registry/sveltekit/components/card";
  
  import NavBar from "@/registry/sveltekit/components/navbar";
  import IconButton from "@/registry/sveltekit/components/icon-button";
  import ThemeController from "@/registry/sveltekit/components/theme-controller";
	import type { CSSProperties } from "react";
  
  type NavButton = {
    key: string | number,
    label: string,
    variant: string
  }
  type ColorNavButton = { color: string } & NavButton

  const contentStyle = {
    background: "#e0e0e0",
    border: "1px dashed #888",
    padding: "1rem",
    textAlign: "center",
    fontSize: "14px",
    color: "darkgreen",
  };
  
  const aspectRatios = ["auto", "1/1", "2.39/1", "2/1", "16/9", "3/2", "4/3", "5/4", "1/2.39", "1/2", "9/16", "4/5"];
  
  const sizes = ["3xs", "2xs", "xs", "sm", "lg", "xl", "2xl", "3xl", "4xl"];
  
  const radii = ["none", "zero", "3xs", "2xs", "xs", "sm", "lg", "xl", "2xl", "3xl", "4xl"];
  
  const tabLabels = ["Home", "Profile", "Settings"];
  const variants = ["fill", "outline", "text"] as const;
  const buttonSizes = ["sm", "md", "lg"] as const;
  
  // Converts json key-values to a CSS string
  const json2CSS = (cssObj: typeof contentStyle) => Object.entries(cssObj).map(([k, v]) => `${k}:${v}`).join(';')
  
  // const handleChange = (value: string) => {
  //   setSelectedValue(value);
  //   console.log(value);
  // };

  // const options = [
  //   { label: "Option 1", value: "option1" },
  //   { label: "Option 2", value: "option2" },
  //   { label: "Option 3", value: "option3" },
  // ];
  
</script>

<div class={styles.page}>

<!-- Snippets to pass as values for props -->
{#snippet navButton(key, label, variant)}
  <Button {key} {label} {variant} />
{/snippet}

{#snippet navIconButton(key, icon, variant, color)}
  <IconButton {key} {icon} {variant} {color} />
{/snippet}

{#snippet ctaButton(key, label, variant, color)}
  <Button {key} {label} {variant} {color} />
{/snippet}

<ThemeController/>
  <NavBar
    navButtons={[
      navButton("1", "Home", "text"),
      navButton("2", "About", "text"),
      navButton("3", "Careers", "text"),
    ]}
    iconButtons={[
      navIconButton("search", "search", "text", "surfacecontainer"),
      navIconButton("heart", "book", "text", "surfacecontainer")
    ]}
    ctaButtons={[
      ctaButton("secondary", "Secondary", "outline", "surface"),
      ctaButton("primary", "Primary", "fill", "surfacecontainer")
    ]}
  />
  <!--<Snackbar badgeColor="error" globalColor="surface" /> -->
  <div
    style:display="grid"
    style:gap="1rem"
    style:padding="2rem"
    style:background="#f0f0f0"
  >
    <!-- Default usage -->
    <!-- <Snackbar /> -->

    <!-- Custom message -->
    <!-- <Snackbar message="Your changes have been saved." fontClass="label" backgroundColor="error" /> -->

    <!-- Custom badge color -->
    <!-- <Snackbar badgeColor="error" message="There was a problem saving your changes." /> -->

    <!-- Custom primary and secondary button colors -->
    <!-- <Snackbar primaryButtonColor="success" secondaryButtonColor="error" message="Settings updated successfully." /> -->

    <!-- Global color overrides badge + both buttons -->
    <!-- <Snackbar globalColor="warning" message="This will overwrite existing data." /> -->

    <!-- Adding custom class or inline styles -->
    <!-- <Snackbar
      message="Styled with className and onClick!"
      className="custom-snackbar"
      onClick={() => alert("Snackbar clicked")}
      style={{ cursor: "pointer" }}
    /> -->
  </div>
  <Tabs tabLinks={tabLabels}>
    {#each tabLabels as label, index}
      <TabContent key={index}>
        <p>This is the content for {label}</p>
      </TabContent>
    {/each}
  </Tabs>

  <Grid columns={2} gap="md">
    <div style:background="red">Item 1</div>
    <div style:background="blue">Item 2</div>
  </Grid>

  <Grid columns={3} gap="sm" autoResponsive>
    <div style:background="green">Responsive 1</div>
    <div style:background="purple">Responsive 2</div>
    <div style:background="orange">Responsive 3</div>
  </Grid>
  <Text fontClass="display1" tag="footer" color="primary">
    Hello World
  </Text>
  <p class="title1">
    ancient times cats were not merely companions—they were revered as divine beings. Cultures like ancient Egypt
    honored cats as sacred creatures embodying grace&quot; mystery&quot; and spiritual power. The goddess Bastet
    depicted with the head of a lioness or domestic cat&quot; symbolized protection fertility&quot; and the
    nurturing aspects of home life. Even beyond Egypt the enigmatic nature of cats—their watchful eyes&quot; silent
    movements and uncanny independence—has inspired a timeless belief that they walk between worlds. To this day
    many still joke (or suspect) that cats arent just pets but deities in disguise&quot; quietly ruling their human
    households with regal indifference.
  </p>
  <div style:padding="2rem">
    <h2>Row with gap, justifyContent, alignItems</h2>
    <Row gap="lg" justifyContent="space-around" align-items="center">
      <div style:background="#ddd" style:padding="1rem">Item 1</div>
      <div style:background="#bbb" style:padding="1rem">Item 2</div>
      <div style:background="#999" style:padding="1rem">Item 3</div>
    </Row>

    <h2 style:marginTop="2rem">Row with wrapChildren</h2>
    <Row gap="lg" wrapChildren={true} style='max-width="300px";'>
      <div style:background="#ccc" style:width="200px" style:padding="1rem">A</div>
      <div style:background="#aaa" style:width="200px" style:padding="1rem">B</div>
      <div style:background="#888" style:width="200px" style:padding="1rem">C</div>
    </Row>

    <h2  style:marginTop="2rem">Row with defaultChildBehavior = auto-grow</h2>
    <Row gap="sm" defaultChildBehavior="auto-grow">
      <div style:background="#eef" style:padding="1rem">Grow 1</div>
      <div style:background="#ccf" style:padding="1rem">Grow 2</div>
      <div style:background="#aaf" style:padding="1rem">Grow 3</div>
    </Row>
  </div>
  <Badge icon="replace" color="surfacecontainerhigh" scale="lg" iconStrokeWidth={1} />
  <span class="absolute top-0">Hello</span>
  <Icon name="airplay" color="primary" fontClass="title2" />
  <div style:display="grid" style:gap="2rem" style:padding="2rem">
    <!--Basic Card -->
    <Card>
      <h2>Basic Card</h2>
      <p>This is a basic card with default styling.</p>
    </Card>

    <!--Filled Card with Title Scale -->
    <Card scaleFactor="caption" variant="fill" material="flat" opticalCorrection="y">
      <Text tag="h1" fontClass="display1">
        Filled Card
      </Text>

      <h2>Filled Card</h2>
      <p>This card uses the fill variant and title1 scale.</p>
    </Card>

    <div style:display="grid" style:gap="2rem" style:padding="2rem">
      <!--Basic Card -->
      <Card>
        <h2>Basic Card</h2>
        <p>This is a basic card with default styling.</p>
      </Card>

      <!--Filled Card with Title Scale -->
      <Card scaleFactor="title1" variant="fill" material="flat" opticalCorrection="left">
        <h2>Filled Card</h2>
        <p>This card uses the fill variant and title1 scale.</p>
      </Card>

      <!--Outline Glass Card with Clickable Style -->

      <Card
        scaleFactor="body"
        variant="outline"
        material="glass"
        isClickable
        onclick={() => alert("Card clicked!")}
      >
        <h2>Glass Card</h2>
        <p>This one has a glass blur effect and is clickable.</p>
      </Card>
    </div>

    <Grid columns={2} gap="md">
      <div style:background="red">Item 1</div>
      <div style:background="blue">Item 2</div>
    </Grid>

    <Grid columns={3} gap="sm" autoResponsive>
      <div style:background="green">Responsive 1</div>
      <div style:background="purple">Responsive 2</div>
      <div style:background="orange">Responsive 3</div>
    </Grid>

    <Grid columns={4} gap="lg" autoResponsive data-lk-grid-minmax="true">
      {#each Array.from({ length: 8 }) as _, i}
        <div data-key={i} style:background="#999">{`Item ${i + 1}`}</div>
      {/each}
    </Grid>

    <Text fontClass="display1" tag="footer" color="primary">
      Hello World
    </Text>

    <p class="title1">
      ancient times cats were not merely companions—they were revered as divine beings. Cultures like ancient Egypt
      honored cats as sacred creatures embodying grace&quot; mystery&quot; and spiritual power. The goddess Bastet
      depicted with the head of a lioness or domestic cat&quot; symbolized protection fertility&quot; and the
      nurturing aspects of home life. Even beyond Egypt the enigmatic nature of cats—their watchful eyes&quot;
      silent movements and uncanny independence—has inspired a timeless belief that they walk between worlds. To
      this day many still joke (or suspect) that cats arent just pets but deities in disguise&quot; quietly ruling
      their human households with regal indifference.
    </p>
    <div style:padding="2rem">
      <h2>Row with gap, justifyContent, alignItems</h2>
      <Row gap="lg" justifyContent="space-around" alignItems="center">
        <div style:background="#ddd" style:padding="1rem">Item 1</div>
        <div style:background="#bbb" style:padding="1rem">Item 2</div>
        <div style:background="#999" style:padding="1rem">Item 3</div>
      </Row>

      <h2 style:marginTop="2rem">Row with wrapChildren</h2>
      <Row gap="lg" wrapChildren="true" style='max-width: "300px";'>
        <div style:background="#ccc" style:width="200px" style:padding="1rem">A</div>
        <div style:background="#aaa" style:width="200px" style:padding="1rem">B</div>
        <div style:background="#888" style:width="200px" style:padding="1rem">C</div>
      </Row>

      <h2 style:marginTop="2rem">Row with defaultChildBehavior = auto-grow</h2>
      <Row gap="sm" defaultChildBehavior="auto-grow">
        <div style:background="#eef" style:padding="1rem">Grow 1</div>
        <div style:background="#ccf" style:padding="1rem">Grow 2</div>
        <div style:background="#aaf" style:padding="1rem">Grow 3</div>
      </Row>
    </div>
    <Badge icon="replace" color="surfacecontainerhigh" scale="lg" iconStrokeWidth={1} />
    <span class="absolute top-0">Hello</span>
    <Icon name="airplay" color="primary" fontClass="title2" />
    <div style:display="grid" style:gap="2rem" style:padding="2rem">
      <!--Padding prop variations -->
      <Section padding="none">
        <div style={json2CSS(contentStyle)}>padding=none</div>
      </Section>

      <Section padding="xs">
        <div style={json2CSS(contentStyle)}>padding=xs</div>
      </Section>

      <Section padding="sm">
        <div style={json2CSS(contentStyle)}>padding=sm</div>
      </Section>

      <Section padding="md">
        <div style={json2CSS(contentStyle)}>padding=md</div>
      </Section>

      <Section padding="lg">
        <div style={json2CSS(contentStyle)}>padding=lg</div>
      </Section>

      <Section padding="xl">
        <div style={json2CSS(contentStyle)}>padding=xl</div>
      </Section>

      <!--Individual directional paddings using data attributes -->
      <!--<Section {...{ "lk-section-px": "md" }}> -->
      <Section px="md">
        <div style={json2CSS(contentStyle)}>lk-section-px=md</div>
      </Section>

      <Section py="lg">
        <div style={json2CSS(contentStyle)}>lk-section-py=lg</div>
      </Section>

      <Section pt="xs">
        <div style={json2CSS(contentStyle)}>lk-section-pt=xs</div>
      </Section>

      <Section pr="sm">
        <div style={json2CSS(contentStyle)}>lk-section-pr=sm</div>
      </Section>

      <Section pb="xl">
        <div style={json2CSS(contentStyle)}>lk-section-pb=xl</div>
      </Section>

      <Section pl="lg">
        <div style={json2CSS(contentStyle)}>lk-section-pl=lg</div>
      </Section>

      <!--Combined directional paddings -->
      <Section pt="sm" pr="md" pb="lg" pl="xl">
        <div style={json2CSS(contentStyle)}>pt=sm + pr=md + pb=lg + pl=xl</div>
      </Section>
    </div>
    <div>
      <div style:display="grid" style:gap="2rem" style:padding="2rem">
        <!--Padding prop variations -->
        <Section padding="none">
          <div style={json2CSS(contentStyle)}>padding=none</div>
        </Section>

        <Section padding="xs">
          <div style={json2CSS(contentStyle)}>padding=xs</div>
        </Section>

        <Section padding="sm">
          <div style={json2CSS(contentStyle)}>padding=sm</div>
        </Section>

        <Section padding="md">
          <div style={json2CSS(contentStyle)}>padding=md</div>
        </Section>

        <Section padding="lg">
          <div style={json2CSS(contentStyle)}>padding=lg</div>
        </Section>

        <Section padding="xl">
          <div style={json2CSS(contentStyle)}>padding=xl</div>
        </Section>

        <!--Individual directional paddings using data attributes -->
        <!--<Section {...{ "lk-section-px": "md" }}> -->
        <Section px="md">
          <div style={json2CSS(contentStyle)}>lk-section-px=md</div>
        </Section>

        <Section py="lg">
          <div style={json2CSS(contentStyle)}>lk-section-py=lg</div>
        </Section>

        <Section pt="xs">
          <div style={json2CSS(contentStyle)}>lk-section-pt=xs</div>
        </Section>

        <Section pr="sm">
          <div style={json2CSS(contentStyle)}>lk-section-pr=sm</div>
        </Section>

        <Section pb="xl">
          <div style={json2CSS(contentStyle)}>lk-section-pb=xl</div>
        </Section>

        <Section pl="lg">
          <div style={json2CSS(contentStyle)}>lk-section-pl=lg</div>
        </Section>

        <!--Combined directional paddings -->
        <Section pt="sm" pr="md" pb="lg" pl="xl">
          <div style={json2CSS(contentStyle)}>pt=sm + pr=md + pb=lg + pl=xl</div>
        </Section>
        <h2 style:marginTop="2rem">Row with defaultChildBehavior = auto-grow</h2>
        <Row gap="sm" defaultChildBehavior="auto-grow">
          <div style:background="#eef" style:padding="1rem">Grow 1</div>
          <div style:background="#ccf" style:padding="1rem">Grow 2</div>
          <div style:background="#aaf" style:padding="1rem">Grow 3</div>
        </Row>
      </div>

      <div style:display="flex" style:flexWrap="wrap" style:gap="1rem">
        <Sticker content="Default" />
        <Sticker content="Primary" color="primary" />
        <Sticker content="Secondary" color="secondary" />
        <Sticker content="Tertiary" color="tertiary" />
        <Sticker content="Error" color="error" />
        <Sticker content="Warning" color="warning" />
        <Sticker content="Success" color="success" />
        <Sticker content="Info" color="info" />
        <Sticker content="Surface" color="surface" />
        <Sticker content="Inverse" color="inversesurface" />
        <Sticker content="Primary Container" color="primarycontainer" />
        <Sticker content="Surface Variant" color="surfacevariant" />
      </div>

      <Text fontClass="display1" tag="footer" color="primary">
        Hello World
      </Text>
    </div>
    <div style:display="flex" style:flexWrap="wrap" style:gap="1rem">
      <Sticker content="Default" />
      <Sticker content="Primary" color="primary" />
      <Sticker content="Secondary" color="secondary" />
      <Sticker content="Tertiary" color="tertiary" />
      <Sticker content="Error" color="error" />
      <Sticker content="Warning" color="warning" />
      <Sticker content="Success" color="success" />
      <Sticker content="Info" color="info" />
      <Sticker content="Surface" color="surface" />
      <Sticker content="Inverse" color="inversesurface" />
      <Sticker content="Primary Container" color="primarycontainer" />
      <Sticker content="Surface Variant" color="surfacevariant" />
    </div>

    {#each variants as variant}
      <div key={variant}>
        <h2>{variant} Variant</h2>
        <div>
          {#each buttonSizes as size}
            <div key={`${variant}-${size}`}>
              <h3>Size: {size}</h3>
              <div>
                <div>
                  <Button label="Left Icon" variant={variant} size={size} color="error" startIcon="airplay" />
                  <span>startIcon</span>
                </div>
                <div>
                  <Button label="Right Icon" variant={variant} size={size} color="primary" endIcon="airplay" />
                  <span>endIcon</span>
                </div>
                <div>
                  <Button
                    label="Both Icons"
                    variant={variant}
                    size={size}
                    color="primary"
                    startIcon="airplay"
                    endIcon="airplay"
                  />
                  <span>both</span>
                </div>
                <div>
                  <Button label="No Icon" variant={variant} size={size} color="primary" />
                  <span>none</span>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}

    <!--SIZE TESTING -->
    <div class="size-test-grid">
      {#each sizes as size}
        <figure key={size} class="size-test-item">
          <Image
            src="/testimage.png"
            alt={size}
            lk-image-width={size}
            lk-image-height={size}
            class="size-test-img"
          />
          <figcaption class="size-test-caption">{size}</figcaption>
        </figure>
      {/each}
    </div>

    <!--RADII TESTING -->
    <div class="radius-test-grid">
      {#each radii as radius}
        <figure data-key={radius} class="radius-test-item">
          <Image src="/testimage.png" alt={radius} lk-image-border-radius={radius} class="radius-test-img" />
          <figcaption class="radius-test-caption">{radius}</figcaption>
        </figure>
      {/each}
    </div>

    <!--OBJECT-FIT TESTING -->
    <div class="objectfit-test-grid">
      <figure>
        <Image src="/testimage.png" alt="cover" lk-image-object-fit="cover" />
        <figcaption>object-fit: cover</figcaption>
      </figure>
      <figure>
        <Image src="/testimage.png" alt="contain" lk-image-object-fit="contain" />
        <figcaption>object-fit: contain</figcaption>
      </figure>
      <figure>
        <Image src="/testimage.png" alt="fill" lk-image-object-fit="fill" />
        <figcaption>object-fit: fill</figcaption>
      </figure>
      <figure>
        <Image src="/testimage.png" alt="none" lk-image-object-fit="none" />
        <figcaption>object-fit: none</figcaption>
      </figure>
      <figure>
        <Image src="/testimage.png" alt="scale-down" lk-image-object-fit="scale-down" />
        <figcaption>object-fit: scale-down</figcaption>
      </figure>
    </div>

    <!--ASPECT RATIO TESTING -->
    <div class="aspect-test-grid">
      {#each aspectRatios as ration }(ratio) => (
        <figure key={ratio} style={{ border: "1px solid #ccc" }}>
          <Image
            src="/testimage.png"
            alt={ratio}
            lk-image-aspect={ratio}
            style={{ width: "100%", objectFit: "cover" }}
          />
          <figcaption class="text-center mt-2">{ratio}</figcaption>
        </figure>
      ))
      {/each}
    </div>
    <Text fontClass="display1" tag="footer" color="primary">
      Hello World
    </Text>
    <p class="title1">
      ancient times, cats were not merely companions—they were revered as divine beings. Cultures like ancient Egypt
      honored cats as sacred creatures, embodying grace, mystery, and spiritual power. The goddess Bastet, depicted
      with the head of a lioness or domestic cat, symbolized protection, fertility, and the nurturing aspects of
      home life. Even beyond Egypt, the enigmatic nature of cats—their watchful eyes, silent movements, and uncanny
      independence—has inspired a timeless belief that they walk between worlds. To this day, many still joke (or
      suspect) that cats aren’t just pets, but deities in disguise, quietly ruling their human households with regal
      indifference.
    </p>
  </div>
</div>
