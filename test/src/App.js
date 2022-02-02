import './App.css';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "product_kit_react";
import ButtonTestModul from './components/ButtonTestModul';
import DrawerTestModul from './components/DrawerTestModul';
import TopAppBarTestModul from "./components/TopAppBarTestModul";
import MenuTestModul from "./components/MenuTestModul";
import LinearProgressTestModul from "./components/LinearProgressTestModul";
import CircularProgressTestModul from "./components/CircularProgressTestModul";
import SwitchTestModul from "./components/SwitchTestModul";
import RadioButtonTestModul from "./components/RadioButtonTestModul";
import CheckBoxTestModul from "./components/CheckBoxTestModul";
import IconButtonTestModul from "./components/IconButtonTestModul";
import ChipsTestModul from "./components/ChipsTestModul";
import SelectTestModul from "./components/SelectTestModul";
import FABTestModul from "./components/FABTestModul";
import TextInputTestModul from "./components/TextInputTestModul";


class App extends React.Component{
  render() {
    return (
        <ThemeProvider theme={theme}>
            <ButtonTestModul/>
            <TopAppBarTestModul/>
            <DrawerTestModul/>
            <MenuTestModul/>
            <LinearProgressTestModul/>
            <CircularProgressTestModul/>
            <SwitchTestModul/>
            <RadioButtonTestModul/>
            <CheckBoxTestModul/>
            <IconButtonTestModul/>
            <ChipsTestModul/>
            <SelectTestModul/>
            <FABTestModul/>
            <TextInputTestModul/>
        </ThemeProvider>
      );
  }
}

export default App;
