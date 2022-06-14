// SPDX-License-Identifier: MIT

import React from 'react'
import {
  Button,
  Pagination,
  Stack,
  TablePagination,
  Typography,
} from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { scaledSpacing } from '@daimler/productkit-react'

export default class PaginationTestModul extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      rowsPerPage: 10,
    }
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage })
  }

  handleChangeRowsPerPage = (event) => {
    let newRowCount = parseInt(event.target.value, 10)
    this.setState({ page: 0, rowsPerPage: newRowCount })
  }

  render() {
    return (
      <section className="component-section">
        <div className="section-header">
          <Button startIcon={<OpenInNewIcon />}>
            <a
              href="https://mui.com/components/pagination/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pagination in MUI
            </a>
          </Button>
        </div>
        <Stack direction="column" sx={{ ...scaledSpacing('gap', 'xs') }}>
          <Pagination count={20} />
          <Pagination count={20} showFirstButton showLastButton />
          <Pagination count={20} hidePrevButton hideNextButton />
          <Typography variant="subtitle2">Different Sizes</Typography>
          <Pagination count={20} size="small" />
          <Pagination count={20} size="large" />
          <Typography variant="subtitle2">Different Designs</Typography>
          <Pagination count={20} color="primary" />
          <Pagination count={20} variant="outlined" color="primary" />
          <Pagination count={20} color="secondary" />
          <Pagination count={20} color="secondary" variant="outlined" />
          <Pagination count={20} shape="rounded" />
          <Pagination count={20} variant="outlined" shape="rounded" />
          <Pagination count={20} disabled />
          <Typography variant="subtitle2">Table Pagination</Typography>
          <TablePagination
            component="div"
            count={100}
            page={this.state.page}
            onPageChange={this.handleChangePage}
            rowsPerPage={this.state.rowsPerPage}
            onRowsPerPageChange={this.handleChangeRowsPerPage}
          />
        </Stack>
      </section>
    )
  }
}
