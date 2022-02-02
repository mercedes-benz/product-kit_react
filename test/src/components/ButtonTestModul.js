import React from "react";
import {
    Button
} from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default class ButtonTestModul extends React.Component {
    render() {
        return (
            <section class="component-section">
                <div class="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/design/components/buttons.html"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Button
                        </a>
                    </Button>
                    
                </div>
                <div class="component-wrapper button-component-wrapper">
                    <Button variant="contained">
                        Button
                    </Button>
                    <Button variant="text">
                        Button
                    </Button>
                    <Button variant="otulined">
                        Button
                    </Button>
                </div>
                <div class="component-wrapper button-component-wrapper">
                    <Button variant="contained" startIcon={<EditIcon/>}>
                        edit
                    </Button>
                    <Button variant="contained" startIcon={<FavoriteIcon/>}>
                        favorite
                    </Button>
                    <Button variant="contained" startIcon={<AddIcon/>}>
                        favorite
                    </Button>
                </div>
            </section>
        );
    }
}