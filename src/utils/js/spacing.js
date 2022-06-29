import { spacingSizes } from "../../styles/spacing/spacings"

function scaledSpacing(type, value) {
  let sxScaledSpacings = {}
  let sxObject = {}
  Object.keys(spacingSizes).forEach((breakpoint) => {
    if (value === 0) {
      sxScaledSpacings[breakpoint] = 0
    }
    else if (spacingSizes[breakpoint][value]) {
      sxScaledSpacings[breakpoint] = spacingSizes[breakpoint][value]
    }
  })
  sxObject[type] = sxScaledSpacings
  return sxObject
}

export { scaledSpacing }