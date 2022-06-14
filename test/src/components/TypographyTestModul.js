// SPDX-License-Identifier: MIT 

import React from "react";

import {
    Button,
    Typography
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class TypographyTestModul extends React.Component {
    render() {
        return (
            <section className="component-section">
                <div className="section-header">
                    <Button startIcon={<OpenInNewIcon />}>
                        <a
                            href="https://mui.com/components/typography/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Typography in MUI
                        </a>
                    </Button>

                </div>
                <div className="component-wrapper">
                    <Typography variant="h1">
                        Headline1 - The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="h2">
                        Headline2 - The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="h3">
                        Headline3 - The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="h4">
                        Headline4 - The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="h5">
                        Headline5 - The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="h6">
                        Headline6 - The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="subtitle1">
                        Subtitle1 - The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="subtitle2">
                        Subtitle2 - The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        Body1 - The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="body2">
                        Body2 - The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="button">
                        Button - The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="caption">
                        Caption - The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="overline">
                        Overline - The quick brown fox jumps over the lazy dog
                    </Typography>
                </div>
            </section>
        );
    }
}