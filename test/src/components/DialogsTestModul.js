import React from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class DialogsTestModul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alertOpen: false,
            fullScreen: false

        }
    }

    handleOpen = (target) => (event) =>  {
        let state = this.state;
        state[target] = true;
        this.setState(state);
    }

    handleClose = (target) => (event) => {
        let state = this.state;
        state[target] = false;
        this.setState(state);
    }

    render() {
        return (
            <section class="component-section">
                <div class="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/components/dialogs"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Dialog
                        </a>
                    </Button>
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://mui.com/components/dialogs/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Dialog in MUI
                        </a>
                    </Button>
                    
                </div>
                <div class="component-wrapper">
                    <Button variant="outlined" onClick={this.handleOpen("alertOpen")}>
                        Open Alert dialog
                    </Button>
                    <Dialog
                        open={this.state.alertOpen}
                        onClose={this.handleClose("alertOpen")}
                    >
                        <DialogTitle>
                            This is the title
                        </DialogTitle>
                        <DialogContent>
                            This is the content of the dialog and stuff
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose("alertOpen")}>
                                Actions!
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Button variant="outlined" onClick={this.handleOpen("fullScreen")}>
                        Open Fullscreen dialog
                    </Button>
                    <Dialog
                        open={this.state.fullScreen}
                        onClose={this.handleClose("fullScreen")}
                        fullScreen
                    >
                        <DialogTitle>
                            This is the title
                        </DialogTitle>
                        <DialogContent>
                            This is the content of the dialog and stuff
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose("fullScreen")}>
                                Actions!
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </section>
        );
    }
}