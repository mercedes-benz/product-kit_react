// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    Switch
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class SwitchTestModul extends React.Component {
    render() {
        return (
            <section className="component-section switch-section">
                <div className="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/design/components/selection-controls.html#switches"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Switch
                        </a>
                    </Button>
                </div>
                <div className="component-wrapper switch-component-wrapper">
                    <Switch defaultChecked />
                    <Switch />
                </div>
            </section>
        );
    }
}