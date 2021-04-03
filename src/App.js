import React, { useState } from 'react';
import { CssBaseline, Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import useStyles from './styles/styles';
import Theme from './styles/theme';

import Navbar from './components/Navbar';
import Header from './components/Header';
import TaskTracker from './components/TaskTracker';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Mindfull Training',
      day: 'Feb 7th at 4:45pm',
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Paper style={{ height: '100vh' }}>
          <Navbar />
          <Header title={'Siljes Hår og Styling'} />
          {tasks.length > 0 ? (
            <TaskTracker
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ) : (
            'No tasks to show'
          )}
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default App;
