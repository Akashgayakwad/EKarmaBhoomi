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


import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ApplicationModal from './components/applicationmodal/applicationmodal';
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
  theme:{
      spacing : 3,
  }
}));



function JobDetail(props) {

    function get_edu_level(level)
    {
        if(level==0)
            return "<10th";
        if(level==1)
            return "10th";
        if(level==2)
            return "12th";
        if(level==3)
            return "Graduation";
        if(level>=4)
            return "Post Graduation";
    }
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
                    <Typography p={20} component="h1" variant="h5" align="right" paragraph="false">
                        Job No.- {jobdetails.id}
                    </Typography>
                    
                    {jobdetails.assured?
                        <div style={{
                        display: 'flex',
                        alignItems: 'right',
                        flexWrap: 'wrap',
                        }}>
                            <VerifiedUserIcon color="secondary"/>
                            <span style={{'color':'red'}}>Assured</span>
                        </div>    
                    :<div></div>
                    };

                    <Typography component="h1" variant="h4" align="center">
                        {jobdetails.title}
                    </Typography>
                    
                    <Typography component="p" variant="overline" align="center" noWrap="false">
                        {jobdetails.description}
                    </Typography>
                    
                    <Typography component="h2" variant="subtitle1" align="left" noWrap="false">
                        Education Level - {get_edu_level(jobdetails.education_level)}
                    </Typography>

                    <Typography component="h2" variant="subtitle1" align="left" noWrap="false">
                       Salary-  Rs.{jobdetails.salary}/month
                    </Typography>

                    <div style={{
                    display: 'flex',
                    alignItems: 'right',
                    flexWrap: 'wrap',
                    }}>
                        <span>Accomodation -  </span>
                        {jobdetails.accomodation?
                        <CheckIcon color="secondary"/>
                        :<CloseIcon color="disabled"/>
                        }
                        
                        
                    </div> 

                    <div style={{
                    display: 'flex',
                    alignItems: 'right',
                    flexWrap: 'wrap',
                    }}>
                        <span>Food -  </span>
                        {jobdetails.food?
                        <CheckIcon color="secondary"/>
                        :<CloseIcon color="disabled"/>
                        }
                        
                        
                    </div> 

                    <Typography omponent="h2" variant="subtitle1" align="left" noWrap="false">
                       gender - {jobdetails.gender}
                    </Typography>
                    <Typography omponent="h2" variant="subtitle1"align="left" noWrap="false">
                       company email - {jobdetails.company_email}
                    </Typography>
                    <Typography omponent="h2" variant="subtitle1" align="left" noWrap="false">
                       company name - {jobdetails.company_name}
                    </Typography>
                    <Typography omponent="h2" variant="subtitle1" align="left" noWrap="false">
                       company_description - {jobdetails.company_description}
                    </Typography>
                    <Typography omponent="h2" variant="subtitle1" align="left" noWrap="false">
                       company rating - {jobdetails.company_rating}
                    </Typography>

                    <ApplicationModal/>
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
            <Grid item xs={1}/>
              <Grid item xs={10}>
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