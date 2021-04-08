import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CssBaseline, Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import Theme from './styles/theme';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import TaskTracker from './components/TaskTracker';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Paper>
          <Navbar />

          <Route
            path='/'
            exact
            render={(props) => (
              <>
                <Header title={'Siljes Hår og Styling'} />
                <TaskTracker />
              </>
            )}
          />
          <Route path='/about' component={About} />
          <Footer />
        </Paper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
