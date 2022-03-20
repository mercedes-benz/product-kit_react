// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from '@mui/material/IconButton';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

export default class IconButtonTestModul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mute: false
        };
    }

    render() {
        return (
            <section class="component-section">
                <div class="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/design/components/buttons.html#toggle-button"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Icon Button
                        </a>
                    </Button>
                </div>
                <div class="component-wrapper icon-button-component-wrapper">
                <IconButton aria-label="mute" onClick={(event) => this.setState({mute: !this.state.mute})}>
                    {
                        this.state.mute ? 
                            <VolumeOffIcon/>
                        :
                            <VolumeUpIcon/>
                    }
                </IconButton>
                </div>
            </section>
        );
    }
}