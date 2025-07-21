export interface LkIconProps {
  name?: IconName;
  fontClass?: Exclude<LkFontClass, `${string}-bold` | `${string}-mono`>;
  color?: LkColor | "currentColor";
  display?: "block" | "inline-block" | "inline";
  strokeWidth?: number;
  opticShift?: boolean; //if true, pulls icon slightly upward
}