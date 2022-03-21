// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    Link
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class LinkTestModul extends React.Component {
    render() {
        return (
            <section className="component-section">
                <div className="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://mui.com/components/links/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Link in MUI
                        </a>
                    </Button>
                    
                </div>
                <div className="component-wrapper">
                    <Link href="#" underline="none">
                        never underline
                    </Link>
                    <Link href="#" underline="hover">
                        underline on hover
                    </Link>
                    <Link href="#" underline="always">
                        always underlined
                    </Link>
                </div>
            </section>
        );
    }
}