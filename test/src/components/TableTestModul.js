// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Table
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class TableTestModul extends React.Component {
    rows = [
        {
            model: "AMG GT C190 Black Series 4.0",
            release: "2020",
            topSpeed: "325",
            fuel: "12.8"
        },
        {
            model: "AMG GT C190 S 4.0",
            release: "2017",
            topSpeed: "310",
            fuel: "9.4"
        },
        {
            model: "AMG GT C190 R 4.0",
            release: "2017",
            topSpeed: "318",
            fuel: "11.4"
        },
        {
            model: "AMG GT C190 C 4.0",
            release: "2017",
            topSpeed: "317",
            fuel: "11.4"
        },
        {
            model: "AMG GT C190 4.0",
            release: "2017",
            topSpeed: "304",
            fuel: "9.6"
        }
    ]

    render() {
        return (
            <section class="component-section">
                <div class="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://mui.com/components/tables/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Table in MUI
                        </a>
                    </Button>
                    
                </div>
                <div class="component-wrapper">
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Model</TableCell>
                                    <TableCell align="right">Released in</TableCell>
                                    <TableCell align="right">Top Speed&nbsp;(km/h)</TableCell>
                                    <TableCell align="right">Fuel Consumption&nbsp;(l/100km)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.rows.map((row) => (
                                    <TableRow>
                                        <TableCell >{row.model}</TableCell>
                                        <TableCell align="right">{row.release}</TableCell>
                                        <TableCell align="right">{row.topSpeed}</TableCell>
                                        <TableCell align="right">{row.fuel}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </section>
        );
    }
}