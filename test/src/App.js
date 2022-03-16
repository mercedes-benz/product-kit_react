import './App.css';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./style/index";
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
import AccordionTestModul from "./components/AccordionTestModul";
import ButtonGroupTestModul from "./components/ButtonGroupTestModul";
import CardTestModul from "./components/CardTestModul";
import DialogsTestModul from "./components/DialogsTestModul";
import DividerTestModul from "./components/DividerTestModul";
import LinkTestModul from "./components/LinkTestModul";
import ListTestModul from "./components/ListTestModul";
import PaginationTestModul from "./components/PaginationTestModul";
import SliderTestModul from "./components/SliderTestModul";
import SnackbarTestModul from "./components/SnackbarTestModul";
import TableTestModul from "./components/TableTestModul";
import TabsTestModul from "./components/TabsTestModul";
import ToggleButtonTestModul from "./components/ToggleButtonTestModul";
import TooltipTestModul from "./components/TooltipTestModul";
import TypographyTestModul from "./components/TypographyTestModul";


class App extends React.Component{
  render() {
    return (
        <ThemeProvider theme={theme}>
            <AccordionTestModul/>
            <ButtonGroupTestModul/>
            <ButtonTestModul/>
            <CardTestModul/>
            <CheckBoxTestModul/>
            <ChipsTestModul/>
            <CircularProgressTestModul/>
            <DialogsTestModul/>
            <DividerTestModul/>
            <DrawerTestModul/>
            <FABTestModul/>
            <IconButtonTestModul/>
            <LinearProgressTestModul/>
            <LinkTestModul/>
            <ListTestModul/>
            <MenuTestModul/>
            <PaginationTestModul/>
            <RadioButtonTestModul/>
            <SelectTestModul/>
            <SliderTestModul/>
            <SnackbarTestModul/>
            <SwitchTestModul/>
            <TableTestModul/>
            <TabsTestModul/>
            <TextInputTestModul/>
            <ToggleButtonTestModul/>
            <TooltipTestModul/>
            <TopAppBarTestModul/>
            <TypographyTestModul/>
        </ThemeProvider>
      );
  }
}

export default App;
