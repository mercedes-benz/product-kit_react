// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button, Grid
} from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import pkStyles from "../style/styles";

export default function ButtonTestModul() {
    const pkSpacings = pkStyles()
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
            <div className={pkSpacings["my-xxs"]}>
                <div className={pkSpacings["my-xxs"]}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid itemScope>
                            <Button variant="contained">
                                Button
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button color="secondary" variant="text">
                                Button
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button color="error" variant="outlined">
                                Button
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <div className={pkSpacings["my-xxs"]}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid itemScope>
                            <Button variant="contained" startIcon={<EditIcon />}>
                                edit
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button color="secondary" variant="contained" startIcon={<FavoriteIcon />}>
                                favorite
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button color="error" variant="contained" startIcon={<AddIcon />}>
                                error
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section >
    );
}