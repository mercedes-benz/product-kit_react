// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    CardMedia,
    Grid,
    Typography,
    Box
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { scaledSpacing } from '@daimler/productkit-react';


export default function CardTestModul() {
    return (
        <section className="component-section">
            <div className="section-header">
                <Button startIcon={<OpenInNewIcon />}>
                    <a
                        href="https://material.io/components/cards"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Cards
                    </a>
                </Button>
                <Button startIcon={<OpenInNewIcon />}>
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
                <Box sx={{ ...scaledSpacing("my", "xs") }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={4}>
                            <Card elevation={24} sx={{ ...scaledSpacing("pt", "xs") }}>
                                <Typography sx={{ ...scaledSpacing("ml", "xs") }} variant="overline">
                                    Overline
                                </Typography>
                                <CardHeader
                                    title="This is the title of the card"
                                    subheader="This is the subtitle of the card"
                                    sx={{ ...scaledSpacing("px", "xs") }}
                                />
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                                    alt="Landscape provided by unsplash"
                                />
                                <CardContent>
                                    This is the content of the basic card
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Action Button</Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    </Grid>
                </Box>

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
        </section >
    );
}