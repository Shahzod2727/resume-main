import React from 'react';
// import Button from '@mui/material/Button';
import { Button } from '@mui/material';
import "./Button.css"
const CustomButton = ({text,icon}) => {
  return (
    <Button className='custom_btn' endIcon={icon ? (<div className='btn_icon_container'>{icon}</div>) : null}>
      <span className='btn_txt'>{text}</span>
    </Button>
  );
};

export default CustomButton;
