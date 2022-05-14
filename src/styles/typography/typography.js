import * as tokens from "@daimler/productkit-core/exports/web/styles/mbti/js/variables.js"
import { breakpoints } from '../breakpoints/breakpoints'

const typography = {
  fontWeightRegular: tokens.fontWeightRegular,
  fontWeightBold: tokens.fontWeightBold,
  h1: {
    fontSize: tokens.fontApplicationSHeadline1FontSize,
    lineHeight: tokens.fontApplicationSHeadline1LineHeight,
    letterSpacing: tokens.fontApplicationSHeadline1LetterSpacing,
    textTransform: tokens.fontApplicationSHeadline1TextTransform,
    [breakpoints.up('l')]: {
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
    [breakpoints.up('l')]: {
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
    [breakpoints.up('l')]: {
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
    [breakpoints.up('l')]: {
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
    [breakpoints.up('l')]: {
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
    [breakpoints.up('l')]: {
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
    [breakpoints.up('l')]: {
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
    [breakpoints.up('l')]: {
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
    [breakpoints.up('l')]: {
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
    [breakpoints.up('l')]: {
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
    [breakpoints.up('l')]: {
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
    [breakpoints.up('l')]: {
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
    [breakpoints.up('l')]: {
      fontSize: tokens.fontApplicationLOverlineFontSize,
      lineHeight: tokens.fontApplicationLOverlineLineHeight,
      letterSpacing: tokens.fontApplicationLOverlineLetterSpacing,
      textTransform: tokens.fontApplicationLOverlineTextTransform,
      fontWeight: tokens.fontApplicationLOverlineFontWeight,
      color: tokens.fontApplicationLOverlineColor,
    }
  },
}

export { typography }