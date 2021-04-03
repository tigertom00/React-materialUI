import { createMuiTheme } from '@material-ui/core';
import { green, blue, pink } from '@material-ui/core/colors';
import React, { useState } from 'react';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#C04FC4',
    },
  },
});

export default Theme;
