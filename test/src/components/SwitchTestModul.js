// SPDX-License-Identifier: MIT

import React from 'react'
import { Button, Stack, Switch } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { scaledSpacing } from '@daimler/productkit-react'

export default class SwitchTestModul extends React.Component {
  render() {
    return (
      <section className="component-section switch-section">
        <div className="section-header">
          <Button startIcon={<OpenInNewIcon />}>
            <a
              href="https://material.io/design/components/selection-controls.html#switches"
              target="_blank"
              rel="noopener noreferrer"
            >
              Switch
            </a>
          </Button>
        </div>
        <Stack direction="column" sx={{ ...scaledSpacing('gap', 'xs') }}>
          <Stack sx={{ ...scaledSpacing('gap', 'xxs') }}>
            <Switch defaultChecked />
            <Switch />
            <Switch defaultChecked disabled />
            <Switch disabled />
          </Stack>
          <Stack sx={{ ...scaledSpacing('gap', 'xxs') }}>
            <Switch defaultChecked color="secondary" />
            <Switch color="secondary" />
            <Switch defaultChecked disabled color="secondary" />
            <Switch disabled color="secondary" />
          </Stack>
        </Stack>
      </section>
    )
  }
}
