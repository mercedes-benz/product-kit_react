import * as tokens from "@daimler/productkit-core/exports/web/styles/mbti/js/variables.js"
import { breakpoints } from '../breakpoints/breakpoints'

const typography = {
  fontWeightRegular: tokens.fontWeightRegular,
  fontWeightBold: tokens.fontWeightBold,
  h1: {
    fontFamily: tokens.fontApplicationSHeadline1FontFamily,
    fontSize: tokens.fontApplicationSHeadline1FontSize,
    fontWeight: tokens.fontApplicationSHeadline1FontWeight,
    lineHeight: tokens.fontApplicationSHeadline1LineHeight,
    letterSpacing: tokens.fontApplicationSHeadline1LetterSpacing,
    textTransform: tokens.fontApplicationSHeadline1TextTransform,
    [breakpoints.up('l')]: {
      fontFamily: tokens.fontApplicationLHeadline1FontFamily,
      fontSize: tokens.fontApplicationLHeadline1FontSize,
      fontWeight: tokens.fontApplicationLHeadline1FontWeight,
      lineHeight: tokens.fontApplicationLHeadline1LineHeight,
      letterSpacing: tokens.fontApplicationLHeadline1LetterSpacing,
      textTransform: tokens.fontApplicationLHeadline1TextTransform,
    }
  },
  h2: {
    fontFamily: tokens.fontApplicationSHeadline2FontFamily,
    fontSize: tokens.fontApplicationSHeadline2FontSize,
    fontWeight: tokens.fontApplicationSHeadline2FontWeight,
    lineHeight: tokens.fontApplicationSHeadline2LineHeight,
    letterSpacing: tokens.fontApplicationSHeadline2LetterSpacing,
    textTransform: tokens.fontApplicationSHeadline2TextTransform,
    [breakpoints.up('l')]: {
      fontFamily: tokens.fontApplicationLHeadline2FontFamily,
      fontSize: tokens.fontApplicationLHeadline2FontSize,
      fontWeight: tokens.fontApplicationLHeadline2FontWeight,
      lineHeight: tokens.fontApplicationLHeadline2LineHeight,
      letterSpacing: tokens.fontApplicationLHeadline2LetterSpacing,
      textTransform: tokens.fontApplicationLHeadline2TextTransform,
    }
  },
  h3: {
    fontFamily: tokens.fontApplicationSHeadline3FontFamily,
    fontSize: tokens.fontApplicationSHeadline3FontSize,
    fontWeight: tokens.fontApplicationSHeadline3FontWeight,
    lineHeight: tokens.fontApplicationSHeadline3LineHeight,
    letterSpacing: tokens.fontApplicationSHeadline3LetterSpacing,
    textTransform: tokens.fontApplicationSHeadline3TextTransform,
    [breakpoints.up('l')]: {
      fontFamily: tokens.fontApplicationLHeadline3FontFamily,
      fontSize: tokens.fontApplicationLHeadline3FontSize,
      fontWeight: tokens.fontApplicationLHeadline3FontWeight,
      lineHeight: tokens.fontApplicationLHeadline3LineHeight,
      letterSpacing: tokens.fontApplicationLHeadline3LetterSpacing,
      textTransform: tokens.fontApplicationLHeadline3TextTransform,
    }
  },
  h4: {
    fontFamily: tokens.fontApplicationSHeadline4FontFamily,
    fontSize: tokens.fontApplicationSHeadline4FontSize,
    fontWeight: tokens.fontApplicationSHeadline4FontWeight,
    lineHeight: tokens.fontApplicationSHeadline4LineHeight,
    letterSpacing: tokens.fontApplicationSHeadline4LetterSpacing,
    textTransform: tokens.fontApplicationSHeadline4TextTransform,
    [breakpoints.up('l')]: {
      fontFamily: tokens.fontApplicationLHeadline4FontFamily,
      fontSize: tokens.fontApplicationLHeadline4FontSize,
      fontWeight: tokens.fontApplicationLHeadline4FontWeight,
      lineHeight: tokens.fontApplicationLHeadline4LineHeight,
      letterSpacing: tokens.fontApplicationLHeadline4LetterSpacing,
      textTransform: tokens.fontApplicationLHeadline4TextTransform,
    }
  },
  h5: {
    fontFamily: tokens.fontApplicationSHeadline5FontFamily,
    fontSize: tokens.fontApplicationSHeadline5FontSize,
    fontWeight: tokens.fontApplicationSHeadline5FontWeight,
    lineHeight: tokens.fontApplicationSHeadline5LineHeight,
    letterSpacing: tokens.fontApplicationSHeadline5LetterSpacing,
    textTransform: tokens.fontApplicationSHeadline5TextTransform,
    [breakpoints.up('l')]: {
      fontFamily: tokens.fontApplicationLHeadline5FontFamily,
      fontSize: tokens.fontApplicationLHeadline5FontSize,
      fontWeight: tokens.fontApplicationLHeadline5FontWeight,
      lineHeight: tokens.fontApplicationLHeadline5LineHeight,
      letterSpacing: tokens.fontApplicationLHeadline5LetterSpacing,
      textTransform: tokens.fontApplicationLHeadline5TextTransform,
    }
  },
  h6: {
    fontFamily: tokens.fontApplicationSHeadline6FontFamily,
    fontSize: tokens.fontApplicationSHeadline6FontSize,
    fontWeight: tokens.fontApplicationSHeadline6FontWeight,
    lineHeight: tokens.fontApplicationSHeadline6LineHeight,
    letterSpacing: tokens.fontApplicationSHeadline6LetterSpacing,
    textTransform: tokens.fontApplicationSHeadline6TextTransform,
    [breakpoints.up('l')]: {
      fontFamily: tokens.fontApplicationLHeadline6FontFamily,
      fontSize: tokens.fontApplicationLHeadline6FontSize,
      fontWeight: tokens.fontApplicationLHeadline6FontWeight,
      lineHeight: tokens.fontApplicationLHeadline6LineHeight,
      letterSpacing: tokens.fontApplicationLHeadline6LetterSpacing,
      textTransform: tokens.fontApplicationLHeadline6TextTransform,
    }
  },
  subtitle1: {
    fontFamily: tokens.fontApplicationSSubtitle1FontFamily,
    fontSize: tokens.fontApplicationSSubtitle1FontSize,
    fontWeight: tokens.fontApplicationSSubtitle1FontWeight,
    lineHeight: tokens.fontApplicationSSubtitle1LineHeight,
    letterSpacing: tokens.fontApplicationSSubtitle1LetterSpacing,
    textTransform: tokens.fontApplicationSSubtitle1TextTransform,
    [breakpoints.up('l')]: {
      fontFamily: tokens.fontApplicationLSubtitle1FontFamily,
      fontSize: tokens.fontApplicationLSubtitle1FontSize,
      fontWeight: tokens.fontApplicationLSubtitle1FontWeight,
      lineHeight: tokens.fontApplicationLSubtitle1LineHeight,
      letterSpacing: tokens.fontApplicationLSubtitle1LetterSpacing,
      textTransform: tokens.fontApplicationLSubtitle1TextTransform,
    }
  },
  subtitle2: {
    fontFamily: tokens.fontApplicationSSubtitle2FontFamily,
    fontSize: tokens.fontApplicationSSubtitle2FontSize,
    fontWeight: tokens.fontApplicationSSubtitle2FontWeight,
    lineHeight: tokens.fontApplicationSSubtitle2LineHeight,
    letterSpacing: tokens.fontApplicationSSubtitle2LetterSpacing,
    textTransform: tokens.fontApplicationSSubtitle2TextTransform,
    [breakpoints.up('l')]: {
      fontFamily: tokens.fontApplicationLSubtitle2FontFamily,
      fontSize: tokens.fontApplicationLSubtitle2FontSize,
      fontWeight: tokens.fontApplicationLSubtitle2FontWeight,
      lineHeight: tokens.fontApplicationLSubtitle2LineHeight,
      letterSpacing: tokens.fontApplicationLSubtitle2LetterSpacing,
      textTransform: tokens.fontApplicationLSubtitle2TextTransform,
    }
  },
  body1: {
    fontFamily: tokens.fontApplicationSBody1FontFamily,
    fontSize: tokens.fontApplicationSBody1FontSize,
    fontWeight: tokens.fontApplicationSBody1FontWeight,
    lineHeight: tokens.fontApplicationSBody1LineHeight,
    letterSpacing: tokens.fontApplicationSBody1LetterSpacing,
    textTransform: tokens.fontApplicationSBody1TextTransform,
    [breakpoints.up('l')]: {
      fontFamily: tokens.fontApplicationLBody1FontFamily,
      fontSize: tokens.fontApplicationLBody1FontSize,
      fontWeight: tokens.fontApplicationLBody1FontWeight,
      lineHeight: tokens.fontApplicationLBody1LineHeight,
      letterSpacing: tokens.fontApplicationLBody1LetterSpacing,
      textTransform: tokens.fontApplicationLBody1TextTransform,
    }
  },
  body2: {
    fontFamily: tokens.fontApplicationSBody2FontFamily,
    fontSize: tokens.fontApplicationSBody2FontSize,
    fontWeight: tokens.fontApplicationSBody2FontWeight,
    lineHeight: tokens.fontApplicationSBody2LineHeight,
    letterSpacing: tokens.fontApplicationSBody2LetterSpacing,
    textTransform: tokens.fontApplicationSBody2TextTransform,
    [breakpoints.up('l')]: {
      fontFamily: tokens.fontApplicationLBody2FontFamily,
      fontSize: tokens.fontApplicationLBody2FontSize,
      fontWeight: tokens.fontApplicationLBody2FontWeight,
      lineHeight: tokens.fontApplicationLBody2LineHeight,
      letterSpacing: tokens.fontApplicationLBody2LetterSpacing,
      textTransform: tokens.fontApplicationLBody2TextTransform,
    }
  },
  button: {
    fontFamily: tokens.fontApplicationSButtonFontFamily,
    fontSize: tokens.fontApplicationSButtonFontSize,
    fontWeight: tokens.fontApplicationSButtonFontWeight,
    lineHeight: tokens.fontApplicationSButtonLineHeight,
    letterSpacing: tokens.fontApplicationSButtonLetterSpacing,
    textTransform: tokens.fontApplicationSButtonTextTransform,
    [breakpoints.up('l')]: {
      fontFamily: tokens.fontApplicationLButtonFontFamily,
      fontSize: tokens.fontApplicationLButtonFontSize,
      fontWeight: tokens.fontApplicationLButtonFontWeight,
      lineHeight: tokens.fontApplicationLButtonLineHeight,
      letterSpacing: tokens.fontApplicationLButtonLetterSpacing,
      textTransform: tokens.fontApplicationLButtonTextTransform,
    }
  },
  caption: {
    fontFamily: tokens.fontApplicationSCaptionFontFamily,
    fontSize: tokens.fontApplicationSCaptionFontSize,
    fontWeight: tokens.fontApplicationSCaptionFontWeight,
    lineHeight: tokens.fontApplicationSCaptionLineHeight,
    letterSpacing: tokens.fontApplicationSCaptionLetterSpacing,
    textTransform: tokens.fontApplicationSCaptionTextTransform,
    [breakpoints.up('l')]: {
      fontFamily: tokens.fontApplicationLCaptionFontFamily,
      fontSize: tokens.fontApplicationLCaptionFontSize,
      fontWeight: tokens.fontApplicationLCaptionFontWeight,
      lineHeight: tokens.fontApplicationLCaptionLineHeight,
      letterSpacing: tokens.fontApplicationLCaptionLetterSpacing,
      textTransform: tokens.fontApplicationLCaptionTextTransform,
    }
  },
  overline: {
    fontFamily: tokens.fontApplicationSOverlineFontFamily,
    fontSize: tokens.fontApplicationSOverlineFontSize,
    fontWeight: tokens.fontApplicationSOverlineFontWeight,
    lineHeight: tokens.fontApplicationSOverlineLineHeight,
    letterSpacing: tokens.fontApplicationSOverlineLetterSpacing,
    textTransform: tokens.fontApplicationSOverlineTextTransform,
    color: tokens.fontApplicationSOverlineColor,
    [breakpoints.up('l')]: {
      fontFamily: tokens.fontApplicationLOverlineFontFamily,
      fontSize: tokens.fontApplicationLOverlineFontSize,
      fontWeight: tokens.fontApplicationLOverlineFontWeight,
      lineHeight: tokens.fontApplicationLOverlineLineHeight,
      letterSpacing: tokens.fontApplicationLOverlineLetterSpacing,
      textTransform: tokens.fontApplicationLOverlineTextTransform,
      color: tokens.fontApplicationLOverlineColor,
    }
  },
}

export { typography }