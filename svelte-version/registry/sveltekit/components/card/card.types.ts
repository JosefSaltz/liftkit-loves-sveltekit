import type { HTMLAttributes } from "svelte/elements";
import type { Snippet } from "svelte";

export interface LkCardProps extends HTMLAttributes<HTMLDivElement> {
  scaleFactor?: LkFontClass | "none";
  variant?: "fill" | "outline" | "transparent";
  material?: "flat" | "glass"; //TODO: Integrate these material controls with the new MaterialLayer component features
  materialProps?: LkMatProps;
  opticalCorrection?: "top" | "left" | "right" | "bottom" | "x" | "y" | "all" | "none";
  isClickable?: boolean;
  bgColor?: LkColorWithOnToken | "transparent"; //optional. does not need to have an "on" token because handled via bg global utility class, which assigns text color
  className?: string; //optional. explicitly listing here because we need to control how it mixes in with other styles controlled by classes
  children?: Snippet;
  isScrollable?: boolean; //optional. if true, will add overflow-y: scroll to the card
}