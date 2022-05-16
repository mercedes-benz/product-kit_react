import * as tokens from '@daimler/productkit-core/dist/web/styles/mbti/js/variables'

const spacingXs = {
  '3xs': tokens.sizeApplicationSpacingXs3xs,
  xxs: tokens.sizeApplicationSpacingXsXxs,
  xs: tokens.sizeApplicationSpacingXsXs,
  s: tokens.sizeApplicationSpacingXsS,
  m: tokens.sizeApplicationSpacingXsM,
  l: tokens.sizeApplicationSpacingXsL,
  xl: tokens.sizeApplicationSpacingXsXl,
  xxl: tokens.sizeApplicationSpacingXsXxl,
  '3xl': tokens.sizeApplicationSpacingXs3xl,
}
const spacingsS = {
  '3xs': tokens.sizeApplicationSpacingS3xs,
  xxs: tokens.sizeApplicationSpacingSXxs,
  xs: tokens.sizeApplicationSpacingSXs,
  s: tokens.sizeApplicationSpacingSS,
  m: tokens.sizeApplicationSpacingSM,
  l: tokens.sizeApplicationSpacingSL,
  xl: tokens.sizeApplicationSpacingSXl,
  xxl: tokens.sizeApplicationSpacingSXxl,
  '3xl': tokens.sizeApplicationSpacingS3xl,
}
const spacingsM = {
  '3xs': tokens.sizeApplicationSpacingM3xs,
  xxs: tokens.sizeApplicationSpacingMXxs,
  xs: tokens.sizeApplicationSpacingMXs,
  s: tokens.sizeApplicationSpacingMS,
  m: tokens.sizeApplicationSpacingMM,
  l: tokens.sizeApplicationSpacingML,
  xl: tokens.sizeApplicationSpacingMXl,
  xxl: tokens.sizeApplicationSpacingMXxl,
  '3xl': tokens.sizeApplicationSpacingM3xl,
}
const spacingsL = {
  '3xs': tokens.sizeApplicationSpacingL3xs,
  xxs: tokens.sizeApplicationSpacingLXxs,
  xs: tokens.sizeApplicationSpacingLXs,
  s: tokens.sizeApplicationSpacingLS,
  m: tokens.sizeApplicationSpacingLM,
  l: tokens.sizeApplicationSpacingLL,
  xl: tokens.sizeApplicationSpacingLXl,
  xxl: tokens.sizeApplicationSpacingLXxl,
  '3xl': tokens.sizeApplicationSpacingL3xl,
}
const spacingsXl = {
  '3xs': tokens.sizeApplicationSpacingXl3xs,
  xxs: tokens.sizeApplicationSpacingXlXxs,
  xs: tokens.sizeApplicationSpacingXlXs,
  s: tokens.sizeApplicationSpacingXlS,
  m: tokens.sizeApplicationSpacingXlM,
  l: tokens.sizeApplicationSpacingXlL,
  xl: tokens.sizeApplicationSpacingXlXl,
  xxl: tokens.sizeApplicationSpacingXlXxl,
  '3xl': tokens.sizeApplicationSpacingXl3xl,
}

const spacingsXxl = {
  '3xs': tokens.sizeApplicationSpacingXxl3xs,
  xxs: tokens.sizeApplicationSpacingXxlXxs,
  xs: tokens.sizeApplicationSpacingXxlXs,
  s: tokens.sizeApplicationSpacingXxlS,
  m: tokens.sizeApplicationSpacingXxlM,
  l: tokens.sizeApplicationSpacingXxlL,
  xl: tokens.sizeApplicationSpacingXxlXl,
  xxl: tokens.sizeApplicationSpacingXxlXxl,
  '3xl': tokens.sizeApplicationSpacingXxl3xl,
}

const spacingSizes = {
  xs: spacingXs,
  s: spacingsS,
  m: spacingsM,
  l: spacingsL,
  xl: spacingsXl,
  xxl: spacingsXxl,
}

const brandSpacings = {
  0: 0,
  0.5: tokens.sizeSpaceHalfx,
  1: tokens.sizeSpace1x,
  2: tokens.sizeSpace2x,
  3: tokens.sizeSpace3x,
  4: tokens.sizeSpace4x,
  6: tokens.sizeSpace6x,
  8: tokens.sizeSpace8x,
  9: tokens.sizeSpace9x,
  10: tokens.sizeSpace10x,
  11: tokens.sizeSpace11x,
  12: tokens.sizeSpace12x,
  16: tokens.sizeSpace16x,
  24: tokens.sizeSpace24x,
}

const spacing = function (value) {
  if (typeof value === 'string' && value.includes('px')) return value
  else if (brandSpacings[value]) return brandSpacings[value]
  return 0
}

export { spacing, spacingSizes }
