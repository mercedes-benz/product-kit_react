// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    Box,
    Tabs,
    Tab
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class TabsTestModul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    }

    render() {
        return (
            <section className="component-section">
                <div className="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/components/tabs"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Tabs
                        </a>
                    </Button>
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://mui.com/components/tabs/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Tabs in MUI
                        </a>
                    </Button>
                    
                </div>
                <div className="component-wrapper">
                    <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            <Tab label="Item One" />
                            <Tab label="Disbaled" disabled/>
                            <Tab icon={<OpenInNewIcon/>} label="Top" iconPosition="top"/>
                            <Tab icon={<OpenInNewIcon/>} label="Bottom" iconPosition="bottom"/>
                            <Tab icon={<OpenInNewIcon/>} label="Left" iconPosition="start"/>
                            <Tab icon={<OpenInNewIcon/>} label="Right" iconPosition="end"/>
                            <Tab label="Item Seven" />
                        </Tabs>
                    </Box>
                    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
                        <Tabs
                            orientation="vertical"
                            value={this.state.value}
                            onChange={this.handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            <Tab label="Item One" />
                            <Tab label="Disbaled" disabled/>
                            <Tab icon={<OpenInNewIcon/>} label="Top" iconPosition="top"/>
                            <Tab icon={<OpenInNewIcon/>} label="Bottom" iconPosition="bottom"/>
                            <Tab icon={<OpenInNewIcon/>} label="Left" iconPosition="start"/>
                            <Tab icon={<OpenInNewIcon/>} label="Right" iconPosition="end"/>
                            <Tab label="Item Seven" />
                        </Tabs>
                    </Box>
                </div>
            </section>
        );
    }
}