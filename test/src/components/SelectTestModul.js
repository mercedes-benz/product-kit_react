import React from "react";

import { 
    Button,
    Select,
    MenuItem,
    FormControl 
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default class SelectTestModul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testValue1: "",
            testValue2: "",
            testValue3: "",
            testValue4: "",
        }
    }

    render() {
        return (
            <div class="component-section-row">
                <section class="component-section select-component">
                    <div class="section-header">
                        <Button startIcon={<OpenInNewIcon/>}>
                            <a 
                                href="https://material.io/develop/web/components/input-controls/select-menus/"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Select
                            </a>
                        </Button>
                    </div>
                    <div class="component-wrapper">
                        <FormControl  variant="filled">
                            <Select
                                value={this.state.testValue1}
                                label="Subtitle 1/Caption"
                                onChange={(event) => this.setState({testValue1: event.target.value})}
                            >
                                <MenuItem value={""}></MenuItem>
                                <MenuItem value={10}>Body 2</MenuItem>
                                <MenuItem value={20} disabled>Body 2</MenuItem>
                                <MenuItem value={30}>Body 2</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div class="component-wrapper">
                        <FormControl error={this.state.testValue2 == ""} variant="filled">
                            <Select
                                value={this.state.testValue2}
                                label="Subtitle 1/Caption"
                                onChange={(event) => this.setState({testValue2: event.target.value})}
                            >
                                <MenuItem value={""}></MenuItem>
                                <MenuItem value={10}>Body 2</MenuItem>
                                <MenuItem value={20} disabled>Body 2</MenuItem>
                                <MenuItem value={30}>Body 2</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div class="component-wrapper">
                        <FormControl error={this.state.testValue2 == ""} variant="filled">
                            <Select
                                disabled
                                value={this.state.testValue2}
                                label="Subtitle 1/Caption"
                                onChange={(event) => this.setState({testValue2: event.target.value})}
                            >
                                <MenuItem value={""}></MenuItem>
                                <MenuItem value={10}>Body 2</MenuItem>
                                <MenuItem value={20} disabled>Body 2</MenuItem>
                                <MenuItem value={30}>Body 2</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </section>
                <section class="component-section select-component">
                    <div class="section-header">
                    </div>
                    <div class="component-wrapper">
                        <FormControl >
                            <Select
                                value={this.state.testValue3}
                                label="Subtitle 1/Caption"
                                onChange={(event) => this.setState({testValue3: event.target.value})}
                            >
                                <MenuItem value={""}></MenuItem>
                                <MenuItem value={10}>Body 2</MenuItem>
                                <MenuItem value={20} disabled>Body 2</MenuItem>
                                <MenuItem value={30}>Body 2</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div class="component-wrapper">
                        <FormControl error={this.state.testValue4 == ""}>
                            <Select
                                value={this.state.testValue4}
                                label="Subtitle 1/Caption"
                                onChange={(event) => this.setState({testValue4: event.target.value})}
                            >
                                <MenuItem value={""}></MenuItem>
                                <MenuItem value={10}>Body 2</MenuItem>
                                <MenuItem value={20} disabled>Body 2</MenuItem>
                                <MenuItem value={30}>Body 2</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div class="component-wrapper">
                        <FormControl error={this.state.testValue2 == ""}>
                            <Select
                                disabled
                                value={this.state.testValue2}
                                label="Subtitle 1/Caption"
                                onChange={(event) => this.setState({testValue2: event.target.value})}
                            >
                                <MenuItem value={""}></MenuItem>
                                <MenuItem value={10}>Body 2</MenuItem>
                                <MenuItem value={20} disabled>Body 2</MenuItem>
                                <MenuItem value={30}>Body 2</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </section>
            </div>
        );
    }
}