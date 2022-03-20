// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    ToggleButtonGroup,
    ToggleButton
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class ToggleButtonTestModul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "1"
        };
    }

    changeValue = (event, newValue) => {
        this.setState({value: newValue});
    }

    render() {
        return (
            <section class="component-section">
                <div class="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://mui.com/components/toggle-button/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Toggle Button in MUI
                        </a>
                    </Button>
                    
                </div>
                <div class="component-wrapper">
                    <ToggleButtonGroup
                        value={this.state.value}
                        exclusive
                        onChange={this.changeValue}
                    >
                        <ToggleButton value="1">
                            <OpenInNewIcon />
                        </ToggleButton>
                        <ToggleButton value="2">
                            <OpenInNewIcon />
                        </ToggleButton>
                        <ToggleButton value="3" >
                            <OpenInNewIcon />
                        </ToggleButton>
                        <ToggleButton value="4"disabled>
                            <OpenInNewIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <ToggleButtonGroup
                        value={this.state.value}
                        exclusive
                        size="small"
                        onChange={this.changeValue}
                    >
                        <ToggleButton value="1">
                            <OpenInNewIcon />
                        </ToggleButton>
                        <ToggleButton value="2">
                            <OpenInNewIcon />
                        </ToggleButton>
                        <ToggleButton value="3" >
                            <OpenInNewIcon />
                        </ToggleButton>
                        <ToggleButton value="4"disabled>
                            <OpenInNewIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <ToggleButtonGroup
                        value={this.state.value}
                        exclusive
                        size="large"
                        onChange={this.changeValue}
                    >
                        <ToggleButton value="1">
                            <OpenInNewIcon />
                        </ToggleButton>
                        <ToggleButton value="2">
                            <OpenInNewIcon />
                        </ToggleButton>
                        <ToggleButton value="3" >
                            <OpenInNewIcon />
                        </ToggleButton>
                        <ToggleButton value="4"disabled>
                            <OpenInNewIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <ToggleButtonGroup
                        value={this.state.value}
                        exclusive
                        color="primary"
                        onChange={this.changeValue}
                    >
                        <ToggleButton value="1">
                            <OpenInNewIcon />
                        </ToggleButton>
                        <ToggleButton value="2">
                            <OpenInNewIcon />
                        </ToggleButton>
                        <ToggleButton value="3" >
                            <OpenInNewIcon />
                        </ToggleButton>
                        <ToggleButton value="4"disabled>
                            <OpenInNewIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <ToggleButtonGroup
                        value={this.state.value}
                        exclusive
                        color="secondary"
                        orientation="vertical"
                        onChange={this.changeValue}
                    >
                        <ToggleButton value="1">
                            <OpenInNewIcon />
                        </ToggleButton>
                        <ToggleButton value="2">
                            <OpenInNewIcon />
                        </ToggleButton>
                        <ToggleButton value="3" >
                            <OpenInNewIcon />
                        </ToggleButton>
                        <ToggleButton value="4"disabled>
                            <OpenInNewIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </section>
        );
    }
}