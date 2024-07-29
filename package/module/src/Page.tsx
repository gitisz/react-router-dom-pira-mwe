import { Button } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default () => {

  const navigate = useNavigate();

  const handleClick = () => {
    console.log('clicked!')
    navigate('/')
  }

  return (
    <>
      <Button
        onClick={handleClick}
      >
        Go Home
      </Button>
    </>
  );
};
