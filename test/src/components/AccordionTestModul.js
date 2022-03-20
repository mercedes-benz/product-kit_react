// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    AccordionActions
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default class AccordionTestModul extends React.Component {
    render() {
        return (
            <section class="component-section">
                <div class="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://mui.com/components/accordion/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Accordion in MUI
                        </a>
                    </Button>
                    
                </div>
                <div class="component-wrapper">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            Accordion
                        </AccordionSummary>
                        <AccordionDetails>
                                This is some test text
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            Accordion with Actions
                        </AccordionSummary>
                        <AccordionDetails>
                            This is some other test text
                        </AccordionDetails>
                        <AccordionActions>
                            <Button>
                                Action Button
                            </Button>
                        </AccordionActions>
                    </Accordion>
                    <Accordion disabled>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            Disabled Accordion
                        </AccordionSummary>
                    </Accordion>
                </div>
            </section>
        );
    }
}