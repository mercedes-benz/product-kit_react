import { spacings } from "./theme"

export function scaledSpacing(type, value) {
  let sxScaledSpacings = {}
  let sxObject = {}
  Object.keys(spacings).forEach((breakpoint) => {
    if (value === 0) {
      sxScaledSpacings[breakpoint] = 0
    }
    else if (spacings[breakpoint][value]) {
      sxScaledSpacings[breakpoint] = spacings[breakpoint][value]
    }
  })
  sxObject[type] = sxScaledSpacings
  return sxObject
}