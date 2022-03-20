// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    Chip
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckIcon from '@mui/icons-material/Check';


export default class ChipsTestModul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label1: true,
            label2: true,
            label3: true,
        }
    }

    handleDelete = (event) => {};

    toggleSelection = (handle) => (event) => {
        let newState = {};
        newState[handle] = !this.state[handle];
        this.setState(newState);

    } 

    render() {
        return (
            <section class="component-section">
                <div class="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                            <a 
                                href="https://material.io/design/components/chips.html"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Chips
                            </a>
                        </Button>
                </div>
                <div class="component-wrapper chips-component-wrapper chips-component-wrapper-1">
                    <Chip label="Body 2" />
                    <Chip label="Body 2" />
                    <Chip label="Body 2" variant="outlined" />
                </div>
                <div class="component-wrapper chips-component-wrapper chips-component-wrapper-2">
                    <Chip icon={this.state.label1? <CheckIcon /> : null} label="Body 2" onClick={this.toggleSelection("label1")}/>
                    <Chip icon={this.state.label2? <CheckIcon /> : null} label="Body 2" onClick={this.toggleSelection("label2")}/>
                    <Chip icon={this.state.label3? <CheckIcon /> : null} label="Body 2" onClick={this.toggleSelection("label3")} variant="outlined" />
                </div>
                <div class="component-wrapper chips-component-wrapper chips-component-wrapper-3">
                    <Chip label="Body 2" onDelete={this.handleDelete} />
                    <Chip label="Body 2" variant="outlined" onDelete={this.handleDelete} />
                    <Chip label="Body 2" variant="outlined" onDelete={this.handleDelete} />
                </div>
            </section>
        );
    }
}