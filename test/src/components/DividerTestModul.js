// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    Divider
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class DividerTestModul extends React.Component {
    render() {
        return (
            <section class="component-section">
                <div class="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/components/dividers"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Divider
                        </a>
                    </Button>
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://mui.com/components/dividers/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Divider in MUI
                        </a>
                    </Button>
                </div>
                <div class="component-wrapper">
                    <Divider/>
                    <Divider>Test Text</Divider>
                    <Divider textAlign="left">Test Text</Divider>
                    <Divider textAlign="right">Test Text</Divider>
                    <Divider variant="middle"/>
                    <Divider variant="middle">Test Text</Divider>
                    <Divider variant="middle" textAlign="left">Test Text</Divider>
                    <Divider variant="middle" textAlign="right">Test Text</Divider>
                    <Divider orientation="vertical"/>
                    <Divider orientation="vertical">Test Text</Divider>
                    <Divider variant="middle" orientation="vertical"/>
                    <Divider variant="middle" orientation="vertical">Test Text</Divider>
                </div>
            </section>
        );
    }
}