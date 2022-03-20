// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';

export default class DrawerTestModul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    toggleDrawer= (newState) => (event) => {
        this.setState({open: newState});
    } 

    render() {
        return (
            <section class="component-section">
                <div class="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/design/components/navigation-drawer.html"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Drawer
                        </a>
                    </Button>
                </div>
                <div class="component-wrapper drawer-component-wrapper">
                    <Button onClick={this.toggleDrawer(true)}>
                        Open Drawer
                    </Button>
                    <Drawer
                        open={this.state.open}
                        onClose={this.toggleDrawer(false)}
                    >
                        Headline 6
                        <br/>
                        Body 2
                        <Divider />
                        <List>
                            {[
                                {text: "Body 2", icon: <InboxIcon/>}, 
                                {text: "Body 2", icon: <StarIcon/>},
                                {text: "Body 2", icon: <BookmarkIcon/>},
                                {text: "Body 2", icon: <SendIcon/>},
                                {text: "Body 2", icon: <DraftsIcon/>},
                            ].map((item, index) => (
                            <ListItem button key={item.text + index}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </div>
            </section>
        );
    }
}