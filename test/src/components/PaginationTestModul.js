// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    Pagination,
    TablePagination
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class PaginationTestModul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 10
        }
    }

    handleChangePage = (event, newPage) => {
        this.setState({page: newPage});
    } 

    handleChangeRowsPerPage = (event) => {
        let newRowCount = parseInt(event.target.value, 10);
        this.setState({page: 0, rowsPerPage: newRowCount});
    }

    render() {
        return (
            <section class="component-section">
                <div class="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://mui.com/components/pagination/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Pagination in MUI
                        </a>
                    </Button>
                    
                </div>
                <div class="component-wrapper">
                <Pagination count={20} />
                <Pagination count={20} showFirstButton showLastButton/>
                <Pagination count={20} hidePrevButton hideNextButton/>
                Different Sizes
                <Pagination count={20} size="small"/>
                <Pagination count={20} size="large"/>
                Different Designes
                <Pagination count={20} variant="outlined" color="primary" />
                <Pagination count={20} color="secondary" />
                <Pagination count={20} shape="rounded" />
                <Pagination count={20} variant="outlined" shape="rounded" />
                <Pagination count={20} disabled />
                Table Pagination
                <TablePagination
                    component="div"
                    count={100}
                    page={this.state.page}
                    onPageChange={this.handleChangePage}
                    rowsPerPage={this.state.rowsPerPage}
                    onRowsPerPageChange={this.handleChangeRowsPerPage}
                />
                </div>
            </section>
        );
    }
}