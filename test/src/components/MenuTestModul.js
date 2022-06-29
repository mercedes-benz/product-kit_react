// @ts-nocheck
// SPDX-License-Identifier: MIT
import * as React from 'react'
import { Button, MenuItem, Box, Menu } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { scaledSpacing } from '@daimler/productkit-react'

export default function MenuTestModul() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <section className="component-section menu-section">
      <div className="section-header">
        <Button startIcon={<OpenInNewIcon />}>
          <a
            href="https://material.io/design/components/menus.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Menu
          </a>
        </Button>
      </div>
      <Box sx={{ ...scaledSpacing('mt', 'xs') }}>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose} selected>
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </section>
  )
}
