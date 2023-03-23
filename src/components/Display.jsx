import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function Display() {
    const [binary, setBinary] = useState('');
    const [decimal, setDecimal] = useState('');


    const handleConvert = ()=>{
        console.log('Converted!!');
        const decimalValue =parseInt(binary,2);
        setDecimal(decimalValue);
        // setDecimal('');

    }

    const handleChange=(e)=>{
        const inputValue = e.target.value;
        if(!isNaN(inputValue) && /^[^23456789]+$/.test(inputValue)){
            setBinary(inputValue);
        }else{
            <Alert severity="error">This is an error alert — check it out!</Alert>
        }
        // setBinary('');
    }


  return (
    <div>
      <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12} style={{padding:'20px'}}>
            <TextField id="standard-basic" label="Binary Number" variant="standard" value={binary} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} style={{padding:'20px'}}>
            <TextField id="standard-basic" variant="standard" value={decimal} />
        </Grid>
      </Grid>
        <Button variant="contained" onClick={handleConvert}>Convert</Button>
      </Container>
    </div>
  )
}

export default Display
