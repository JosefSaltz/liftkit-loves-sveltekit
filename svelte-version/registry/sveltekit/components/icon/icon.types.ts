import type { IconName } from "lucide-react/dynamic";

export interface LkIconProps {
  name?: IconName;
  fontClass?: Exclude<LkFontClass, `${string}-bold` | `${string}-mono`>;
  color?: LkColor | "currentColor";
  display?: "block" | "inline-block" | "inline";
  strokeWidth?: number;
  opticShift?: boolean;
  'data-lk-icon-position'?: 'start' | 'end' //if true, pulls icon slightly upward
}