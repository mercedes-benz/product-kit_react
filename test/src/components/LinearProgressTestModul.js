import React from "react";
import {
    Button,
    LinearProgress
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class LinearProgressTestModul extends React.Component {
    render() {
        return (
            <section class="component-section linear-progress-section">
                <div class="section-header">
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
                <div class="component-wrapper">
                    <div role="progressbar" class="mdc-linear-progress mdc-linear-progress--indeterminate">
                        
                        <LinearProgress />
                        <LinearProgress color="secondary" />
                        <LinearProgress color="success" />
                    </div>

                    <div role="progressbar" class="mdc-linear-progress">
                        <LinearProgress variant="buffer" value={0} valueBuffer={50}/>
                        <LinearProgress variant="determinate" color="secondary" value={50}/>
                        <LinearProgress variant="determinate" color="success" value={50}/>
                    </div>
                </div>
            </section>
        );
    }
}