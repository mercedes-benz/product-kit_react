// SPDX-License-Identifier: MIT
import { scaledSpacing } from '@daimler/productkit-react'
import React from 'react'
import { Button, Link, Stack } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

export default class LinkTestModul extends React.Component {
  render() {
    return (
      <section className="component-section">
        <div className="section-header">
          <Button startIcon={<OpenInNewIcon />}>
            <a
              href="https://mui.com/components/links/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link in MUI
            </a>
          </Button>
        </div>
        <Stack direction="column" sx={{ ...scaledSpacing('gap', 'xs') }}>
          <Stack sx={{ ...scaledSpacing('gap', 'xxs') }}>
            <Link href="#" underline="none">
              never underline
            </Link>
            <Link href="#" underline="hover">
              underline on hover
            </Link>
            <Link href="#" underline="always">
              always underlined
            </Link>
          </Stack>
          <Stack sx={{ ...scaledSpacing('gap', 'xxs') }}>
            <Link href="#" underline="none" color="secondary">
              never underline
            </Link>
            <Link href="#" underline="hover" color="secondary">
              underline on hover
            </Link>
            <Link href="#" underline="always" color="secondary">
              always underlined
            </Link>
          </Stack>
        </Stack>
      </section>
    )
  }
}
