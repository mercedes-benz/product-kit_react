import React from "react";
import {
    Button,
    Fab
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

export default class FABTestModul extends React.Component {
    render() {
        return (
            <section class="component-section">
                <div class="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/design/components/buttons-floating-action-button.html"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            FAB
                        </a>
                    </Button>
                </div>
                <div class="component-wrapper fab-component-wrapper">
                    <Fab variant="extended" aria-label="edit">
                        <EditIcon />
                        edit
                    </Fab>
                    <Fab color="primary" aria-label="favorite">
                        <FavoriteIcon />
                    </Fab>
                    <Fab size="small" color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </div>
            </section>
        );
    }
}