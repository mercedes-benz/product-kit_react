// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    Select,
    MenuItem
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class MenuTestModul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testValue: ""
        };
    }

    render() {
        return (
            <section class="component-section menu-section">
                    <div class="section-header">
                        <Button startIcon={<OpenInNewIcon/>}>
                            <a 
                                href="https://material.io/design/components/menus.html"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Menu
                            </a>
                        </Button>

                    </div>
                    <div class="component-wrapper">
                        <Select
                            value={this.state.testValue}
                            label="Test"
                            onChange={(event) => this.setState({testValue: event.target.value})}
                        >
                            <MenuItem value={10}>Body 2</MenuItem>
                            <MenuItem value={20}>Body 2</MenuItem>
                            <MenuItem value={30}>Body 2</MenuItem>
                        </Select>
                    </div>
                </section>
        );
    }
}