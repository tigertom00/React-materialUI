import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import useStyles from '../styles/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Task = ({ task, onDelete, onToggle }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.task} ${task.reminder ? classes.reminder : ''}`}>
      <Typography
        variant='h6'
        className={classes.flexSb}
        onDoubleClick={() => onToggle(task.id)}
      >
        {task.text}
        <IconButton aria-label='delete'>
          <DeleteForeverIcon color='error' onClick={() => onDelete(task.id)} />
        </IconButton>
      </Typography>
      <Typography variant='subtitle2'>{task.day}</Typography>
    </div>
  );
};

export default Task;
