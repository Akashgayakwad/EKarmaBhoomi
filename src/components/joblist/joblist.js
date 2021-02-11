import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';


import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import WorkIcon from '@material-ui/icons/Work';

import {mock_data} from './../../MOCK_DATA';

import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

// renderRow.propTypes = {
//   index: PropTypes.number.isRequired,
//   style: PropTypes.object.isRequired,
// };


function generatejoblist()
{
    return mock_data.map((item,key)=>{
      return(
        <ListItem key={key}>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.title}
            secondary={item.company_name ? item.company_name : null}
          />
          <ListItemSecondaryAction>
            <Link to={`/jobdetails/${item.id}`}>
              <IconButton edge="end" aria-label="view">
                <ArrowForwardIcon />
              </IconButton>
            </Link>
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
}


export default function JobList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList height={700} width={700} itemSize={46} itemCount={200}>
        {generatejoblist}
      </FixedSizeList>
    </div>
  );
}