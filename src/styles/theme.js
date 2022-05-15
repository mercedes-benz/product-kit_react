// SPDX-License-Identifier: MIT
import * as tokens from '@daimler/productkit-core/dist/web/styles/mbti/js/variables'
import { paletteLight, paletteDark } from './color/colors'
import { spacing } from './spacing/spacings'
import { typography } from './typography/typography'
import { breakpoints } from './breakpoints/breakpoints'
import { componentsLight, componentsDark } from './components/components'

const shape = {
  borderRadius: tokens.sizeShapeRadius,
}

const themeCompactLight = {
  breakpoints: breakpoints,
  palette: { ...paletteLight },
  spacing: spacing,
  shape: shape,
  typography: typography,
  components: { ...componentsLight },
}
const themeCompactDark = {
  breakpoints: breakpoints,
  palette: { ...paletteDark },
  spacing: spacing,
  shape: shape,
  typography: typography,
  components: { ...componentsDark },
}
const themeWideLight = {
  breakpoints: breakpoints,
  palette: { ...paletteLight },
  spacing: spacing,
  shape: shape,
  typography: typography,
  components: { ...componentsLight },
}
const themeWideDark = {
  breakpoints: breakpoints,
  palette: { ...paletteDark },
  spacing: spacing,
  shape: shape,
  typography: typography,
  components: { ...componentsDark },
}

export { themeCompactLight, themeCompactDark, themeWideLight, themeWideDark }
