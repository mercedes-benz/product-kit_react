// SPDX-License-Identifier: MIT 

import React from "react";
import {
    Button,
    Slider
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class SliderTestModul extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sliderVolume: 50,
            rangeSlider: [10, 20]
        }
    }

    handleChange = (event, newValue) => {
        this.setState({sliderVolume: newValue});
    }

    handleRangeChange = (event, newValue) => {
        this.setState({rangeSlider: newValue});
    }

    render() {
        return (
            <section class="component-section">
                <div class="section-header">
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://material.io/components/sliders"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Sliders
                        </a>
                    </Button>
                    <Button startIcon={<OpenInNewIcon/>}>
                        <a 
                            href="https://mui.com/components/slider/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Sliders in MUI
                        </a>
                    </Button>
                    
                </div>
                <div class="component-wrapper">
                    Slider
                    <Slider value={this.state.sliderVolume} onChange={this.handleChange} valueLabelDisplay="auto"/>
                    <Slider value={this.state.sliderVolume} onChange={this.handleChange} valueLabelDisplay="on"/>
                    <Slider size="small" value={this.state.sliderVolume} onChange={this.handleChange} valueLabelDisplay="auto"/>
                    <Slider color="secondary" value={this.state.sliderVolume} onChange={this.handleChange} valueLabelDisplay="auto"/>
                    <Slider step={10} marks value={this.state.sliderVolume} onChange={this.handleChange} valueLabelDisplay="auto"/>
                    <Slider step={10} marks={[{value: 0,label: 'Label 1'},{value: 10,label: 'Label 2'},{value: 50,label: 'Label 3'}]} value={this.state.sliderVolume} onChange={this.handleChange} valueLabelDisplay="auto"/>
                    <Slider disabled value={this.state.sliderVolume} onChange={this.handleChange} valueLabelDisplay="auto"/>
                    Rang Slider
                    <Slider value={this.state.rangeSlider} onChange={this.handleRangeChange} valueLabelDisplay="auto"/>
                    <Slider disabled value={this.state.rangeSlider} onChange={this.handleRangeChange} valueLabelDisplay="auto"/>
                </div>
            </section>
        );
    }
}