import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, IconButton } from '@material-ui/core';
import useStyles from '../styles/styles';
import Task from './Task';
import AddTask from './AddTask';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { green } from '@material-ui/core/colors';
const TaskTracker = () => {
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);
  const classes = useStyles();
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8000/api/testing');
    const data = await res.json();

    return data;
  };

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8000/api/testing/${id}`);
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:8000/api/testing/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/api/testing/${id}`, {
      method: 'DELETE',
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:8000/api/testing/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
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
              <IconButton
                variant='contained'
                onClick={() => setShowAddTask(!showAddTask)}
              >
                {showAddTask ? (
                  <CancelPresentationIcon color='error' fontSize='large' />
                ) : (
                  <AddBoxIcon style={{ color: green[500] }} fontSize='large' />
                )}
              </IconButton>
            </Grid>
          </Grid>
          {showAddTask && (
            <Grid item>
              {' '}
              <AddTask onAdd={addTask} key={tasks.id} />
            </Grid>
          )}
          {tasks.length > 0 ? (
            <Grid item xs>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ))}
            </Grid>
          ) : (
            'No tasks'
          )}
        </Grid>
      </Paper>
    </div>
  );
};
export default TaskTracker;
