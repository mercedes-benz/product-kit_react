// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItemAvatar,
    Avatar,
    ListSubheader
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class ListTestModul extends React.Component {
    render() {
        return (
            <section className="component-section">
                <div className="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/components/lists"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Lists
                        </a>
                    </Button>
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://mui.com/components/lists/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Lists in MUI
                        </a>
                    </Button>
                </div>
                <div className="component-wrapper">
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    J
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemIcon>
                                <OpenInNewIcon />
                            </ListItemIcon>
                            <ListItemText primary="This is some text and stuff" secondary="This is secondary text"/>
                            <ListItemButton>Test button</ListItemButton>
                        </ListItem>
                        <ListSubheader>
                            This is a sub header
                        </ListSubheader>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    J
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemIcon>
                                <OpenInNewIcon />
                            </ListItemIcon>
                            <ListItemText primary="This is some text and stuff" secondary="This is secondary text"/>
                            <ListItemButton>Test button</ListItemButton>
                        </ListItem>
                    </List>
                </div>
            </section>
        );
    }
}