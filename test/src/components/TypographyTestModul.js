import React from "react";
import {
    Button,
    Typography
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class TypographyTestModul extends React.Component {
    render() {
        return (
            <section class="component-section">
                <div class="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://mui.com/components/typography/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Typography in MUI
                        </a>
                    </Button>
                    
                </div>
                <div class="component-wrapper">
                <Typography variant="h1">
                    h1. Heading
                </Typography>
                <Typography variant="h2">
                    h2. Heading
                </Typography>
                <Typography variant="h3">
                    h3. Heading
                </Typography>
                <Typography variant="h4">
                    h4. Heading
                </Typography>
                <Typography variant="h5">
                    h5. Heading
                </Typography>
                <Typography variant="h6">
                    h6. Heading
                </Typography>
                <Typography variant="subtitle1">
                    subtitle1
                </Typography>
                <Typography variant="subtitle2">
                    subtitle2
                </Typography>
                <Typography variant="body1">
                    Body 1 
                </Typography>
                <Typography variant="body2">
                    Body 2
                </Typography>
                <Typography variant="button">
                    Button
                </Typography>
                <Typography variant="caption">
                    Caption
                </Typography>
                <Typography variant="overline">
                    Overline
                </Typography>
                </div>
            </section>
        );
    }
}