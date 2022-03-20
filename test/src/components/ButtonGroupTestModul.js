// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    ButtonGroup,
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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
                <div class="component-wrapper">
                    <ButtonGroup
                        variant="contained"
                        color="error"
                    >
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <ButtonGroup
                        variant="outlined"
                        size="small"
                        color="secondary"
                    >
                        <Button>Small One</Button>
                        <Button>Small Two</Button>
                        <Button>Small Three</Button>
                    </ButtonGroup>
                    <ButtonGroup
                        variant="text"
                        size="large"
                    >
                        <Button>Large One</Button>
                        <Button>Large Two</Button>
                        <Button>Large Three</Button>
                    </ButtonGroup>

                    <ButtonGroup
                        orientation="vertical"
                        variant="contained"
                        color="tertiary"
                    >
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <ButtonGroup
                        variant="outlined"
                        orientation="vertical"
                        size="small"
                        color="secondary"
                    >
                        <Button>Small One</Button>
                        <Button>Small Two</Button>
                        <Button>Small Three</Button>
                    </ButtonGroup>
                    <ButtonGroup
                        variant="text"
                        orientation="vertical"
                        size="large"
                    >
                        <Button>Large One</Button>
                        <Button>Large Two</Button>
                        <Button>Large Three</Button>
                    </ButtonGroup>
                </div>
            </section>
        );
    }
}