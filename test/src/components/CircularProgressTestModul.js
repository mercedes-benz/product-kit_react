// SPDX-License-Identifier: MIT

import React from 'react'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Box from '@mui/material/Box'
import { Stack } from '@mui/material'
import { scaledSpacing } from '@daimler/productkit-react'

export default function CircularProgressTestModul() {
  return (
    <Box>
      <div className="section-header">
        <Button startIcon={<OpenInNewIcon />}>
          <a
            href="https://material.io/design/components/progress-indicators.html#circular-progress-indicators"
            target="_blank"
            rel="noopener noreferrer"
          >
            Circular Progress
          </a>
        </Button>
      </div>
      <Stack sx={{ ...scaledSpacing('gap', 'xs') }}>
        <CircularProgress />
        <CircularProgress color="secondary" />

        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={50} color="secondary" />
      </Stack>
    </Box>
  )
}
