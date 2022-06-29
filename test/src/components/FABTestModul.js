// SPDX-License-Identifier: MIT

import React from 'react'
import { Button, Fab, Stack } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import FavoriteIcon from '@mui/icons-material/Favorite'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import { scaledSpacing } from '@daimler/productkit-react'

export default class FABTestModul extends React.Component {
  render() {
    return (
      <section className="component-section">
        <div className="section-header">
          <Button startIcon={<OpenInNewIcon />}>
            <a
              href="https://material.io/design/components/buttons-floating-action-button.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAB
            </a>
          </Button>
        </div>
        <Stack alignItems="center" sx={{ ...scaledSpacing('gap', 'xs') }}>
          <Fab variant="extended" aria-label="edit">
            <EditIcon />
            edit
          </Fab>
          <Fab color="primary" aria-label="favorite">
            <FavoriteIcon />
          </Fab>
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Stack>
      </section>
    )
  }
}
