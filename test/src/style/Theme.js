// @ts-nocheck
// SPDX-License-Identifier: MIT 

import { createTheme } from "@mui/material/styles"
import * as tokens from "@daimler/productkit-core/exports/web/styles/js/variables.js"
import * as tokensDark from "@daimler/productkit-core/exports/web/styles/js/variables-dark.js"

const breakpoints = {
    values: {
        xs: tokens.layoutApplicationCompactXsScreenMinWidth,
        sm: tokens.layoutApplicationCompactSScreenMinWidth,
        md: tokens.layoutApplicationCompactMScreenMinWidth,
        lg: tokens.layoutApplicationCompactLScreenMinWidth,
        xl: tokens.layoutApplicationCompactXlScreenMinWidth,
    },
    up: function (value) {
        return '@media (min-width: ' + this.values[value] + ')'
    }
}

const paletteLight = {
    mode: "light",
    // palette values for light mode
    primary: {
        //light: tokens.colorApplicationPrimary,
        main: tokens.colorApplicationPrimary,
        //dark: tokens.colorApplicationPrimary,
        contrastText: tokens.colorApplicationContrastPrimary
    },
    secondary: {
        main: tokens.colorApplicationSecondary,
        contrastText: tokens.colorApplicationContrastSecondary
    },
    tertiary: {
        main: tokens.colorApplicationTertiary,
        contrastText: tokens.colorApplicationContrastTertiary
    },
    quaternary: {
        main: tokens.colorApplicationQuaternary,
        contrastText: tokens.colorApplicationContrastQuaternary
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
        contrastText: tokens.colorApplicationContrastError
    },
}

const paletteDark = {
    mode: "dark",

    // palette values for dark mode
    primary: {
        //light: tokensDark.colorApplicationPrimary,
        main: tokensDark.colorApplicationPrimary,
        //dark: tokensDark.colorApplicationPrimary,
        contrastText: tokensDark.colorApplicationContrastPrimary
    },
    secondary: {
        main: tokensDark.colorApplicationSecondary,
        contrastText: tokensDark.colorApplicationContrastSecondary
    },
    tertiary: {
        main: tokensDark.colorApplicationTertiary,
        contrastText: tokensDark.colorApplicationContrastTertiary
    },
    quaternary: {
        main: tokensDark.colorApplicationQuaternary,
        contrastText: tokensDark.colorApplicationContrastQuaternary
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
        contrastText: tokensDark.colorApplicationContrastError
    },
}

const brandColors = {
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
        900: tokens.colorBrandNeutral900
    },
}

const shape = {
    borderRadius: tokens.sizeShapeRadius
}

const typography = {
    fontFamily: '"Source Sans Pro"',
    fontWeightLight: tokens.fontWeightLight,
    fontWeightRegular: tokens.fontWeightRegular,
    fontWeightBold: tokens.fontWeightBold,
    h1: {
        fontSize: tokens.fontApplicationSHeadline1FontSize,
        lineHeight: tokens.fontApplicationSHeadline1LineHeight,
        letterSpacing: tokens.fontApplicationSHeadline1LetterSpacing,
        textTransform: tokens.fontApplicationSHeadline1TextTransform,
        [breakpoints.up('md')]: {
            fontSize: tokens.fontApplicationLHeadline1FontSize,
            lineHeight: tokens.fontApplicationLHeadline1LineHeight,
            letterSpacing: tokens.fontApplicationLHeadline1LetterSpacing,
            textTransform: tokens.fontApplicationLHeadline1TextTransform,
        }
    },
    h2: {
        fontSize: tokens.fontApplicationSHeadline2FontSize,
        lineHeight: tokens.fontApplicationSHeadline2LineHeight,
        letterSpacing: tokens.fontApplicationSHeadline2LetterSpacing,
        textTransform: tokens.fontApplicationSHeadline2TextTransform,
        [breakpoints.up('md')]: {
            fontSize: tokens.fontApplicationLHeadline2FontSize,
            lineHeight: tokens.fontApplicationLHeadline2LineHeight,
            letterSpacing: tokens.fontApplicationLHeadline2LetterSpacing,
            textTransform: tokens.fontApplicationLHeadline2TextTransform,
        }
    },
    h3: {
        fontSize: tokens.fontApplicationSHeadline3FontSize,
        lineHeight: tokens.fontApplicationSHeadline3LineHeight,
        letterSpacing: tokens.fontApplicationSHeadline3LetterSpacing,
        textTransform: tokens.fontApplicationSHeadline3TextTransform,
        [breakpoints.up('md')]: {
            fontSize: tokens.fontApplicationLHeadline3FontSize,
            lineHeight: tokens.fontApplicationLHeadline3LineHeight,
            letterSpacing: tokens.fontApplicationLHeadline3LetterSpacing,
            textTransform: tokens.fontApplicationLHeadline3TextTransform,
        }
    },
    h4: {
        fontSize: tokens.fontApplicationSHeadline4FontSize,
        lineHeight: tokens.fontApplicationSHeadline4LineHeight,
        letterSpacing: tokens.fontApplicationSHeadline4LetterSpacing,
        textTransform: tokens.fontApplicationSHeadline4TextTransform,
        [breakpoints.up('md')]: {
            fontSize: tokens.fontApplicationLHeadline4FontSize,
            lineHeight: tokens.fontApplicationLHeadline4LineHeight,
            letterSpacing: tokens.fontApplicationLHeadline4LetterSpacing,
            textTransform: tokens.fontApplicationLHeadline4TextTransform,
        }
    },
    h5: {
        fontSize: tokens.fontApplicationSHeadline5FontSize,
        lineHeight: tokens.fontApplicationSHeadline5LineHeight,
        letterSpacing: tokens.fontApplicationSHeadline5LetterSpacing,
        textTransform: tokens.fontApplicationSHeadline5TextTransform,
        [breakpoints.up('md')]: {
            fontSize: tokens.fontApplicationLHeadline5FontSize,
            lineHeight: tokens.fontApplicationLHeadline5LineHeight,
            letterSpacing: tokens.fontApplicationLHeadline5LetterSpacing,
            textTransform: tokens.fontApplicationLHeadline5TextTransform,
        }
    },
    h6: {
        fontSize: tokens.fontApplicationSHeadline6FontSize,
        lineHeight: tokens.fontApplicationSHeadline6LineHeight,
        letterSpacing: tokens.fontApplicationSHeadline6LetterSpacing,
        textTransform: tokens.fontApplicationSHeadline6TextTransform,
        [breakpoints.up('md')]: {
            fontSize: tokens.fontApplicationLHeadline6FontSize,
            lineHeight: tokens.fontApplicationLHeadline6LineHeight,
            letterSpacing: tokens.fontApplicationLHeadline6LetterSpacing,
            textTransform: tokens.fontApplicationLHeadline6TextTransform,
        }
    },
    subtitle1: {
        fontSize: tokens.fontApplicationSSubtitle1FontSize,
        lineHeight: tokens.fontApplicationSSubtitle1LineHeight,
        letterSpacing: tokens.fontApplicationSSubtitle1LetterSpacing,
        textTransform: tokens.fontApplicationSSubtitle1TextTransform,
        [breakpoints.up('md')]: {
            fontSize: tokens.fontApplicationLSubtitle1FontSize,
            lineHeight: tokens.fontApplicationLSubtitle1LineHeight,
            letterSpacing: tokens.fontApplicationLSubtitle1LetterSpacing,
            textTransform: tokens.fontApplicationLSubtitle1TextTransform,
        }
    },
    subtitle2: {
        fontSize: tokens.fontApplicationSSubtitle2FontSize,
        lineHeight: tokens.fontApplicationSSubtitle2LineHeight,
        letterSpacing: tokens.fontApplicationSSubtitle2LetterSpacing,
        textTransform: tokens.fontApplicationSSubtitle2TextTransform,
        [breakpoints.up('md')]: {
            fontSize: tokens.fontApplicationLSubtitle2FontSize,
            lineHeight: tokens.fontApplicationLSubtitle2LineHeight,
            letterSpacing: tokens.fontApplicationLSubtitle2LetterSpacing,
            textTransform: tokens.fontApplicationLSubtitle2TextTransform,
        }
    },
    body1: {
        fontSize: tokens.fontApplicationSBody1FontSize,
        lineHeight: tokens.fontApplicationSBody1LineHeight,
        letterSpacing: tokens.fontApplicationSBody1LetterSpacing,
        textTransform: tokens.fontApplicationSBody1TextTransform,
        [breakpoints.up('md')]: {
            fontSize: tokens.fontApplicationLBody1FontSize,
            lineHeight: tokens.fontApplicationLBody1LineHeight,
            letterSpacing: tokens.fontApplicationLBody1LetterSpacing,
            textTransform: tokens.fontApplicationLBody1TextTransform,
        }
    },
    body2: {
        fontSize: tokens.fontApplicationSBody2FontSize,
        lineHeight: tokens.fontApplicationSBody2LineHeight,
        letterSpacing: tokens.fontApplicationSBody2LetterSpacing,
        textTransform: tokens.fontApplicationSBody2TextTransform,
        [breakpoints.up('md')]: {
            fontSize: tokens.fontApplicationLBody2FontSize,
            lineHeight: tokens.fontApplicationLBody2LineHeight,
            letterSpacing: tokens.fontApplicationLBody2LetterSpacing,
            textTransform: tokens.fontApplicationLBody2TextTransform,
        }
    },
    button: {
        fontSize: tokens.fontApplicationSButtonFontSize,
        lineHeight: tokens.fontApplicationSButtonLineHeight,
        letterSpacing: tokens.fontApplicationSButtonLetterSpacing,
        textTransform: tokens.fontApplicationSButtonTextTransform,
        [breakpoints.up('md')]: {
            fontSize: tokens.fontApplicationLButtonFontSize,
            lineHeight: tokens.fontApplicationLButtonLineHeight,
            letterSpacing: tokens.fontApplicationLButtonLetterSpacing,
            textTransform: tokens.fontApplicationLButtonTextTransform,
        }
    },
    caption: {
        fontSize: tokens.fontApplicationSCaptionFontSize,
        lineHeight: tokens.fontApplicationSCaptionLineHeight,
        letterSpacing: tokens.fontApplicationSCaptionLetterSpacing,
        textTransform: tokens.fontApplicationSCaptionTextTransform,
        [breakpoints.up('md')]: {
            fontSize: tokens.fontApplicationLCaptionFontSize,
            lineHeight: tokens.fontApplicationLCaptionLineHeight,
            letterSpacing: tokens.fontApplicationLCaptionLetterSpacing,
            textTransform: tokens.fontApplicationLCaptionTextTransform,
        }
    },
    overline: {
        fontSize: tokens.fontApplicationSOverlineFontSize,
        lineHeight: tokens.fontApplicationSOverlineLineHeight,
        letterSpacing: tokens.fontApplicationSOverlineLetterSpacing,
        textTransform: tokens.fontApplicationSOverlineTextTransform,
        fontWeight: tokens.fontApplicationSOverlineFontWeight,
        color: tokens.fontApplicationSOverlineColor,
        [breakpoints.up('md')]: {
            fontSize: tokens.fontApplicationLOverlineFontSize,
            lineHeight: tokens.fontApplicationLOverlineLineHeight,
            letterSpacing: tokens.fontApplicationLOverlineLetterSpacing,
            textTransform: tokens.fontApplicationLOverlineTextTransform,
            fontWeight: tokens.fontApplicationLOverlineFontWeight,
            color: tokens.fontApplicationLOverlineColor,
        }
    },
}

const spacing = function (value) {
    return `${8 * value}px`
}

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
            }
        }
    }
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
            }
        },
    },
}

const componentsCompact = {
    MuiCssBaseline: {
        styleOverrides: {
            main: {
                paddingLeft: tokens.layoutApplicationCompactXsMarginSize,
                paddingRight: tokens.layoutApplicationCompactXsMarginSize,
                margin: "0 auto",
                [breakpoints.up('sm')]: {
                    paddingLeft: tokens.layoutApplicationCompactSMarginSize,
                    paddingRight: tokens.layoutApplicationCompactSMarginSize,
                },
                [breakpoints.up('md')]: {
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    maxWidth: tokens.layoutApplicationCompactMBodyMaxSize,
                },
                [breakpoints.up('lg')]: {
                    paddingLeft: tokens.layoutApplicationCompactLMarginSize,
                    paddingRight: tokens.layoutApplicationCompactLMarginSize,
                    maxWidth: "100%",
                },
                [breakpoints.up('xl')]: {
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    maxWidth: tokens.layoutApplicationCompactXlBodyMaxSize,
                },
            }
        },
    }
}

let themeCompactLight = createTheme({
    breakpoints: breakpoints,
    palette: {...paletteLight, ...brandColors},
    spacing: spacing,
    shape: shape,
    typography: typography,
    components: {...components, ...componentsCompact}
})
let themeCompactDark = createTheme({
    breakpoints: breakpoints,
    palette: {...paletteDark, ...brandColors},
    spacing: spacing,
    shape: shape,
    typography: typography,
    components: {...components, ...componentsCompact}
})
let themeWideLight = createTheme({
    breakpoints: breakpoints,
    palette: {...paletteLight, ...brandColors},
    spacing: spacing,
    shape: shape,
    typography: typography,
    components: {...components, ...componentsWide}
})
let themeWideDark = createTheme({
    breakpoints: breakpoints,
    palette: {...paletteDark, ...brandColors},
    spacing: spacing,
    shape: shape,
    typography: typography,
    components: {...components, ...componentsWide}
})

/*themeCompact = createTheme(theme, {
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '.Mui-selected': {
                    fontWeight: 'bold',
                    color: secondaryColor
                }
            }
        },
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }
        },
        MuiButton: {
            containedPrimary: {
                backgroundColor: primaryButtonColor
            },
            outlined: {
                fontSize: '16px',
                letterSpacing: '1.25px',
                padding: '10px 16px',
                lineHeight: '16px'
            },
            outlinedPrimary: {
                color: primaryButtonColor,
                border: '1px solid ' + primaryButtonColor,
            },
            textPrimary: {
                fontSize: '16px',
                color: primaryButtonColor
            },
            root: {
                borderRadius: 0,
                minWidth: '141px'
            },
            text: {
                textTransform: 'none'
            }
        },
        MuiDialog: {
            paperWidthSm: {
                maxWidth: '818px'
            }
        },
        MuiDialogTitle: {
            root: {
                backgroundColor: primaryColor,
                color: "#FFFFFF"
            }
        },
        MuiDialogContentText: {
            root: {
                color: primaryColor
            }
        },
        MuiDialogActions: {
            root: {
                padding: '24px 36px 24px 36px'
            }
        },
        MuiFormControlLabel: {
            root: {
                alignItems: 'flex-start',
                marginTop: '9px'
            }
        },
        MuiToolbar: {
            root: {
                height: '100%'
            }
        },
        MuiTabs: {
            root: {
                height: '100%'
            },
            flexContainer: {
                height: '100%'
            },
            indicator: {
                height: '3px'
            }
        },
        MuiTab: {
            root: {
                textTransform: 'none',
                height: '100%',
                minWidth: '0px',
                letterSpacing: '0.5px'
            },
            textColorInherit: {
                opacity: 1
            }
        },
        MuiCard: {
            root: {
                backgroundColor: primaryColor,
                color: '#FFFFFF',
                height: '447px',
                borderRadius: '5px 100px 5px 100px'
            }
        },
        MuiAccordionDetails: {
            root: {
                backgroundColor: '#DDDDDD',
                color: primaryColor,
                opacity: 0.74
            }
        }
    }
})*/

export { themeCompactLight, themeCompactDark, themeWideLight, themeWideDark };