// SPDX-License-Identifier: MIT 

import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box'
import { scaledSpacing } from '@daimler/productkit-react'

export default function ButtonTestModul() {
    return (
        <section className="component-section">
            <div className="section-header">
                <Button startIcon={<OpenInNewIcon />}>
                    <a
                        href="https://material.io/design/components/buttons.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Button
                    </a>
                </Button>
                <Button startIcon={<OpenInNewIcon />}>
                    <a
                        href="https://mui.com/components/buttons/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Button in MUI
                    </a>
                </Button>

            </div>
            <Box sx={{ ...scaledSpacing("my", "xs") }}>
                <Box sx={{ ...scaledSpacing("my", "xs") }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ ...scaledSpacing("gap", "xs") }}
                    >

                        <Button variant="contained">
                            Button
                        </Button>
                        <Button variant="text">
                            Button
                        </Button>
                        <Button variant="outlined">
                            Button
                        </Button>
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
                        <Button variant="contained" startIcon={<EditIcon />}>
                            Edit
                        </Button>
                        <Button variant="text" startIcon={<FavoriteIcon />}>
                            Favorite
                        </Button>
                        <Button variant="outlined" startIcon={<AddIcon />}>
                            Add
                        </Button>
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
                        <Button color="secondary" variant="contained">
                            Button
                        </Button>
                        <Button color="secondary" variant="text">
                            Button
                        </Button>
                        <Button color="secondary" variant="outlined">
                            Button
                        </Button>
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
                        <Button color="secondary" variant="contained" startIcon={<EditIcon />}>
                            Edit
                        </Button>
                        <Button color="secondary" variant="text" startIcon={<FavoriteIcon />}>
                            Favorite
                        </Button>
                        <Button color="secondary" variant="outlined" startIcon={<AddIcon />}>
                            Add
                        </Button>
                    </Grid>
                </Box>
            </Box>
        </section >
    );
}