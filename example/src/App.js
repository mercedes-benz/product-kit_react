import './App.css';
import React from 'react';
import {
    Checkbox
} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "product_kit_react";

class App extends React.Component{
  render() {
    return (
        <ThemeProvider theme={theme}>
            <Checkbox defaultChecked />
        </ThemeProvider>
      );
  }
}

export default App;
