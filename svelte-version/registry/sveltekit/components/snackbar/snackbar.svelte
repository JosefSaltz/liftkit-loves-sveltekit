<script lang="ts">
  import { useMemo } from "react";
  import { propsToDataAttrs } from "@/registry/sveltekit/lib/utilities";
  import Badge from "@/registry/sveltekit/components/badge";
  import Button from "@/registry/sveltekit/components/button";
  import IconButton from "@/registry/sveltekit/components/icon-button";
  import React from "react";
  import Text from "@/registry/sveltekit/components/text";
  import "@/registry/sveltekit/components/snackbar/snackbar.css";
  import { LkBadgeProps } from "@/registry/sveltekit/components/badge";
  import { LkTextProps } from "@/registry/sveltekit/components/text";
  import { LkButtonProps } from "@/registry/sveltekit/components/button";
  import { LkIconButtonProps } from "@/registry/sveltekit/components/icon-button";
  import { getOnToken } from "@/registry/universal/lib/colorUtils";
  import Card from "@/registry/sveltekit/components/card";
  import Row from "@/registry/sveltekit/components/row";
  import { LkCardProps } from "@/registry/sveltekit/components/card";
  import Icon, { LkIconProps } from "@/registry/sveltekit/components/icon";

  interface LkSnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
    globalColor?: LkColorWithOnToken;
    message?: string;
    children?: React.ReactNode;
    cardProps?: LkCardProps;
  }

  /**
   * A snackbar component that displays temporary notifications with optional action buttons.
   */
  let { globalColor, message = "Notification text goes here.", cardProps, children, ...restProps }: LkSnackbarProps = $props();

  // Declare allowed types, so if a child with the wrong type is passed, it'll throw an error
  const allowedTypes = [Badge, Button, Icon, IconButton, Text] as React.ComponentType<any>[];
  // TODO: Substitute a snippet check or something here
  // Validate all children first
  const childArray = React.Children.toArray(children);

  // Helper function to get component name for error messages
  const getComponentName = (type: any): string => {
    if (typeof type === "string") return type;
    return type?.displayName || type?.name || "Unknown";
  };
  // TODO: Substitute a snippet check or something here
  // Validate all children upfront
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && !allowedTypes.includes(child.type as React.ComponentType)) {
      throw new Error(
        `Snackbar component received an invalid child component: ${getComponentName(child.type)}. ` +
          `Only Badge, Button, and IconButton components are allowed.`
      );
    }
  });

  // Find components and validate at the same time
  let badge: Snippet | undefined;
  let buttons: Snippet[] = [];
  let icon: Snippet | undefined;
  let iconButtons: Snippet[] = [];

  let text: Snippet[] = [];
  // TODO: Substitute a snippet check or something here
  childArray.forEach((child) => {
    if (!React.isValidElement(child)) return;

    if (child.type === Badge) {
      badge = child;
    } else if (child.type === Button) {
      buttons.push(child);
    } else if (child.type === IconButton) {
      iconButtons.push(child);
    } else if (child.type === Icon) {
      icon = child;
    } else if (child.type === Text) {
      text.push(child);
    }
  });

  const dataAttrs = $derived(
    propsToDataAttrs(
      {
        globalColor,
        message,
      },
      "snackbar"
    )
  );

  /** If you have an icon, but no button, render extra margin-right on the body text. */
  function getMargin() {
    if (icon && buttons.length === 0) {
      return "mr-sm";
    } else {
      return "";
    }
  }


  /** Functions for handling component scaling */

  const fontClassList: LkFontClass[] = [
    "display1",
    "display2",
    "title1",
    "title2",
    "title3",
    "heading",
    "body",
    "callout",
    "subheading",
    "label",
    "caption",
    "capline",
  ];

  function getAdjustedFontClass(componentName: string, parentFontClass: LkFontClass) {
    switch (componentName) {
    }
  }

  function getBadgeColor(globalColor: LkColorWithOnToken) {}
</script>

<div data-lk-component="snackbar" {...dataAttrs} {...restProps}>
  <Card
    scaleFactor={icon ? "subheading" : "body"}
    bgColor={globalColor}
    opticalCorrection={icon ? "none" : "y"}
    className={`shadow-sm ${(cardProps && cardProps.className) || ""}`}
  >
    <Row alignItems="center">
      <!-- Badge slot -->
      {#if icon}
        <div data-lk-slot="snackbar-icon">
          {#if globalColor}
            <!-- TODO: Use a Svelte method here -->
             React.cloneElement(icon, { color: getOnToken(globalColor), strokeWidth: 1.75 } as LkIconProps)
          {:else}
            icon
          {/if}
        </div>
      {/if}

      <!-- Message slot -->
      {#if text.length > 0}
        <div data-lk-slot="snackbar-text">
          {#each text as (text, index)}
            {#if globalColor}
              React.cloneElement(text, {
                  key: index,
                  color: getOnToken(globalColor as LkColor) as LkColor,
                  fontClass: "body",
                  className: getMargin(),
                } as LkTextProps)
                <!-- TODO: Use a better svelte method here -->
            {:else} 
              React.cloneElement(text, { key: index })
            {/if}
          {/each}
        </div>
      {/if}
      <!-- Action buttons slot -->
      <Row>
        {#if buttons.length > 0}
          <div data-lk-slot="snackbar-actions">
            {#each buttons as (button, index)}
              {#if globalColor}
                <!-- TODO: Use a Svelte method here -->
                React.cloneElement(button, {
                    key: index,
                    color: globalColor,
                    size: "sm",
                    modifiers: `color-on${globalColor}`,
                    style: {
                      backgroundColor: `rgb(from var(--lk-${getOnToken(globalColor)}) r g b / 0.1)`,
                      border: `1px solid rgb(from var(--lk-${getOnToken(globalColor)}) r g b / 0.2)`,
                      marginRight: !icon && "calc(-1em * pow(var(--lk-wholestep-dec), 2))",
                    },
                    stateLayerOverride: { bgColor: `on${globalColor}` },
                  } as Partial<LkButtonProps>)
                <!-- TODO: Use a Svelte method here -->
              {:else} 
                React.cloneElement(button, {
                  key: index,
                  size: "sm",
                  variant: "outline",
                } as Partial<LkButtonProps>)
              {/if}
            {/each}
          </div>
        {/if}
        <!-- Icon buttons slot (typically for close/dismiss) -->
        {#if iconButtons.length > 0}
          <div data-lk-slot="snackbar-icon-actions">
            {#each iconButtons as (iconButton, index)}
              {#if globalColor}
                <!-- TODO: Use a Svelte method here -->
                React.cloneElement(iconButton, {
                    key: index,
                    color: globalColor,
                    fontClass: "heading",
                  } as Partial<LkIconButtonProps>)
                <!-- TODO: Use a Svelte method here -->
                {:else} 
                  React.cloneElement(iconButton, {
                    key: index,
                    fontClass: "heading",
                  } as Partial<LkIconButtonProps>)
                {/if}
            {/each}
          </div>
        {/if}
      </Row>
    </Row>
  </Card>
</div>



