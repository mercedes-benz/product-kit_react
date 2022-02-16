import React from "react";
import {
    Button,
    Tooltip
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class TooltipTestModul extends React.Component {
    render() {
        return (
            <section class="component-section">
                <div class="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/components/tooltips"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Tooltips
                        </a>
                    </Button>
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://mui.com/components/tooltips/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Tooltips in MUI
                        </a>
                    </Button>
                    
                </div>
                <div class="component-wrapper">
                    <Tooltip title="Tooltip">
                        <Button>Default</Button>
                    </Tooltip>
                    <Tooltip title="Tooltip" placement="top-start">
                        <Button>Top start</Button>
                    </Tooltip>
                    <Tooltip title="Tooltip" placement="top">
                        <Button>Top</Button>
                    </Tooltip>
                    <Tooltip title="Tooltip" placement="top-end">
                        <Button>Top End</Button>
                    </Tooltip>
                    <Tooltip title="Tooltip" placement="left-start">
                        <Button>Left start</Button>
                    </Tooltip>
                    <Tooltip title="Tooltip"  placement="left">
                        <Button>left</Button>
                    </Tooltip>
                    <Tooltip title="Tooltip" placement="left-end">
                        <Button>left end</Button>
                    </Tooltip>
                    <Tooltip title="Tooltip" placement="right-start">
                        <Button>right start</Button>
                    </Tooltip>
                    <Tooltip title="Tooltip" placement="right">
                        <Button>right</Button>
                    </Tooltip>
                    <Tooltip title="Tooltip" placement="right-end">
                        <Button>right end</Button>
                    </Tooltip>
                    <Tooltip title="Tooltip" placement="bottom-start">
                        <Button>bottom start</Button>
                    </Tooltip>
                    <Tooltip title="Tooltip" placement="bottom">
                        <Button>bottom</Button>
                    </Tooltip>
                    <Tooltip title="Tooltip" placement="bottom-end">
                        <Button>bottom end</Button>
                    </Tooltip>
                    <Tooltip title="Tooltip" arrow>
                        <Button>With Arrow</Button>
                    </Tooltip>
                </div>
            </section>
        );
    }
}