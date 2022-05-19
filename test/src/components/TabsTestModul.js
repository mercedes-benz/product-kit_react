// SPDX-License-Identifier: MIT

import React from 'react'
import { Button, Box, Tabs, Tab, Stack } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { scaledSpacing } from '@daimler/productkit-react'

export default class TabsTestModul extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue })
  }

  render() {
    return (
      <section className="component-section">
        <div className="section-header">
          <Button startIcon={<OpenInNewIcon />}>
            <a
              href="https://material.io/components/tabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tabs
            </a>
          </Button>
          <Button startIcon={<OpenInNewIcon />}>
            <a
              href="https://mui.com/components/tabs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tabs in MUI
            </a>
          </Button>
        </div>
        <Box sx={{ maxWidth: 480 }}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Item One" />
            <Tab label="Disbaled" disabled />
            <Tab icon={<OpenInNewIcon />} label="Top" iconPosition="top" />
            <Tab
              icon={<OpenInNewIcon />}
              label="Bottom"
              iconPosition="bottom"
            />
            <Tab icon={<OpenInNewIcon />} label="Left" iconPosition="start" />
            <Tab icon={<OpenInNewIcon />} label="Right" iconPosition="end" />
            <Tab label="Item Seven" />
          </Tabs>
        </Box>
        <Box sx={{ maxWidth: 480 }}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Item One" />
            <Tab label="Disbaled" disabled />
            <Tab icon={<OpenInNewIcon />} label="Top" iconPosition="top" />
            <Tab
              icon={<OpenInNewIcon />}
              label="Bottom"
              iconPosition="bottom"
            />
            <Tab icon={<OpenInNewIcon />} label="Left" iconPosition="start" />
            <Tab icon={<OpenInNewIcon />} label="Right" iconPosition="end" />
            <Tab label="Item Seven" />
          </Tabs>
        </Box>
        <Stack justifyContent="start" sx={{ ...scaledSpacing('gap', 'xs') }}>
          <Box
            sx={{
              display: 'flex',
              height: 224,
            }}
          >
            <Tabs
              orientation="vertical"
              value={this.state.value}
              onChange={this.handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Item One" />
              <Tab label="Disbaled" disabled />
              <Tab icon={<OpenInNewIcon />} label="Top" iconPosition="top" />
              <Tab
                icon={<OpenInNewIcon />}
                label="Bottom"
                iconPosition="bottom"
              />
              <Tab icon={<OpenInNewIcon />} label="Left" iconPosition="start" />
              <Tab icon={<OpenInNewIcon />} label="Right" iconPosition="end" />
              <Tab label="Item Seven" />
            </Tabs>
          </Box>
          <Box
            sx={{
              display: 'flex',
              height: 224,
            }}
          >
            <Tabs
              orientation="vertical"
              value={this.state.value}
              onChange={this.handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab label="Item One" />
              <Tab label="Disbaled" disabled />
              <Tab icon={<OpenInNewIcon />} label="Top" iconPosition="top" />
              <Tab
                icon={<OpenInNewIcon />}
                label="Bottom"
                iconPosition="bottom"
              />
              <Tab icon={<OpenInNewIcon />} label="Left" iconPosition="start" />
              <Tab icon={<OpenInNewIcon />} label="Right" iconPosition="end" />
              <Tab label="Item Seven" />
            </Tabs>
          </Box>
        </Stack>
      </section>
    )
  }
}
