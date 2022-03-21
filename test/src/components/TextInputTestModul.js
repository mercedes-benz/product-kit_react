// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    TextField,
    InputAdornment
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ErrorIcon from '@mui/icons-material/Error';

export default class TextInputTestModul extends React.Component {
    render() {
        return (
            <section className="component-section">
                <div className="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/design/components/text-fields.html"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Text field
                        </a>
                    </Button>
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField 
                        label="Subtitle 1/Caption" 
                        variant="outlined" 
                        helperText="Caption"
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField
                        label="Subtitle 1/Caption"
                        type="search"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocalPhoneIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined" 
                        helperText="Caption"
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField 
                        error 
                        label="Subtitle 1/Caption" 
                        variant="outlined" 
                        defaultValue="There Is An Error"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <ErrorIcon />
                                </InputAdornment>
                            )
                        }}
                        helperText="Caption"
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField
                        label="Subtitle 1/Caption"
                        disabled
                        defaultValue="Input Text"
                        type="search"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocalPhoneIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined" 
                        helperText="Caption"
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField 
                        error 
                        disabled
                        label="Subtitle 1/Caption" 
                        variant="outlined" 
                        defaultValue="There Is An Error"
                        helperText="Caption"
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField 
                        label="Subtitle 1/Caption" 
                        variant="filled" 
                        helperText="Caption"
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField
                        label="Subtitle 1/Caption"
                        type="search"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocalPhoneIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="filled" 
                        helperText="Caption"
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField 
                        error 
                        label="Subtitle 1/Caption" 
                        variant="filled" 
                        defaultValue="There Is An Error"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <ErrorIcon />
                                </InputAdornment>
                            )
                        }}
                        helperText="Caption"
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField 
                        label="Subtitle 1/Caption" 
                        variant="filled" 
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="end">
                                    $
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    .00
                                </InputAdornment>
                            )
                        }}
                        helperText="Caption"
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField 
                        label="Subtitle 1/Caption" 
                        variant="filled" 
                        defaultValue="Input Text"
                        helperText="Caption"
                        disabled
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField 
                        label="Subtitle 1/Caption" 
                        variant="filled" 
                        helperText="Caption"
                        disabled
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField 
                        label="Caption" 
                        variant="outlined" 
                        multiline
                        rows={4}
                        defaultValue="Subtitle1"
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField 
                        label="Caption" 
                        variant="filled" 
                        multiline
                        rows={4}
                        defaultValue="Subtitle1"
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField 
                        error
                        label="Caption" 
                        variant="outlined" 
                        multiline
                        rows={4}
                        defaultValue="Subtitle1"
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField 
                        error
                        label="Caption" 
                        variant="filled" 
                        multiline
                        rows={4}
                        defaultValue="Subtitle1"
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField 
                        disabled
                        label="Caption" 
                        variant="outlined" 
                        multiline
                        rows={4}
                        defaultValue="Subtitle1"
                    />
                </div>
                <div className="component-wrapper text-field-component-wrapper">
                    <TextField 
                        disabled
                        label="Caption" 
                        variant="filled" 
                        multiline
                        rows={4}
                        defaultValue="Subtitle1"
                    />
                </div>
            </section>
        );
    }
}