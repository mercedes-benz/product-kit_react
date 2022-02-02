import React from "react";
import {
    Button,
    RadioGroup,
    FormControlLabel,
    Radio
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';



export default class RadioButtonTestModul extends React.Component {
    render() {
        return (
            <section class="component-section">
                    <div class="section-header">
                        <Button startIcon={<OpenInNewIcon/>}>
                            <a 
                                href="https://material.io/design/components/selection-controls.html#radio-buttons"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Radio Button
                            </a>
                        </Button>
                    </div>
                    <div class="component-wrapper checkbox-component-wrapper">
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="test2"
                        >
                            <FormControlLabel value="test" control={<Radio />} label="" />
                            <FormControlLabel value="test2" control={<Radio />} label="" />
                        </RadioGroup>
                    </div>
                </section>
        );
    }
}