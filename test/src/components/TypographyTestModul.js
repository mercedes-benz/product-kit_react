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
                <div class="component-wrapper">
                    <Typography variant="h1" className="myclass">
                        The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="h2">
                        The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="h3">
                        The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="h4">
                        The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="h5">
                        The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="h6">
                        The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="subtitle1">
                        The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="subtitle2">
                        The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="body2">
                        The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="button">
                        The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="caption">
                        The quick brown fox jumps over the lazy dog
                    </Typography>
                    <br />
                    <Typography variant="overline">
                        The quick brown fox jumps over the lazy dog
                    </Typography>
                </div>
            </section>
        );
    }
}