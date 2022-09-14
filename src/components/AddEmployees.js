import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from "axios";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';


const AddEmployees = () => {
    const [name, setName] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [designation, setDesignation] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");

    const navigate = useNavigate();

    const submitHandler = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:4000/insert',{
            name : name,
            organisation : organisation,
            designation : designation,
            age : age,
            city : city,
            pincode : pincode
        });
        navigate('/');
    }
  return (
    <div>
      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
       <Typography variant="h3" gutterBottom component="div">
       Add Employee
      </Typography>

      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    
    </Box>

      
    </Box>

      <form onSubmit={ submitHandler }>
        <input type='text' placeholder='name' value={ name }
                        onChange={ (e) => setName(e.target.value) }/>
        <input type='text' placeholder='organisation' value={ organisation }
                        onChange={ (e) => setOrganisation(e.target.value) }/>
        <input type='text' placeholder='designation' value={ designation }
                        onChange={ (e) => setDesignation(e.target.value) }/>
        <input type='text' placeholder='Enter Age' value={ age }
                        onChange={ (e) => setAge(e.target.value) }/>
        <input type='text' placeholder='Enter City' value={ city }
                        onChange={ (e) => setCity(e.target.value) }/>
        <input type='text' placeholder='Enter Pincode' value={ pincode }
                        onChange={ (e) => setPincode(e.target.value) }/>
        <input type='submit' value="Submit"/>
        <input type="reset" value="Reset"/>

      </form>
    </div>
  )
}

export default AddEmployees
