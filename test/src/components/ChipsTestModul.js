// SPDX-License-Identifier: MIT

import React from 'react'
import { Button, Chip, Stack, Grid, Avatar } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import CheckIcon from '@mui/icons-material/Check'
import { scaledSpacing } from '@daimler/productkit-react/'

export default class ChipsTestModul extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label1: true,
      label2: true,
      label3: true,
    }
  }

  handleDelete = (event) => {}

  toggleSelection = (handle) => (event) => {
    let newState = {}
    newState[handle] = !this.state[handle]
    this.setState(newState)
  }

  render() {
    return (
      <section className="component-section">
        <div className="section-header">
          <Button startIcon={<OpenInNewIcon />}>
            <a
              href="https://material.io/design/components/chips.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chips
            </a>
          </Button>
        </div>
        <Grid container>
          <Grid item xs={4}>
            {/* Default */}
            <Stack
              sx={{
                ...scaledSpacing('gap', 'xxs'),
                ...scaledSpacing('my', 'xs'),
              }}
            >
              <Chip label="Body 2" />
              <Chip avatar={<Avatar>M</Avatar>} label="Body 2" />
              <Chip
                avatar={<Avatar>M</Avatar>}
                label="Body 2"
                variant="outlined"
              />
            </Stack>
            <Stack
              sx={{
                ...scaledSpacing('gap', 'xxs'),
                ...scaledSpacing('my', 'xs'),
              }}
            >
              <Chip
                icon={this.state.label1 ? <CheckIcon /> : null}
                label="Body 2"
                onClick={this.toggleSelection('label1')}
              />
              <Chip
                icon={this.state.label2 ? <CheckIcon /> : null}
                label="Body 2"
                onClick={this.toggleSelection('label2')}
              />
              <Chip
                icon={this.state.label3 ? <CheckIcon /> : null}
                label="Body 2"
                onClick={this.toggleSelection('label3')}
                variant="outlined"
              />
            </Stack>
            <Stack
              sx={{
                ...scaledSpacing('gap', 'xxs'),
                ...scaledSpacing('my', 'xs'),
              }}
            >
              <Chip label="Body 2" onDelete={this.handleDelete} />
              <Chip
                label="Body 2"
                variant="outlined"
                onDelete={this.handleDelete}
              />
              <Chip
                label="Body 2"
                variant="outlined"
                onDelete={this.handleDelete}
              />
            </Stack>
          </Grid>
          {/* Primary */}
          <Grid item xs={4}>
            <Stack
              sx={{
                ...scaledSpacing('gap', 'xxs'),
                ...scaledSpacing('my', 'xs'),
              }}
            >
              <Chip label="Body 2" color="primary" />
              <Chip
                avatar={<Avatar>M</Avatar>}
                label="Body 2"
                color="primary"
              />
              <Chip
                avatar={<Avatar>M</Avatar>}
                label="Body 2"
                variant="outlined"
                color="primary"
              />
            </Stack>
            <Stack
              sx={{
                ...scaledSpacing('gap', 'xxs'),
                ...scaledSpacing('my', 'xs'),
              }}
            >
              <Chip
                icon={this.state.label1 ? <CheckIcon /> : null}
                label="Body 2"
                onClick={this.toggleSelection('label1')}
                color="primary"
              />
              <Chip
                icon={this.state.label2 ? <CheckIcon /> : null}
                label="Body 2"
                onClick={this.toggleSelection('label2')}
                color="primary"
              />
              <Chip
                icon={this.state.label3 ? <CheckIcon /> : null}
                label="Body 2"
                onClick={this.toggleSelection('label3')}
                variant="outlined"
                color="primary"
              />
            </Stack>
            <Stack
              sx={{
                ...scaledSpacing('gap', 'xxs'),
                ...scaledSpacing('my', 'xs'),
              }}
            >
              <Chip
                label="Body 2"
                onDelete={this.handleDelete}
                color="primary"
              />
              <Chip
                label="Body 2"
                variant="outlined"
                onDelete={this.handleDelete}
                color="primary"
              />
              <Chip
                label="Body 2"
                variant="outlined"
                onDelete={this.handleDelete}
                color="primary"
              />
            </Stack>
          </Grid>
          {/* Secondary */}
          <Grid item xs={4}>
            <Stack
              sx={{
                ...scaledSpacing('gap', 'xxs'),
                ...scaledSpacing('my', 'xs'),
              }}
            >
              <Chip label="Body 2" color="secondary" />
              <Chip
                avatar={<Avatar>M</Avatar>}
                label="Body 2"
                color="secondary"
              />
              <Chip
                avatar={<Avatar>M</Avatar>}
                label="Body 2"
                variant="outlined"
                color="secondary"
              />
            </Stack>
            <Stack
              sx={{
                ...scaledSpacing('gap', 'xxs'),
                ...scaledSpacing('my', 'xs'),
              }}
            >
              <Chip
                icon={this.state.label1 ? <CheckIcon /> : null}
                label="Body 2"
                onClick={this.toggleSelection('label1')}
                color="secondary"
              />
              <Chip
                icon={this.state.label2 ? <CheckIcon /> : null}
                label="Body 2"
                onClick={this.toggleSelection('label2')}
                color="secondary"
              />
              <Chip
                icon={this.state.label3 ? <CheckIcon /> : null}
                label="Body 2"
                onClick={this.toggleSelection('label3')}
                variant="outlined"
                color="secondary"
              />
            </Stack>
            <Stack
              sx={{
                ...scaledSpacing('gap', 'xxs'),
                ...scaledSpacing('my', 'xs'),
              }}
            >
              <Chip
                label="Body 2"
                onDelete={this.handleDelete}
                color="secondary"
              />
              <Chip
                label="Body 2"
                variant="outlined"
                onDelete={this.handleDelete}
                color="secondary"
              />
              <Chip
                label="Body 2"
                variant="outlined"
                onDelete={this.handleDelete}
                color="secondary"
              />
            </Stack>
          </Grid>
        </Grid>
      </section>
    )
  }
}
