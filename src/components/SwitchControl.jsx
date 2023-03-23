import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function SwitchControl() {
   

    function handleChange(){
        console.log("Changed!!");
        
    }
  return (
    <div>
      <FormControlLabel control={<Switch defaultChecked color="default" 
      onChange={ handleChange} />} label="Label" />
    </div>
  )
}

export default SwitchControl
