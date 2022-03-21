// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    Snackbar,
    Alert
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class SnackbarTestModul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openAlert: false,
            severity: "error",
            vertical: "top",
            horizontal: "center"
        }
    }

    handleClick = (event) => {
        this.setState({open: true});
    }

    handleClose = (event) => {
        this.setState({open: false});
    }
    
    handleAlertClose = (event) => {
        this.setState({openAlert: false});
    }

    handleAlertClick = (selectedSeverity) => (event) => {
        this.setState({severity: selectedSeverity, openAlert: true});
    }

    handleDirectionClick = (verticalOrientation, horizontalOrientation) => (event) => {
        this.setState({horizontal: horizontalOrientation, vertical: verticalOrientation, openAlert: true})
    }

    render() {
        return (
            <section className="component-section">
                <div className="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/components/snackbars"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Snackbar
                        </a>
                    </Button>
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://mui.com/components/snackbars/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Snackbar in MUI
                        </a>
                    </Button>
                    
                </div>
                <div className="component-wrapper">
                    <Button onClick={this.handleClick}>Open Default</Button>
                    <Snackbar
                        open={this.state.open}
                        autoHideDuration={5000}
                        onClose={this.handleClose}
                        message="Default alert"
                    />
                    <Button onClick={this.handleAlertClick("error")}>Open Error</Button>
                    <Button onClick={this.handleAlertClick("warning")}>Open Warning</Button>
                    <Button onClick={this.handleAlertClick("info")}>Open Info</Button>
                    <Button onClick={this.handleAlertClick("success")}>Open Success</Button>
                    <Button onClick={this.handleDirectionClick("top", "right")}>Open Top Right</Button>
                    <Button onClick={this.handleDirectionClick("top", "center")}>Open Top Center</Button>
                    <Button onClick={this.handleDirectionClick("top", "left")}>Open Top Left</Button>
                    <Button onClick={this.handleDirectionClick("bottom", "right")}>Open Bottom Right</Button>
                    <Button onClick={this.handleDirectionClick("bottom", "center")}>Open Bottom Center</Button>
                    <Button onClick={this.handleDirectionClick("bottom", "left")}>Open Bottom Left</Button>
                    <Snackbar
                        open={this.state.openAlert}
                        anchorOrigin={{ vertical: this.state.vertical, horizontal: this.state.horizontal }}
                        autoHideDuration={5000}
                        onClose={this.handleAlertClose}
                    >
                        <Alert severity={this.state.severity}>
                            This is an alert
                        </Alert>
                    </Snackbar>

                </div>
            </section>
        );
    }
}