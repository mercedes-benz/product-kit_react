// @ts-nocheck
import * as tokens from "@daimler/productkit-core/exports/web/styles/mbti/js/variables.js"
import * as tokensDark from "@daimler/productkit-core/exports/web/styles/mbti/js/variables-dark.js"

const componentsLight = {
  MuiButton: {
    styleOverrides: {
      textPrimary: {
        color: tokens.componentButtonTextPrimaryDefaultTextColor
      },
      outlinedPrimary: {
        color: tokens.componentButtonOutlinedPrimaryDefaultTextColor
      }
    }
  },
}

const componentsDark = {
  MuiButton: {
    styleOverrides: {
      textPrimary: {
        color: tokensDark.componentButtonTextPrimaryDefaultTextColor
      },
      outlinedPrimary: {
        color: tokensDark.componentButtonOutlinedPrimaryDefaultTextColor
      }
    }
  },
}

export { componentsLight, componentsDark }