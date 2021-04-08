import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Card align='center'>
        <Typography variant='caption' align='center'>
          Copyright &copy;2021{' '}
        </Typography>
        <Link to='/About'>About</Link>
      </Card>
    </footer>
  );
};

export default Footer;
