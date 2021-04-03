import React, { useState } from 'react';
import { Grid, Paper, Typography, Button, ButtonBase } from '@material-ui/core';
import randomColor from 'randomcolor';

import useStyles from '../styles/styles';

import Task from './Task';

const TaskTracker = ({ tasks, onDelete, onToggle }) => {
  const classes = useStyles();

  const onClick = () => {
    console.log('click');
  };
  return (
    <div className={classes.taskTracker}>
      <Paper className={classes.taskPaper}>
        <Grid container spacing={3}>
          <Grid
            container
            direction='row'
            justify='space-between'
            className={classes.taskTitleGrid}
          >
            <Grid item>
              <Typography
                gutterBottom
                variant='h4'
                className={classes.trackerTitle}
              >
                Task Tracker
              </Typography>
            </Grid>
            <Grid item>
              <Button color='primary' variant='contained' onClick={onClick}>
                Add Task
              </Button>
            </Grid>
          </Grid>

          <Grid item xs>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
              />
            ))}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default TaskTracker;
