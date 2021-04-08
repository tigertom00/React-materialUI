import React, { useState } from 'react';
import { Switch, createMuiTheme, ThemeProvider } from '@material-ui/core';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const themeDark = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={themeDark}>
      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
    </ThemeProvider>
  );
};

export default DarkMode;
