import React, { Component } from 'react';
import SearchFilter from './SearchFilter';
import "./App.css";

import { Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import MySlider from './components/slider/slider';

import CategoryCheckboxes from './components/categorycheckboxes/categorycheckboxes';

import JobList from './components/joblist/joblist';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));



function JobSearch() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    return (
      <div style={{ "backgroundColor":"#faf7f8"}}>
        <Container fixed maxWidth="lg" style={{"backgroundColor":"#FDF5F8"}}>
          <h1 style={{"backgroundColor":"#28282A","color":"#E74E66"}}>Search Jobs</h1>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <Paper className={classes.paper}>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Search with keyword" />
                    <IconButton edge="end" aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </form>
                </Paper>
              </Grid>
              <Grid item xs={7}>
                <Paper className={classes.paper}>
                  <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                    <Button>salary:high to low</Button>
                    <Button variant="contained">distance:low to high</Button>
                    <Button>Date:newest first</Button>
                  </ButtonGroup>
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <Paper className={classes.paper}>
                  <MySlider/>
                  <CategoryCheckboxes/>
                </Paper>
              </Grid>
              <Grid item xs={7}>
                <Paper className={classes.paper} style={{'height':'740px'}}>
                  <div className={classes.demo}>
                    <JobList/>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    );
}

export default JobSearch;