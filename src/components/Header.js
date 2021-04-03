import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from '../styles/styles';

const Header = (props) => {
  const classes = useStyles();
  return (
    <header>
      <Typography variant='h1' align='center' className={classes.header}>
        {props.title}
      </Typography>
    </header>
  );
};

Header.defaultProps = {
  title: 'Siljes Hår og Styling',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
