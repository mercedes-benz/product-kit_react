// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    LinearProgress
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class LinearProgressTestModul extends React.Component {
    render() {
        return (
            <section className="component-section linear-progress-section">
                <div className="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/design/components/progress-indicators.html#linear-progress-indicators"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Linear Progress
                        </a>
                    </Button>
                </div>
                <div className="component-wrapper">
                    <div role="progressbar" className="mdc-linear-progress mdc-linear-progress--indeterminate">
                        
                        <LinearProgress />
                        <LinearProgress color="secondary" />
                        <LinearProgress color="success" />
                    </div>

                    <div role="progressbar" className="mdc-linear-progress">
                        <LinearProgress variant="buffer" value={0} valueBuffer={50}/>
                        <LinearProgress variant="determinate" color="secondary" value={50}/>
                        <LinearProgress variant="determinate" color="success" value={50}/>
                    </div>
                </div>
            </section>
        );
    }
}