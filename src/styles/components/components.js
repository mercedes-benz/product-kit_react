// @ts-nocheck
import * as tokens from "@daimler/productkit-core/exports/web/styles/mbti/js/variables.js"
import { breakpoints } from "../breakpoints/breakpoints"

const components = {
  MuiGrid: {
    styleOverrides: {
      item: {
        paddingLeft: tokens.layoutApplicationCompactXsGutterSize.replace(/\d+/g, a => a / 2),
        paddingRight: tokens.layoutApplicationCompactXsGutterSize.replace(/\d+/g, a => a / 2),
        [breakpoints.up('sm')]: {
          paddingLeft: tokens.layoutApplicationCompactSGutterSize.replace(/\d+/g, a => a / 2),
          paddingRight: tokens.layoutApplicationCompactSGutterSize.replace(/\d+/g, a => a / 2),
        },
        [breakpoints.up('md')]: {
          paddingLeft: tokens.layoutApplicationCompactMGutterSize.replace(/\d+/g, a => a / 2),
          paddingRight: tokens.layoutApplicationCompactMGutterSize.replace(/\d+/g, a => a / 2),
        },
        [breakpoints.up('lg')]: {
          paddingLeft: tokens.layoutApplicationCompactLGutterSize.replace(/\d+/g, a => a / 2),
          paddingRight: tokens.layoutApplicationCompactLGutterSize.replace(/\d+/g, a => a / 2),
        },
        [breakpoints.up('xl')]: {
          paddingLeft: tokens.layoutApplicationCompactXlGutterSize.replace(/\d+/g, a => a / 2),
          paddingRight: tokens.layoutApplicationCompactXlGutterSize.replace(/\d+/g, a => a / 2),
        },
        [breakpoints.up('xxl')]: {
          paddingLeft: tokens.layoutApplicationCompactXxlGutterSize.replace(/\d+/g, a => a / 2),
          paddingRight: tokens.layoutApplicationCompactXxlGutterSize.replace(/\d+/g, a => a / 2),
        },
      }
    }
  }
}

export { components }