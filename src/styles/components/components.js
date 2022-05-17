// @ts-nocheck
import * as tokensLight from '@daimler/productkit-core/dist/web/styles/mbti/js/variables'
import * as tokensDark from '@daimler/productkit-core/dist/web/styles/mbti/js/variables-dark'
import { hexToRgba } from '../../utils/js/color'
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
  }
}

const componentsLight = createComponentStyles(tokensLight)
const componentsDark = createComponentStyles(tokensDark)

export { componentsLight, componentsDark }
