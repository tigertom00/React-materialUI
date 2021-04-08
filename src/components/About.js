import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Card>
      <Typography variant='h2' align='center'>
        About Page
      </Typography>
      <Link to='/'>Go back</Link>
    </Card>
  );
};

export default About;
