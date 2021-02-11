import React, { Component } from 'react';
import "./App.css";

import { Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';

import CheckIcon from '@material-ui/icons/Check';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';


import {mock_data} from './MOCK_DATA';


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



function JobDetail(props) {

    function generatejobdetails()
    {
        
        var jobdetails = mock_data.filter((job)=>{
            if(job.id==props.match.params.id)
                return job;
        });

        console.log(jobdetails);

        if(jobdetails.length==1)
        {
            jobdetails = jobdetails[0];
            return(
                <div>
                    <Typography component="h1" variant="h5" align="right" paragraph="false">
                        Job No.- {jobdetails.id}
                    </Typography>
                    {jobdetails.assured?<VerifiedUserIcon fontSize='large' align='right'/>:<ErrorOutlineIcon fontSize='large' color='error' align='right'/>}
                    <Typography component="p" variant="overline" align="right" noWrap="false">
                        
                        {jobdetails.assured?'Assured':'Unassured'}
                    </Typography>
                    <Typography component="h1" variant="h4" align="center">
                        {jobdetails.title}
                    </Typography>
                    <Typography component="p" variant="overline" align="center" noWrap="false">
                        {jobdetails.description}
                    </Typography>
                    <Typography component="p" variant="overline" align="left" noWrap="false">
                        Education Level - {jobdetails.education_level}
                    </Typography>
                    <Typography component="p" variant="subtitle1" align="left" noWrap="false">
                       Salary-  Rs.{jobdetails.salary}/month
                    </Typography>
                    <Typography component="p" variant="overline" align="left" noWrap="false">
                       accomodation - {jobdetails.accomodation}
                    </Typography>
                    <Typography component="p" variant="overline" align="left" noWrap="false">
                       food - {jobdetails.food}
                    </Typography>
                    <Typography component="p" variant="overline" align="left" noWrap="false">
                       gender - {jobdetails.gender}
                    </Typography>
                    <Typography component="p" variant="overline" align="left" noWrap="false">
                       company email - {jobdetails.company_email}
                    </Typography>
                    <Typography component="p" variant="overline" align="left" noWrap="false">
                       company name - {jobdetails.company_name}
                    </Typography>
                    <Typography component="p" variant="overline" align="left" noWrap="false">
                       company_description - {jobdetails.company_description}
                    </Typography>
                    <Typography component="p" variant="overline" align="left" noWrap="false">
                       company rating - {jobdetails.company_rating}
                    </Typography>
                </div>
            );

        }
        else
        {

        }
        console.log(jobdetails);
    }

    const [jobid, setJobid] = React.useState(props.match.params.id);
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    return (
      <div style={{ "backgroundColor":"#faf7f8"}}>
        <Container fixed maxWidth="lg" style={{"backgroundColor":"#FDF5F8"}}>
          <h1 style={{"backgroundColor":"#28282A","color":"#E74E66"}}>Job Details</h1>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                    {/* <h2>Job Id: {props.match.params.id}</h2> */}
                        {generatejobdetails()}
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    );
}

export default JobDetail;