// SPDX-License-Identifier: MIT

import React from 'react'
import { Button, Checkbox, Stack } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

export default class CheckBoxTestModul extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label1: false,
      label2: true,
      label3: true,
    }
  }

  handleChange = (label) => (event) => {
    let newState = {}
    newState[label] = !this.state[label]
    this.setState(newState)
  }

  render() {
    return (
      <section className="component-section">
        <div className="section-header">
          <Button startIcon={<OpenInNewIcon />}>
            <a
              href="https://material.io/design/components/selection-controls.html#checkboxes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Checkbox
            </a>
          </Button>
        </div>
        <Stack direction="row">
          <Checkbox
            checked={this.state.label1}
            inputProps={{ 'aria-label': 'controlled' }}
            onChange={this.handleChange('label1')}
          />
          <Checkbox
            checked={false}
            indeterminate={this.state.label2}
            inputProps={{ 'aria-label': 'controlled' }}
            onChange={this.handleChange('label2')}
          />
          <Checkbox
            checked={this.state.label3}
            inputProps={{ 'aria-label': 'controlled' }}
            onChange={this.handleChange('label3')}
          />
        </Stack>
        <Stack direction="row">
          <Checkbox
            checked={this.state.label1}
            inputProps={{ 'aria-label': 'controlled' }}
            onChange={this.handleChange('label1')}
            color="secondary"
          />
          <Checkbox
            checked={false}
            indeterminate={this.state.label2}
            inputProps={{ 'aria-label': 'controlled' }}
            onChange={this.handleChange('label2')}
            color="secondary"
          />
          <Checkbox
            checked={this.state.label3}
            inputProps={{ 'aria-label': 'controlled' }}
            onChange={this.handleChange('label3')}
            color="secondary"
          />
        </Stack>
      </section>
    )
  }
}
