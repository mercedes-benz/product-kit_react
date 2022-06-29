// SPDX-License-Identifier: MIT
import React from 'react'
import {
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
} from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { scaledSpacing } from '@daimler/productkit-react'

export default class RadioButtonTestModul extends React.Component {
  render() {
    return (
      <section className="component-section">
        <div className="section-header">
          <Button startIcon={<OpenInNewIcon />}>
            <a
              href="https://material.io/design/components/selection-controls.html#radio-buttons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Radio Button
            </a>
          </Button>
        </div>
        <Stack direction="column" sx={{ ...scaledSpacing('gap', 'xs') }}>
          <Stack sx={{ ...scaledSpacing('gap', 'xxs') }}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="test2"
            >
              <FormControlLabel value="test" control={<Radio />} label="" />
              <FormControlLabel value="test2" control={<Radio />} label="" />
            </RadioGroup>
          </Stack>
          <Stack sx={{ ...scaledSpacing('gap', 'xxs') }}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="test2"
            >
              <FormControlLabel
                value="test"
                control={<Radio color="secondary" />}
                label=""
              />
              <FormControlLabel
                value="test2"
                control={<Radio color="secondary" />}
                label=""
              />
            </RadioGroup>
          </Stack>
        </Stack>
      </section>
    )
  }
}
