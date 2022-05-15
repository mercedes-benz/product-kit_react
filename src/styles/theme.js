// SPDX-License-Identifier: MIT 
import * as tokens from "@daimler/productkit-core/exports/web/styles/mbti/js/variables.js"
import { paletteLight, paletteDark } from "./color/colors"
import { spacing } from "./spacing/spacings"
import { typography } from "./typography/typography"
import { breakpoints } from './breakpoints/breakpoints'
import { componentsLight, componentsDark } from './components/components'

const shape = {
    borderRadius: tokens.sizeShapeRadius
}

const componentsWide = {
    MuiCssBaseline: {
        styleOverrides: {
            main: {
                margin: "0 auto",
                maxWidth: tokens.layoutApplicationWideXsBodyMaxSize,
                [breakpoints.up('sm')]: {
                    maxWidth: tokens.layoutApplicationWideSBodyMaxSize
                },
                [breakpoints.up('md')]: {
                    maxWidth: tokens.layoutApplicationWideMBodyMaxSize
                },
                [breakpoints.up('lg')]: {
                    maxWidth: tokens.layoutApplicationWideLBodyMaxSize
                },
                [breakpoints.up('xl')]: {
                    maxWidth: tokens.layoutApplicationWideXlBodyMaxSize
                },
                [breakpoints.up('xxl')]: {
                    maxWidth: tokens.layoutApplicationWideXxlBodyMaxSize
                },
            }
        },
    },
}

const componentsCompact = {
    MuiCssBaseline: {
        styleOverrides: {
            main: {
                maxWidth: tokens.layoutApplicationCompactXsBodyMaxSize,
                margin: "0 auto",
                [breakpoints.up('sm')]: {
                    maxWidth: tokens.layoutApplicationCompactSBodyMaxSize,
                },
                [breakpoints.up('md')]: {
                    maxWidth: tokens.layoutApplicationCompactMBodyMaxSize,
                },
                [breakpoints.up('lg')]: {
                    maxWidth: tokens.layoutApplicationCompactLBodyMaxSize,
                },
                [breakpoints.up('xl')]: {
                    maxWidth: tokens.layoutApplicationCompactXlBodyMaxSize,
                },
                [breakpoints.up('xxl')]: {
                    maxWidth: tokens.layoutApplicationCompactXxlBodyMaxSize,
                },
            }
        },
    }
}

const themeCompactLight = {
    breakpoints: breakpoints,
    palette: { ...paletteLight },
    spacing: spacing,
    shape: shape,
    typography: typography,
    components: { ...componentsLight, ...componentsCompact }
}
const themeCompactDark = {
    breakpoints: breakpoints,
    palette: { ...paletteDark },
    spacing: spacing,
    shape: shape,
    typography: typography,
    components: { ...componentsDark, ...componentsCompact }
}
const themeWideLight = {
    breakpoints: breakpoints,
    palette: { ...paletteLight },
    spacing: spacing,
    shape: shape,
    typography: typography,
    components: { ...componentsLight, ...componentsWide }
}
const themeWideDark = {
    breakpoints: breakpoints,
    palette: { ...paletteDark },
    spacing: spacing,
    shape: shape,
    typography: typography,
    components: { ...componentsDark, ...componentsWide }
}

export { themeCompactLight, themeCompactDark, themeWideLight, themeWideDark }