// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    CircularProgress
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';



export default class CircularProgressTestModul extends React.Component {
    render() {
        return (
            <section className="component-section">
                <div className="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/design/components/progress-indicators.html#circular-progress-indicators"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Circular Progress
                        </a>
                    </Button>
                </div>
                <div className="component-wrapper circular-progress-component-wrapper">
                    <CircularProgress />
                    <CircularProgress color="secondary"/>
                    <CircularProgress color="success"/>

                    <CircularProgress variant="determinate" value={50}/>
                    <CircularProgress variant="determinate" value={50} color="secondary"/>
                    <CircularProgress variant="determinate" value={50} color="success"/>
                </div>
            </section>
        );
    }
}