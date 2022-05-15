// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    ButtonGroup,
    Grid,
    Box
} from "@mui/material";
import { scaledSpacing } from '@daimler/productkit-react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';

export default class ButtonGroupTestModul extends React.Component {
    render() {
        return (
            <section>
                <div>
                    <Button startIcon={<OpenInNewIcon />}>
                        <a
                            href="https://mui.com/components/button-group/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Button Group in MUI
                        </a>
                    </Button>

                </div>
                <Box sx={{ ...scaledSpacing("my", "xs") }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ ...scaledSpacing("gap", "xs") }}
                    >
                        <ButtonGroup
                            variant="contained"
                        >
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                        <ButtonGroup
                            variant="text"
                        >
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                        <ButtonGroup
                            variant="outlined"
                        >
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                    </Grid>
                </Box>
                <Box sx={{ ...scaledSpacing("my", "xs") }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ ...scaledSpacing("gap", "xs") }}
                    >
                        <ButtonGroup
                            variant="contained"
                        >
                            <Button startIcon={<EditIcon />}>Edit</Button>
                            <Button startIcon={<FavoriteIcon />}>Favorite</Button>
                            <Button startIcon={<AddIcon />}>Add</Button>
                        </ButtonGroup>
                        <ButtonGroup
                            variant="text"
                        >
                            <Button startIcon={<EditIcon />}>Edit</Button>
                            <Button startIcon={<FavoriteIcon />}>Favorite</Button>
                            <Button startIcon={<AddIcon />}>Add</Button>
                        </ButtonGroup>
                        <ButtonGroup
                            variant="outlined"
                        >
                            <Button startIcon={<EditIcon />}>Edit</Button>
                            <Button startIcon={<FavoriteIcon />}>Favorite</Button>
                            <Button startIcon={<AddIcon />}>Add</Button>
                        </ButtonGroup>
                    </Grid>
                </Box>
                <Box sx={{ ...scaledSpacing("my", "xs") }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ ...scaledSpacing("gap", "xs") }}
                    >
                        <ButtonGroup
                            variant="contained"
                            color="secondary"
                        >
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                        <ButtonGroup
                            variant="text"
                            color="secondary"
                        >
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                        <ButtonGroup
                            variant="outlined"
                            color="secondary"
                        >
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                    </Grid>
                </Box>
                <Box sx={{ ...scaledSpacing("my", "xs") }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ ...scaledSpacing("gap", "xs") }}
                    >
                        <ButtonGroup
                            variant="contained"
                            color="secondary"
                        >
                            <Button startIcon={<EditIcon />}>Edit</Button>
                            <Button startIcon={<FavoriteIcon />}>Favorite</Button>
                            <Button startIcon={<AddIcon />}>Add</Button>
                        </ButtonGroup>
                        <ButtonGroup
                            variant="text"
                            color="secondary"
                        >
                            <Button startIcon={<EditIcon />}>Edit</Button>
                            <Button startIcon={<FavoriteIcon />}>Favorite</Button>
                            <Button startIcon={<AddIcon />}>Add</Button>
                        </ButtonGroup>
                        <ButtonGroup
                            variant="outlined"
                            color="secondary"
                        >
                            <Button startIcon={<EditIcon />}>Edit</Button>
                            <Button startIcon={<FavoriteIcon />}>Favorite</Button>
                            <Button startIcon={<AddIcon />}>Add</Button>
                        </ButtonGroup>
                    </Grid>
                </Box>
            </section>
        );
    }
}