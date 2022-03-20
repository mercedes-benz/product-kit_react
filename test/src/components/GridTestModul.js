import React from "react";

import {
  Button,
  Grid,
  Paper
} from "@mui/material";
import { styled } from '@mui/material/styles';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default class GridTestModul extends React.Component {
  render() {
    return (
      <section class="component-section">
        <div class="section-header">
          <Button startIcon={<OpenInNewIcon />}>
            <a
              href="https://mui.com/components/grid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Grids in MUI
            </a>
          </Button>

        </div>
        <div class="component-wrapper">
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Item>xs=6 md=8</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid item xs={6} md={8}>
              <Item>xs=6 md=8</Item>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}