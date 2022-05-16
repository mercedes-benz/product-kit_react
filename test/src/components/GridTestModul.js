// SPDX-License-Identifier: MIT
import React from 'react'
import { Button, Grid, Paper } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

export default class GridTestModul extends React.Component {
  render() {
    return (
      <section className="component-section">
        <div className="section-header">
          <Button startIcon={<OpenInNewIcon />}>
            <a
              href="https://mui.com/components/grid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Grids in MUI
            </a>
          </Button>
        </div>
        <Grid container>
          <Grid item xs={6} md={8}>
            <Paper>xs=6 m=8</Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper>xs=6 m=4</Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper>xs=6 m=4</Paper>
          </Grid>
          <Grid item xs={6} md={8}>
            <Paper>xs=6 m=8</Paper>
          </Grid>
        </Grid>
      </section>
    )
  }
}
