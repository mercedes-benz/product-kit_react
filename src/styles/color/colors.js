import * as tokens from "@daimler/productkit-core/exports/web/styles/mbti/js/variables.js"
import * as tokensDark from "@daimler/productkit-core/exports/web/styles/mbti/js/variables-dark.js"

import { hexToRgba } from '../../utils/js/color'

let brandColors = {}
const colorNames = ["Neutral", "Goldentainoi", "Deepblue", "Deluge", "Xanadu", "Lividbrown", "Red", "Green", "Yellow"]
const shades = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]

colorNames.forEach(color => {
  let brandColor = {}
  let contrastBrandColor = {}
  shades.forEach(shade => {
    var varName = "colorBrand" + color + shade
    var contrastVarName = "colorBrand" + color + "Contrast" + shade
    brandColor[shade] = tokens[varName]
    contrastBrandColor[shade] = tokens[contrastVarName]
  })
  brandColor["contrast"] = contrastBrandColor
  brandColors[color] = brandColor
})

const colors = {
  grey: {
    50: tokens.colorBrandNeutral50,
    100: tokens.colorBrandNeutral100,
    200: tokens.colorBrandNeutral200,
    300: tokens.colorBrandNeutral300,
    400: tokens.colorBrandNeutral400,
    500: tokens.colorBrandNeutral500,
    600: tokens.colorBrandNeutral600,
    700: tokens.colorBrandNeutral700,
    800: tokens.colorBrandNeutral800,
    900: tokens.colorBrandNeutral900,
    contrast: {
      50: tokens.colorBrandNeutralContrast50,
      100: tokens.colorBrandNeutralContrast100,
      200: tokens.colorBrandNeutralContrast200,
      300: tokens.colorBrandNeutralContrast300,
      400: tokens.colorBrandNeutralContrast400,
      500: tokens.colorBrandNeutralContrast500,
      600: tokens.colorBrandNeutralContrast600,
      700: tokens.colorBrandNeutralContrast700,
      800: tokens.colorBrandNeutralContrast800,
      900: tokens.colorBrandNeutralContrast900,
    }
  },
  ...brandColors
}

const paletteLight = {
  mode: "light",
  primary: {
    main: tokens.colorApplicationPrimary,
    contrastText: hexToRgba(tokens.colorApplicationContrastPrimary, tokens.opacityApplicationTextContrastHigh)
  },
  secondary: {
    main: tokens.colorApplicationSecondary,
    contrastText: hexToRgba(tokens.colorApplicationContrastSecondary, tokens.opacityApplicationTextContrastHigh)
  },
  tertiary: {
    main: tokens.colorApplicationTertiary,
    contrastText: hexToRgba(tokens.colorApplicationContrastTertiary, tokens.opacityApplicationTextContrastHigh)
  },
  quaternary: {
    main: tokens.colorApplicationQuaternary,
    contrastText: hexToRgba(tokens.colorApplicationContrastQuaternary, tokens.opacityApplicationTextContrastHigh)
  },
  background: {
    default: tokens.colorApplicationBackground,
    paper: tokens.colorApplicationSurface
  },
  surface: {
    main: tokens.colorApplicationSurface,
    contrastText: tokens.colorApplicationContrastSurface
  },
  outline: {
    main: tokens.colorApplicationOutline,
    contrastText: tokens.colorApplicationContrastOutline
  },
  error: {
    main: tokens.colorApplicationError,
    contrastText: hexToRgba(tokens.colorApplicationContrastError, tokens.opacityApplicationTextContrastHigh)
  },
  success: {
    main: tokens.colorApplicationSuccess,
    contrastText: hexToRgba(tokens.colorApplicationContrastSuccess, tokens.opacityApplicationTextContrastHigh)
  },
  text: {
    primary: hexToRgba(tokens.colorApplicationContrastBackground, tokens.opacityApplicationTextHigh),
    secondary: hexToRgba(tokens.colorApplicationContrastBackground, tokens.opacityApplicationTextMedium),
    disabled: hexToRgba(tokens.colorApplicationContrastBackground, tokens.opacityApplicationTextLow),
    icon: hexToRgba(tokensDark.colorApplicationContrastBackground, tokensDark.opacityApplicationIconContrastHigh)
  },
  action: {
    disabledOpacity: tokens.opacityApplicationTextLow
  },
  ...colors
}

const paletteDark = {
  mode: "dark",
  primary: {
    main: tokensDark.colorApplicationPrimary,
    contrastText: hexToRgba(tokensDark.colorApplicationContrastPrimary, tokensDark.opacityApplicationTextContrastHigh)
  },
  secondary: {
    main: tokensDark.colorApplicationSecondary,
    contrastText: hexToRgba(tokensDark.colorApplicationContrastSecondary, tokensDark.opacityApplicationTextContrastHigh)
  },
  tertiary: {
    main: tokensDark.colorApplicationTertiary,
    contrastText: hexToRgba(tokensDark.colorApplicationContrastTertiary, tokensDark.opacityApplicationTextContrastHigh)
  },
  quaternary: {
    main: tokensDark.colorApplicationQuaternary,
    contrastText: hexToRgba(tokensDark.colorApplicationContrastQuaternary, tokensDark.opacityApplicationTextContrastHigh)
  },
  background: {
    default: tokensDark.colorApplicationBackground,
    paper: tokensDark.colorApplicationSurface
  },
  surface: {
    main: tokensDark.colorApplicationSurface,
    contrastText: tokensDark.colorApplicationContrastSurface
  },
  outline: {
    main: tokensDark.colorApplicationOutline,
    contrastText: tokensDark.colorApplicationContrastOutline
  },
  error: {
    main: tokensDark.colorApplicationError,
    contrastText: hexToRgba(tokensDark.colorApplicationContrastError, tokensDark.opacityApplicationTextContrastHigh)
  },
  success: {
    main: tokensDark.colorApplicationSuccess,
    contrastText: hexToRgba(tokensDark.colorApplicationContrastSuccess, tokensDark.opacityApplicationTextContrastHigh)
  },
  text: {
    primary: hexToRgba(tokensDark.colorApplicationContrastBackground, tokensDark.opacityApplicationTextContrastHigh),
    secondary: hexToRgba(tokensDark.colorApplicationContrastBackground, tokensDark.opacityApplicationTextContrastMedium),
    disabled: hexToRgba(tokensDark.colorApplicationContrastBackground, tokensDark.opacityApplicationTextContrastLow),
    icon: hexToRgba(tokensDark.colorApplicationContrastBackground, tokensDark.opacityApplicationIconContrastHigh)
  },
  action: {
    disabledOpacity: tokensDark.opacityApplicationTextContrastLow
  },
  ...colors
}

export { paletteLight, paletteDark }