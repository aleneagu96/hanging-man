import React, {useState} from 'react';
import {TextField,Button} from '@mui/material';

function InitialSetup(){

    const[inputText, setInputText]=useState('');
    const[inputText2, setInputText2]=useState('');
    
    // const[isFirstStep, setIsFirstStep] = useState(true);
    
    const handleInputChange = (event) => {
        setInputText(event.target.value);
      };

      const handleInputChange2 = (event) => {
        setInputText2(event.target.value);
      };

      const handleSave = () => {
        console.log('Player 1:', inputText);
      };  

      const handleSave2 = () => {
        console.log('Player 2:', inputText2);
      };

    return(
        <div classsname="initial-setup">Hanging Man
                <div classsname="col">
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={inputText} onChange={handleInputChange} />
                    <Button variant="outlined" onClick={handleSave}>Submit</Button>
                </div>
                <div>
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={inputText2} onChange={handleInputChange2} />
                    <Button variant="outlined" onClick={handleSave2}>Submit</Button>
                </div>

 
        </div>
    )
}



export default InitialSetup;