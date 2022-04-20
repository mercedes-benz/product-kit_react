// SPDX-License-Identifier: MIT 

import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from "@mui/material/Box";
import { scaledSpacing } from '@daimler/productkit-react';

export default function CircularProgressTestModul() {
    return (
        <Box sx={{ ...scaledSpacing("m", "xxl") }} >
            <div className="section-header">
                <Button startIcon={<OpenInNewIcon />}>
                    <a
                        href="https://material.io/design/components/progress-indicators.html#circular-progress-indicators"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Circular Progress
                    </a>
                </Button>
            </div>
            <div>
                <CircularProgress />
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />

                <CircularProgress variant="determinate" value={50} />
                <CircularProgress variant="determinate" value={50} color="secondary" />
                <CircularProgress variant="determinate" value={50} color="success" />
            </div>
        </Box >
    );
}