// SPDX-License-Identifier: MIT

import React from 'react'

import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

export default class SelectTestModul extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      testValue1: '',
      testValue2: '',
      testValue3: '',
      testValue4: '',
    }
  }

  render() {
    return (
      <div className="component-section-row">
        <section className="component-section select-component">
          <div className="section-header">
            <Button startIcon={<OpenInNewIcon />}>
              <a
                href="https://material.io/develop/web/components/input-controls/select-menus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Select
              </a>
            </Button>
          </div>
          <Grid container alignItems="center" rowGap={4}>
            {/* Filled */}
            <Grid item xs={4} md={2}>
              <FormControl variant="filled" fullWidth>
                <InputLabel>Label</InputLabel>
                <Select
                  value={this.state.testValue1}
                  label="Label"
                  onChange={(event) =>
                    this.setState({ testValue1: event.target.value })
                  }
                >
                  <MenuItem value={''}></MenuItem>
                  <MenuItem value={10}>Body 2</MenuItem>
                  <MenuItem value={20} disabled>
                    Body 2
                  </MenuItem>
                  <MenuItem value={30}>Body 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} md={2}>
              <FormControl
                error={this.state.testValue2 === ''}
                variant="filled"
                fullWidth
              >
                <InputLabel>Label</InputLabel>
                <Select
                  value={this.state.testValue2}
                  label="Label"
                  onChange={(event) =>
                    this.setState({ testValue2: event.target.value })
                  }
                >
                  <MenuItem value={''}></MenuItem>
                  <MenuItem value={10}>Body 2</MenuItem>
                  <MenuItem value={20} disabled>
                    Body 2
                  </MenuItem>
                  <MenuItem value={30}>Body 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} md={2}>
              <FormControl variant="filled" fullWidth>
                <InputLabel>Label</InputLabel>
                <Select
                  value={this.state.testValue2}
                  label="Label"
                  onChange={(event) =>
                    this.setState({ testValue2: event.target.value })
                  }
                  disabled
                >
                  <MenuItem value={''}></MenuItem>
                  <MenuItem value={10}>Body 2</MenuItem>
                  <MenuItem value={20} disabled>
                    Body 2
                  </MenuItem>
                  <MenuItem value={30}>Body 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* Standard */}
            <Grid item xs={4} md={2}>
              <FormControl variant="standard" fullWidth>
                <InputLabel>Label</InputLabel>
                <Select
                  value={this.state.testValue2}
                  label="Label"
                  onChange={(event) =>
                    this.setState({ testValue2: event.target.value })
                  }
                >
                  <MenuItem value={''}></MenuItem>
                  <MenuItem value={10}>Body 2</MenuItem>
                  <MenuItem value={20} disabled>
                    Body 2
                  </MenuItem>
                  <MenuItem value={30}>Body 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} md={2}>
              <FormControl
                error={this.state.testValue2 === ''}
                variant="standard"
                fullWidth
              >
                <InputLabel>Label</InputLabel>
                <Select
                  value={this.state.testValue2}
                  label="Label"
                  onChange={(event) =>
                    this.setState({ testValue2: event.target.value })
                  }
                >
                  <MenuItem value={''}></MenuItem>
                  <MenuItem value={10}>Body 2</MenuItem>
                  <MenuItem value={20} disabled>
                    Body 2
                  </MenuItem>
                  <MenuItem value={30}>Body 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} md={2}>
              <FormControl variant="standard" fullWidth>
                <InputLabel>Label</InputLabel>
                <Select
                  value={this.state.testValue2}
                  label="Label"
                  onChange={(event) =>
                    this.setState({ testValue2: event.target.value })
                  }
                  disabled
                >
                  <MenuItem value={''}></MenuItem>
                  <MenuItem value={10}>Body 2</MenuItem>
                  <MenuItem value={20} disabled>
                    Body 2
                  </MenuItem>
                  <MenuItem value={30}>Body 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* Outlined */}
            <Grid item xs={4} md={2}>
              <FormControl fullWidth>
                <InputLabel>Label</InputLabel>
                <Select
                  value={this.state.testValue3}
                  label="Label"
                  onChange={(event) =>
                    this.setState({ testValue3: event.target.value })
                  }
                >
                  <MenuItem value={''}></MenuItem>
                  <MenuItem value={10}>Body 2</MenuItem>
                  <MenuItem value={20} disabled>
                    Body 2
                  </MenuItem>
                  <MenuItem value={30}>Body 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} md={2}>
              <FormControl error={this.state.testValue4 === ''} fullWidth>
                <InputLabel>Label</InputLabel>
                <Select
                  value={this.state.testValue4}
                  label="Label"
                  onChange={(event) =>
                    this.setState({ testValue4: event.target.value })
                  }
                >
                  <MenuItem value={''}></MenuItem>
                  <MenuItem value={10}>Body 2</MenuItem>
                  <MenuItem value={20} disabled>
                    Body 2
                  </MenuItem>
                  <MenuItem value={30}>Body 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} md={2}>
              <FormControl error={this.state.testValue2 === ''} fullWidth>
                <InputLabel>Label</InputLabel>
                <Select
                  disabled
                  value={this.state.testValue2}
                  label="Label"
                  onChange={(event) =>
                    this.setState({ testValue2: event.target.value })
                  }
                >
                  <MenuItem value={''}></MenuItem>
                  <MenuItem value={10}>Body 2</MenuItem>
                  <MenuItem value={20} disabled>
                    Body 2
                  </MenuItem>
                  <MenuItem value={30}>Body 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </section>
      </div>
    )
  }
}
