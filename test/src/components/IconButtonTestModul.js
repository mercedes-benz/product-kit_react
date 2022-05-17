// SPDX-License-Identifier: MIT

import React from 'react'
import { Button, Stack } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import IconButton from '@mui/material/IconButton'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import { scaledSpacing } from '@daimler/productkit-react'

export default class IconButtonTestModul extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mute: false,
    }
  }

  render() {
    return (
      <section className="component-section">
        <div className="section-header">
          <Button startIcon={<OpenInNewIcon />}>
            <a
              href="https://material.io/design/components/buttons.html#toggle-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Icon Button
            </a>
          </Button>
        </div>
        <Stack alignItems="center" sx={{ ...scaledSpacing('gap', 'xs') }}>
          <IconButton
            aria-label="mute"
            onClick={(event) => this.setState({ mute: !this.state.mute })}
          >
            {this.state.mute ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
          <IconButton aria-label="mute" disabled>
            <VolumeOffIcon />
          </IconButton>
          <IconButton
            aria-label="mute"
            color="primary"
            onClick={(event) => this.setState({ mute: !this.state.mute })}
          >
            {this.state.mute ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
          <IconButton
            aria-label="mute"
            color="secondary"
            onClick={(event) => this.setState({ mute: !this.state.mute })}
          >
            {this.state.mute ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
        </Stack>
      </section>
    )
  }
}
