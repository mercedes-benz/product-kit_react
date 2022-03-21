// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    CardMedia
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class CardTestModul extends React.Component {
    render() {
        return (
            <section className="component-section">
                <div className="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/components/cards"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Cards
                        </a>
                    </Button>
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://mui.com/components/cards/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Cards in MUI
                        </a>
                    </Button>
                    
                </div>
                <div className="component-wrapper">
                    <Card elevation={24}>
                        <CardHeader
                            title="This is the title of the card"
                            subheader="This is the subtitle of the card"
                        />
                        <CardMedia
                            component="img"
                            height="100"
                            image="https://upload.wikimedia.org/wikipedia/commons/c/cf/Daimler_TSS_logo.svg"
                            alt="Daimler TSS Logo - provided by Wikipedia"
                        />
                        <CardContent>
                            This is the content of the basic card
                            The picture is provided by wikipedia
                        </CardContent>
                        <CardActions>
                            <Button size="small">Action Button</Button>
                        </CardActions>
                    </Card>
                    <Card variant="outlined">
                        <CardHeader
                            title="This is the title of the card"
                            subheader="This is the subtitle of the card"
                        />
                        <CardContent>
                            This is the content of the outlined card
                        </CardContent>
                        <CardActions>
                            <Button size="small">Action Button</Button>
                        </CardActions>
                    </Card>
                </div>
            </section>
        );
    }
}