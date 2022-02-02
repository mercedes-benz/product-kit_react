import React from "react";
import {
    Button,
    Switch
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class SwitchTestModul extends React.Component {
    render() {
        return (
            <section class="component-section switch-section">
                <div class="section-header">
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
                <div class="component-wrapper switch-component-wrapper">
                    <Switch defaultChecked />
                    <Switch />
                </div>
            </section>
        );
    }
}