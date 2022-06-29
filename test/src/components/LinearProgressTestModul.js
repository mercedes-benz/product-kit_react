// SPDX-License-Identifier: MIT

import React from 'react'
import { Button, LinearProgress, Stack } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { scaledSpacing } from '@daimler/productkit-react'

export default class LinearProgressTestModul extends React.Component {
  render() {
    return (
      <section className="component-section linear-progress-section">
        <div className="section-header">
          <Button startIcon={<OpenInNewIcon />}>
            <a
              href="https://material.io/design/components/progress-indicators.html#linear-progress-indicators"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linear Progress
            </a>
          </Button>
        </div>
        <Stack direction="column" sx={{ ...scaledSpacing('gap', 'xxs') }}>
          <LinearProgress />
          <LinearProgress color="secondary" />
          <LinearProgress variant="determinate" value={75} />
          <LinearProgress variant="determinate" color="secondary" value={50} />
          <LinearProgress variant="buffer" value={40} valueBuffer={50} />
          <LinearProgress
            variant="buffer"
            color="secondary"
            value={40}
            valueBuffer={50}
          />
        </Stack>
      </section>
    )
  }
}
