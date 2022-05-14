import * as tokens from "@daimler/productkit-core/exports/web/styles/mbti/js/variables.js"

const breakpoints = {
  values: {
    xs: tokens.layoutApplicationCompactXsScreenMinWidth,
    sm: tokens.layoutApplicationCompactSScreenMinWidth,
    s: tokens.layoutApplicationCompactSScreenMinWidth,
    md: tokens.layoutApplicationCompactMScreenMinWidth,
    m: tokens.layoutApplicationCompactMScreenMinWidth,
    lg: tokens.layoutApplicationCompactLScreenMinWidth,
    l: tokens.layoutApplicationCompactLScreenMinWidth,
    xl: tokens.layoutApplicationCompactXlScreenMinWidth,
    xxl: tokens.layoutApplicationCompactXxlScreenMinWidth
  },
  up: function (value) {
    return '@media (min-width: ' + this.values[value] + ')'
  }
}

export { breakpoints }