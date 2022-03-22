// SPDX-License-Identifier: MIT 

import { makeStyles } from '@mui/styles';
import { breakpoints } from './theme';
import * as tokens from "@daimler/productkit-core/exports/web/styles/js/variables.js"

const margins = ["ma", "mt", "mb", "ml", "mr", "mx", "my"]
const paddings = ["pa", "pt", "pb", "pl", "pr", "px", "py"]
const sizes = ["3xs", "Xxs", "Xs", "S", "M", "L", "Xl", "Xxl", "3xl"]
const spacings = {

}

margins.forEach(margin => {
    sizes.forEach(size => {
        var name = margin + "-" + size.toLowerCase()
        var rootSpacing = "sizeApplicationSpacingXs" + size
        var sSpacing = "sizeApplicationSpacingS" + size
        var mSpacing = "sizeApplicationSpacingM" + size
        var lSpacing = "sizeApplicationSpacingL" + size
        var xlSpacing = "sizeApplicationSpacingXl" + size
        var temp = {}
        temp[name] = { 
            ...(["ma", "ml", "mx"].includes(margin)) && {marginLeft: tokens[rootSpacing]},
            ...(["ma", "mr", "mx"].includes(margin)) && {marginRight: tokens[rootSpacing]},
            ...(["ma", "mt", "my"].includes(margin)) && {marginTop: tokens[rootSpacing]},
            ...(["ma", "mb", "my"].includes(margin)) && {marginBottom: tokens[rootSpacing]},
            [breakpoints.up('sm')]: {
                ...(["ma", "ml", "mx"].includes(margin)) && {marginLeft: tokens[sSpacing]},
                ...(["ma", "mr", "mx"].includes(margin)) && {marginRight: tokens[sSpacing]},
                ...(["ma", "mt", "my"].includes(margin)) && {marginTop: tokens[sSpacing]},
                ...(["ma", "mb", "my"].includes(margin)) && {marginBottom: tokens[sSpacing]},
            },
            [breakpoints.up('md')]: {
                ...(["ma", "ml", "mx"].includes(margin)) && {marginLeft: tokens[mSpacing]},
                ...(["ma", "mr", "mx"].includes(margin)) && {marginRight: tokens[mSpacing]},
                ...(["ma", "mt", "my"].includes(margin)) && {marginTop: tokens[mSpacing]},
                ...(["ma", "mb", "my"].includes(margin)) && {marginBottom: tokens[mSpacing]},
            },
            [breakpoints.up('lg')]: {
                ...(["ma", "ml", "mx"].includes(margin)) && {marginLeft: tokens[lSpacing]},
                ...(["ma", "mr", "mx"].includes(margin)) && {marginRight: tokens[lSpacing]},
                ...(["ma", "mt", "my"].includes(margin)) && {marginTop: tokens[lSpacing]},
                ...(["ma", "mb", "my"].includes(margin)) && {marginBottom: tokens[lSpacing]},
            },
            [breakpoints.up('xl')]: {
                ...(["ma", "ml", "mx"].includes(margin)) && {marginLeft: tokens[xlSpacing]},
                ...(["ma", "mr", "mx"].includes(margin)) && {marginRight: tokens[xlSpacing]},
                ...(["ma", "mt", "my"].includes(margin)) && {marginTop: tokens[xlSpacing]},
                ...(["ma", "mb", "my"].includes(margin)) && {marginBottom: tokens[xlSpacing]},
            }
        }
        Object.assign(spacings, temp)
    });
});

paddings.forEach(padding => {
    sizes.forEach(size => {
        var name = padding + "-" + size.toLowerCase()
        var rootSpacing = "sizeApplicationSpacingXs" + size
        var sSpacing = "sizeApplicationSpacingS" + size
        var mSpacing = "sizeApplicationSpacingM" + size
        var lSpacing = "sizeApplicationSpacingL" + size
        var xlSpacing = "sizeApplicationSpacingXl" + size
        var temp = {}
        temp[name] = { 
            ...(["pa", "pl", "px"].includes(padding)) && {paddingLeft: tokens[rootSpacing]},
            ...(["pa", "pr", "px"].includes(padding)) && {paddingRight: tokens[rootSpacing]},
            ...(["pa", "pt", "py"].includes(padding)) && {paddingTop: tokens[rootSpacing]},
            ...(["pa", "pb", "py"].includes(padding)) && {paddingBottom: tokens[rootSpacing]},
            [breakpoints.up('sm')]: {
                ...(["pa", "pl", "px"].includes(padding)) && {paddingLeft: tokens[sSpacing]},
                ...(["pa", "pr", "px"].includes(padding)) && {paddingRight: tokens[sSpacing]},
                ...(["pa", "pt", "py"].includes(padding)) && {paddingTop: tokens[sSpacing]},
                ...(["pa", "pb", "py"].includes(padding)) && {paddingBottom: tokens[sSpacing]},
            },
            [breakpoints.up('md')]: {
                ...(["pa", "pl", "px"].includes(padding)) && {paddingLeft: tokens[mSpacing]},
                ...(["pa", "pr", "px"].includes(padding)) && {paddingRight: tokens[mSpacing]},
                ...(["pa", "pt", "py"].includes(padding)) && {paddingTop: tokens[mSpacing]},
                ...(["pa", "pb", "py"].includes(padding)) && {paddingBottom: tokens[mSpacing]},
            },
            [breakpoints.up('lg')]: {
                ...(["pa", "pl", "px"].includes(padding)) && {paddingLeft: tokens[lSpacing]},
                ...(["pa", "pr", "px"].includes(padding)) && {paddingRight: tokens[lSpacing]},
                ...(["pa", "pt", "py"].includes(padding)) && {paddingTop: tokens[lSpacing]},
                ...(["pa", "pb", "py"].includes(padding)) && {paddingBottom: tokens[lSpacing]},
            },
            [breakpoints.up('xl')]: {
                ...(["pa", "pl", "px"].includes(padding)) && {paddingLeft: tokens[xlSpacing]},
                ...(["pa", "pr", "px"].includes(padding)) && {paddingRight: tokens[xlSpacing]},
                ...(["pa", "pt", "py"].includes(padding)) && {paddingTop: tokens[xlSpacing]},
                ...(["pa", "pb", "py"].includes(padding)) && {paddingBottom: tokens[xlSpacing]},
            }
        }
        Object.assign(spacings, temp)
    });
});

const pkStyles = makeStyles((theme) => (spacings));

export default pkStyles