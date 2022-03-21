// SPDX-License-Identifier: MIT 

import React from "react"
import {
    Button,
    AppBar,
    IconButton,
    Typography,
    Toolbar
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 0,
        height: "inherit"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));


export default function ButtonAppBar() {
    const classes = useStyles();
        return (
            <section class="component-section">
                <div className={classes.root}>
                    <AppBar position="sticky">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Product Kit React
                            </Typography>
                            <Button color="inherit">Darkmode</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </section>
        );
}