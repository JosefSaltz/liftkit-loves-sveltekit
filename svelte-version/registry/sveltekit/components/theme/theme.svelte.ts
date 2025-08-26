import { setContext, onMount, getContext } from "svelte";
import materialDynamicColors from "material-dynamic-colors";
import { hexFromArgb, argbFromHex, TonalPalette, Hct, customColor } from "@material/material-color-utilities";
import { toSentenceCase } from "@/registry/universal/lib/utils/stringUtils";
import { setThemeContext } from "./theme.context.svelte";
// Define types for theme colors
interface ThemeColors {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
  scrim: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  surfaceDim: string;
  surfaceBright: string;
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
  warning: string;
  onWarning: string;
  warningContainer: string;
  onWarningContainer: string;
  success: string;
  onSuccess: string;
  successContainer: string;
  onSuccessContainer: string;
  info: string;
  onInfo: string;
  infoContainer: string;
  onInfoContainer: string;
  [key: string]: string; // Add index signature for string keys
}

interface ThemeState {
  light: ThemeColors;
  dark: ThemeColors;
}

interface PaletteState {
  primary: string;
  secondary: string;
  tertiary: string;
  neutral: string;
  neutralvariant: string;
  error: string;
  warning: string;
  success: string;
  info: string;
  [key: string]: string; // Add index signature for string keys
}

// Svelte does not like class declarations in nested scope so moved up to top
class TonalSwatches {
  [_: string]: string;   // now any string key is allowed
  constructor(hue: number, chroma: number) {

    const swatch = TonalPalette.fromHueAndChroma(hue, chroma);

    for (let i = 1; i <= 99; i++) {
      this[`_${i}`] = hexFromArgb(swatch.tone(i));
    }
  }
}

const theme = $state<ThemeState>({
  light: {
    primary: "#004ee7",
    onPrimary: "#ffffff",
    primaryContainer: "#dce1ff",
    onPrimaryContainer: "#001550",
    secondary: "#595d72",
    onSecondary: "#ffffff",
    secondaryContainer: "#dee1f9",
    onSecondaryContainer: "#161b2c",
    tertiary: "#75546f",
    onTertiary: "#ffffff",
    tertiaryContainer: "#ffd7f5",
    onTertiaryContainer: "#2c122a",
    error: "#ba1a1a",
    onError: "#ffffff",
    errorContainer: "#ffdad6",
    onErrorContainer: "#410002",
    background: "#fefbff",
    onBackground: "#1b1b1f",
    surface: "#fbf8fd",
    onSurface: "#1b1b1f",
    surfaceVariant: "#e2e1ec",
    onSurfaceVariant: "#45464f",
    outline: "#767680",
    outlineVariant: "#c6c5d0",
    shadow: "#000000",
    scrim: "#000000",
    inverseSurface: "#303034",
    inverseOnSurface: "#f2f0f4",
    inversePrimary: "#b6c4ff",
    surfaceDim: "#dbd9de",
    surfaceBright: "#fbf8fd",
    surfaceContainerLowest: "#ffffff",
    surfaceContainerLow: "#f5f3f7",
    surfaceContainer: "#efedf1",
    surfaceContainerHigh: "#eae7ec",
    surfaceContainerHighest: "#e4e1e6",
    warning: "#e3aa00",
    onWarning: "#281b00",
    warningContainer: "#ffdfa0",
    onWarningContainer: "#261a00",
    success: "#41ca82",
    onSuccess: "#002311",
    successContainer: "#77fbae",
    onSuccessContainer: "#002110",
    info: "#9bb0ff",
    onInfo: "#001754",
    infoContainer: "#dce1ff",
    onInfoContainer: "#001550",
  },
  dark: {
    primary: "#004ee7",
    onPrimary: "#ffffff",
    primaryContainer: "#dce1ff",
    onPrimaryContainer: "#001550",
    secondary: "#595d72",
    onSecondary: "#ffffff",
    secondaryContainer: "#dee1f9",
    onSecondaryContainer: "#161b2c",
    tertiary: "#75546f",
    onTertiary: "#ffffff",
    tertiaryContainer: "#ffd7f5",
    onTertiaryContainer: "#2c122a",
    error: "#ba1a1a",
    onError: "#ffffff",
    errorContainer: "#ffdad6",
    onErrorContainer: "#410002",
    background: "#fefbff",
    onBackground: "#1b1b1f",
    surface: "#fbf8fd",
    onSurface: "#1b1b1f",
    surfaceVariant: "#e2e1ec",
    onSurfaceVariant: "#45464f",
    outline: "#767680",
    outlineVariant: "#c6c5d0",
    shadow: "#000000",
    scrim: "#000000",
    inverseSurface: "#303034",
    inverseOnSurface: "#f2f0f4",
    inversePrimary: "#b6c4ff",
    surfaceDim: "#dbd9de",
    surfaceBright: "#fbf8fd",
    surfaceContainerLowest: "#ffffff",
    surfaceContainerLow: "#f5f3f7",
    surfaceContainer: "#efedf1",
    surfaceContainerHigh: "#eae7ec",
    surfaceContainerHighest: "#e4e1e6",
    warning: "#e3aa00",
    onWarning: "#281b00",
    warningContainer: "#ffdfa0",
    onWarningContainer: "#261a00",
    success: "#41ca82",
    onSuccess: "#002311",
    successContainer: "#77fbae",
    onSuccessContainer: "#002110",
    info: "#9bb0ff",
    onInfo: "#001754",
    infoContainer: "#dce1ff",
    onInfoContainer: "#001550",
  },
});

let colorMode = $state<"light" | "dark">("light");
const setColorMode = (state: "light" | "dark") => { colorMode = state };
const getColorMode = () => colorMode;

let palette = $state<PaletteState>({
  "primary": "#035eff",
  "secondary": "#badcff",
  "tertiary": "#00ddfe",
  "neutral": "#000000",
  "neutralvariant": "#3f4f5b",
  "error": "#dd305c",
  "warning": "#feb600",
  "success": "#0cfecd",
  "info": "#175bfc"
});
const setPalette = (state: PaletteState) => { palette = { ...palette, ...state } };
const getPalette = () => palette;

let navIsOpen = $state(false);
const setNavIsOpen = (state: boolean) => { navIsOpen = state };
const getNavIsOpen = () => navIsOpen;
// update the root css variables with the theme values
$effect(() => {
  const root = document.documentElement;
  // console.log(root);
  Object.keys(theme.light).forEach((key) => {
    root.style.setProperty(`--light__${key.toLowerCase()}_lkv`, theme.light[key]);
  });

  Object.keys(theme.dark).forEach((key) => {
    root.style.setProperty(`--dark__${key.toLowerCase()}_lkv`, theme.dark[key]);
  });

  if (colorMode === "dark") {
    Object.keys(theme.dark).forEach((key) => {
      root.style.setProperty(`--light__${key.toLowerCase()}_lkv`, theme.dark[key]);
    });
  }
});

//Initial theme generation on mount
onMount(() => {
  updateTheme(palette);
  /**TODO: Debundle scroll behavior overrides from the central theme context */
  /**This is such a confusing place to put it. */

  const disableScrollOnNumberInputs = (event: WheelEvent) => {
    const activeElement = document.activeElement as HTMLInputElement;
    if (activeElement?.type === "number") {
      event.preventDefault();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const activeElement = document.activeElement as HTMLInputElement;
    if (["ArrowUp", "ArrowDown"].includes(event.key) && activeElement?.type === "number") {
      event.preventDefault();
    }
  };

  document.addEventListener("wheel", disableScrollOnNumberInputs, {
    passive: false,
  });
  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("wheel", disableScrollOnNumberInputs);
    document.removeEventListener("keydown", handleKeyDown);
  };
});

const updateTheme = async (palette: PaletteState) => {
  Object.keys(palette).forEach((key) => {
    var argb = argbFromHex(palette[key]);
    var hct = Hct.fromInt(argb);

    var tones = new TonalSwatches(hct.hue, hct.chroma);

    // map the tones from each color group to a swatch name
    switch (key) {
      case "neutral":
        theme.light = {
          ...theme.light,
          background: tones._99,
          onBackground: tones._10,
          surfaceDim: tones._87,
          surface: tones._98,
          surfaceBright: tones._98,
          surfaceContainerLowest: "white",
          surfaceContainerLow: tones._96,
          surfaceContainer: tones._94,
          surfaceContainerHigh: tones._92,
          surfaceContainerHighest: tones._90,
          onSurface: tones._10,
          inverseSurface: tones._20,
          inverseOnSurface: tones._95,
        };
        theme.dark = {
          ...theme.dark,
          background: tones._10,
          onBackground: tones._85,
          surfaceContainerLowest: tones._4,
          surfaceDim: tones._6,
          surface: tones._6,
          surfaceContainerLow: tones._10,
          surfaceContainer: tones._12,
          surfaceContainerHigh: tones._17,
          surfaceContainerHighest: tones._22,
          surfaceBright: tones._24,
          onSurface: tones._90,
          inverseSurface: tones._98,
          inverseOnSurface: tones._10,
        };
        break;
      case "neutralvariant":
        theme.light = {
          ...theme.light,
          surfaceVariant: tones._80,
          onSurfaceVariant: tones._40,
          outline: tones._60,
          outlineVariant: tones._90,
        };
        theme.dark = {
          ...theme.dark,
          surfaceVariant: tones._20,
          onSurfaceVariant: tones._60,
          outline: tones._50,
          outlineVariant: tones._30,
        };
        break;
      case "primary":
        theme.light = {
          ...theme.light,
          [key]: tones._40,
          [`on${toSentenceCase(key)}`]: tones._98,
          [`${key}Container`]: tones._90,
          [`on${toSentenceCase(key)}Container`]: tones._10,
          [`${key}Fixed`]: tones._90,
          [`${key}FixedDim`]: tones._80,
          [`on${toSentenceCase(key)}Fixed`]: tones._10,
          [`on${toSentenceCase(key)}FixedVariant`]: tones._30,
          ["inversePrimary"]: tones._80,
        };
        theme.dark = {
          ...theme.dark,
          [key]: tones._80,
          [`on${toSentenceCase(key)}`]: tones._20,
          [`${key}Container`]: tones._30,
          [`on${toSentenceCase(key)}Container`]: tones._90,
          [`${key}Fixed`]: tones._90,
          [`${key}FixedDim`]: tones._80,
          [`on${toSentenceCase(key)}Fixed`]: tones._10,
          [`on${toSentenceCase(key)}FixedVariant`]: tones._30,
          ["inversePrimary"]: tones._80,
        };
        break;
      case "secondary":
      case "tertiary":
        theme.light = {
          ...theme.light,
          [key]: tones._40,
          [`on${toSentenceCase(key)}`]: tones._98,
          [`${key}Container`]: tones._90,
          [`on${toSentenceCase(key)}Container`]: tones._10,
          [`${key}Fixed`]: tones._90,
          [`${key}FixedDim`]: tones._80,
          [`on${toSentenceCase(key)}Fixed`]: tones._10,
          [`on${toSentenceCase(key)}FixedVariant`]: tones._30,
        };
        theme.dark = {
          ...theme.dark,
          [key]: tones._80,
          [`on${toSentenceCase(key)}`]: tones._20,
          [`${key}Container`]: tones._30,
          [`on${toSentenceCase(key)}Container`]: tones._90,
          [`${key}Fixed`]: tones._90,
          [`${key}FixedDim`]: tones._80,
          [`on${toSentenceCase(key)}Fixed`]: tones._10,
          [`on${toSentenceCase(key)}FixedVariant`]: tones._30,
        };

      default:
        theme.light = {
          ...theme.light,
          [key]: tones._40,
          [`on${toSentenceCase(key)}`]: tones._98,
          [`${key}Container`]: tones._90,
          [`on${toSentenceCase(key)}Container`]: tones._10,
        };
        theme.dark = {
          ...theme.dark,
          [key]: tones._80,
          [`on${toSentenceCase(key)}`]: tones._20,
          [`${key}Container`]: tones._30,
          [`on${toSentenceCase(key)}Container`]: tones._90,
        };
    }
  });
};

const updateThemeFromMaster = async (hexCode: string) => {
  var newPalette: Record<string, string> = {};
  // need to get the key colors to feed back to the ColorModule so it can update the palette
  try {
    const colors = await materialDynamicColors(hexCode);

    newPalette.primary = colors.light.primary;
    newPalette.secondary = colors.light.secondary;
    newPalette.tertiary = colors.light.tertiary;
    newPalette.neutral = colors.light.surfaceContainer;

    const customColors: Record<string, { color: string; name: string }> = {
      info: { color: "#175bfc", name: "info" },
      warning: { color: "#ffbf00", name: "warning" },
      success: { color: "#42cb83", name: "success" },
    };

    Object.keys(customColors).forEach((key) => {
      const sourceColor = argbFromHex(hexCode);
      const customColorObj = {
        value: argbFromHex(customColors[key].color),
        blend: true,
        name: customColors[key].name,
      };

      const result = customColor(sourceColor, customColorObj);

      const newHexVal = hexFromArgb(result.value);
      newPalette[key] = newHexVal;
    });

    Object.keys(newPalette).forEach((key) => {
      palette[key] = newPalette[key]
    });
  } catch (error) {
    console.error(error);
  }
}

export const globalTheme = $state({
  theme,
  updateTheme,
  updateThemeFromMaster,
  getPalette,
  setPalette,
  getNavIsOpen,
  setNavIsOpen,
  getColorMode,
  setColorMode,
});