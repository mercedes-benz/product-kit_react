// SPDX-License-Identifier: MIT 

import React from "react"
import {
    Button,
    AppBar,
    IconButton,
    Toolbar
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MenuIcon from '@mui/icons-material/Menu';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SearchIcon from '@mui/icons-material/Search';

export default class TopAppBarTestModul extends React.Component {
    render() {
        return (
            <section class="component-section">
                <div class="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/design/components/app-bars-top.html"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Top App Bar
                        </a>
                    </Button>
                </div>
                <div class="component-wrapper top-bar-component-wrapper">
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton color="inherit">
                                <MenuIcon/>
                            </IconButton>
                            Headline 6
                            <IconButton color="inherit">
                                <ShareIcon/>
                            </IconButton>
                            <IconButton color="inherit">
                                <BookmarkIcon/>
                            </IconButton>
                            <IconButton color="inherit">
                                <SearchIcon/>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </div>
            </section>
        );
    }
}