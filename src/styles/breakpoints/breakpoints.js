import * as tokens from "@daimler/productkit-core/dist/web/styles/mbti/js/variables"

const breakpoints = {
  values: {
    xs: tokens.layoutApplicationCompactXsScreenMinWidth,
    s: tokens.layoutApplicationCompactSScreenMinWidth,
    m: tokens.layoutApplicationCompactMScreenMinWidth,
    l: tokens.layoutApplicationCompactLScreenMinWidth,
    xl: tokens.layoutApplicationCompactXlScreenMinWidth,
    xxl: tokens.layoutApplicationCompactXxlScreenMinWidth
  },
  up: function (value) {
    return '@media (min-width: ' + this.values[value] + ')'
  },
  unit: ''
}

export { breakpoints }