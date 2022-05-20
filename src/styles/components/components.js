// @ts-nocheck
import * as tokensLight from '@daimler/productkit-core/dist/web/styles/mbti/js/variables'
import * as tokensDark from '@daimler/productkit-core/dist/web/styles/mbti/js/variables-dark'
import { breakpoints } from '../breakpoints/breakpoints'

const createComponentStyles = (tokens) => {
  return {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
        variant: 'compact',
      },
      variants: [
        {
          props: { variant: 'compact' },
          style: {
            width: tokens.layoutApplicationCompactXsContentWidth,
            maxWidth: tokens.layoutApplicationCompactXsContentMaxWidth,
            [breakpoints.up('s')]: {
              width: tokens.layoutApplicationCompactSContentWidth,
              maxWidth: tokens.layoutApplicationCompactSContentMaxWidth,
            },
            [breakpoints.up('md')]: {
              width: tokens.layoutApplicationCompactMContentWidth,
              maxWidth: tokens.layoutApplicationCompactMContentMaxWidth,
            },
            [breakpoints.up('l')]: {
              width: tokens.layoutApplicationCompactLContentWidth,
              maxWidth: tokens.layoutApplicationCompactLContentMaxWidth,
            },
            [breakpoints.up('xl')]: {
              width: tokens.layoutApplicationCompactXlContentWidth,
              maxWidth: tokens.layoutApplicationCompactXlContentMaxWidth,
            },
            [breakpoints.up('xxl')]: {
              width: tokens.layoutApplicationCompactXxlContentWidth,
              maxWidth: tokens.layoutApplicationCompactXxlContentMaxWidth,
            },
          },
        },
        {
          props: { variant: 'wide' },
          style: {
            width: tokens.layoutApplicationWideXsContentWidth,
            maxWidth: tokens.layoutApplicationWideXsContentMaxWidth,
            [breakpoints.up('s')]: {
              width: tokens.layoutApplicationWideSContentWidth,
              maxWidth: tokens.layoutApplicationWideSContentMaxWidth,
            },
            [breakpoints.up('md')]: {
              width: tokens.layoutApplicationWideMContentWidth,
              maxWidth: tokens.layoutApplicationWideMContentMaxWidth,
            },
            [breakpoints.up('l')]: {
              width: tokens.layoutApplicationWideLContentWidth,
              maxWidth: tokens.layoutApplicationWideLContentMaxWidth,
            },
            [breakpoints.up('xl')]: {
              width: tokens.layoutApplicationWideXlContentWidth,
              maxWidth: tokens.layoutApplicationWideXlContentMaxWidth,
            },
            [breakpoints.up('xxl')]: {
              width: tokens.layoutApplicationWideXxlContentWidth,
              maxWidth: tokens.layoutApplicationWideXxlContentMaxWidth,
            },
          },
        },
      ],
    },
    MuiGrid: {
      defaultProps: {
        columns: {
          xs: tokens.layoutApplicationCompactXsColumnAmount,
          s: tokens.layoutApplicationCompactSColumnAmount,
          md: tokens.layoutApplicationCompactMColumnAmount,
          l: tokens.layoutApplicationCompactLColumnAmount,
          xl: tokens.layoutApplicationCompactXlColumnAmount,
          xxl: tokens.layoutApplicationCompactXxlColumnAmount,
        },
        columnSpacing: {
          xs: tokens.layoutApplicationCompactXsGutterSize,
          s: tokens.layoutApplicationCompactSGutterSize,
          md: tokens.layoutApplicationCompactMGutterSize,
          l: tokens.layoutApplicationCompactLGutterSize,
          xl: tokens.layoutApplicationCompactXlGutterSize,
          xxl: tokens.layoutApplicationCompactXxlGutterSize,
        },
      },
    },
    MuiStack: {
      defaultProps: {
        direction: 'row',
      },
    },
    MuiButton: {
      styleOverrides: {
        textPrimary: {
          color: tokens.componentButtonTextPrimaryDefaultTextColor,
        },
        outlinedPrimary: {
          color: tokens.componentButtonOutlinedPrimaryDefaultTextColor,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        overline: {
          color: tokens.componentTypographyOverlineColor,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        colorPrimary: {
          color: tokens.componentCheckboxPrimaryCheckedColor,
          '&.Mui-checked': {
            color: tokens.componentCheckboxPrimaryCheckedColor,
          },
          '&.MuiCheckbox-indeterminate': {
            color: tokens.componentCheckboxPrimaryCheckedColor,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: tokens.fontApplicationSBody2FontFamily,
          fontWeight: tokens.fontApplicationSBody2FontWeight,
          fontSize: tokens.fontApplicationSBody2FontSize,
          letterSpacing: tokens.fontApplicationSBody2LetterSpacing,
          textTransform: tokens.fontApplicationSBody2TextTransform,
          lineHeight: tokens.fontApplicationSBody2LineHeight,
        },
        outlinedPrimary: {
          color: tokens.componentChipOutlinedPrimaryTextColor,
        },
        deleteIconOutlinedColorPrimary: {
          color: tokens.componentChipOutlinedPrimaryDeleteIconDefaultColor,
          '&:hover': {
            color: tokens.componentChipOutlinedPrimaryDeleteIconHoverColor,
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: {
          color: tokens.componentProgressCircularIndeterminatePrimaryColor,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
          '& .MuiLinearProgress-bar1Determinate': {
            backgroundColor:
              tokens.componentProgressLinearDeterminatePrimaryBar1Color,
          },
          '& .MuiLinearProgress-bar1Indeterminate': {
            backgroundColor:
              tokens.componentProgressLinearIndeterminatePrimaryBar1Color,
          },
          '& .MuiLinearProgress-bar2Indeterminate': {
            backgroundColor:
              tokens.componentProgressLinearIndeterminatePrimaryBar2Color,
          },
          '& .MuiLinearProgress-bar1Buffer': {
            backgroundColor:
              tokens.componentProgressLinearBufferPrimaryBar1Color,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorPrimary: {
          color: tokens.componentButtonIconPrimaryDefaultIconColor,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'primary' && {
            color: tokens.componentLinkPrimaryDefaultColor,
          }),
        }),
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        outlinedPrimary: {
          '&.Mui-selected': {
            color: tokens.componentPaginationOutlinedPrimaryItemSelectedColor,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        colorPrimary: {
          '&.Mui-checked': {
            color: tokens.componentRadioPrimarySelectedColor,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: '5px', // fix custom font size misalignment
          '&.Mui-focused': {
            color: tokens.componentSelectFilledPrimaryFocusedLabelColor,
          },
          '&.MuiInputLabel-shrink': {
            top: '3px', // fix custom font size misalignment
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        input: {
          lineHeight: '26px', // Fix custom font misalignment of input text
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '&::after': {
            borderColor: tokens.componentSelectFilledPrimaryFocusedBorderColor,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor:
              tokens.componentSelectOutlinedPrimaryFocusedBorderColor,
          },
        },
        input: {
          lineHeight: '26px', // Fix custom font misalignment of input text
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor:
              tokens.componentMenuItemPrimarySelectedBackgroundColor,
          },
          '&.Mui-selected:hover': {
            backgroundColor:
              tokens.componentMenuItemPrimarySelectedHoverBackgroundColor,
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        colorPrimary: {
          '&.Mui-checked': {
            color: tokens.componentSwitchPrimarySelectedColor,
          },
        },
        switchBase: ({ ownerState }) => ({
          ...(ownerState.color === 'primary' && {
            '&.Mui-checked': {
              '& + .MuiSwitch-track': {
                backgroundColor:
                  tokens.componentSwitchPrimarySelectedBackground,
              },
              '&.Mui-disabled .MuiSwitch-thumb': {
                color: tokens.componentSwitchPrimarySelectedDisabledColor,
              },
            },
          }),
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        textColorPrimary: {
          '&.Mui-selected': {
            color: tokens.componentTabsItemPrimarySelectedTextColor,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: tokens.componentTabsIndicatorColor,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'primary' && {
            '&.Mui-selected': {
              color: tokens.componentToggleButtonPrimarySelectedTextColor,
              backgroundColor:
                tokens.componentToggleButtonPrimarySelectedBackgroundColor,
            },
            '&.Mui-selected:hover': {
              backgroundColor:
                tokens.componentToggleButtonPrimarySelectedHoverBackgroundColor,
            },
          }),
        }),
      },
    },
  }
}

const componentsLight = createComponentStyles(tokensLight)
const componentsDark = createComponentStyles(tokensDark)

export { componentsLight, componentsDark }
