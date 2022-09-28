import React, { useState } from "react";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate} from "react-router-dom";

const Login = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [form, setForm] = useState({
         email: "",
         password: "",
        }); 
    const [error, setError]= useState({});

    // const {email, password} = form;

    const validate = (email, password) =>{
        const errors ={};
        if(email === ""){
            errors.email = "Email field is mandatory*";
        }
        if(password === ""){
            errors.password = "Password field is mandatory*";
        }
        return errors;
    };

    // const handleChange = e =>{
    //     const nextFormState = {
    //         ...form,
    //         [e.target.name]: e.target.value,
    //       };
    //       setForm(nextFormState);
         
    // };


    

    // const clickHandle = (e)=>{
    //     e.preventDefault();
    //     if(email.length>0 || password.length>0){
    //         console.log("success");
    //     }else{
    //         console.log("error");
    //     }
    // }
    // console.log(email);

    const navigate = useNavigate();
    const theme = createTheme();

    // const errors = validate(email, password);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const {email, password} = form;
        const errors = validate(email, password)
       
        if(Object.keys(errors).length !== 0){
          setError(errors);
        //   console.log("succuss", form);
          console.log("hello",{errors})
          alert("Please fill the fields")
        //   navigate('/outlet');
          
        }else{
            // setError(errors);
            navigate('/outlet');
            console.log("success");
        }

    }

   

    return (

        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={form.email}
                                onChange={(e)=> setForm({
                                    ...form, email: e.target.value
                                })}
                                // error={hasError}
                                autoFocus
                            />
                            {error.email && <p style={{color:'red'}}>{error.email}</p>}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={form.password}
                                onChange={(e)=> setForm({
                                    ...form, password: e.target.value
                                })}
                                // error={hasError}
                                autoComplete="current-password"
                            />
                             {error.password && <p style={{color:'red'}}>{error.password}</p>}
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
                    {/* {error && <h2 style={{ color: "red" }}>{error}</h2> } */}
                </Container>
            </ThemeProvider>
        </>
















        // <div sx={{
        //     position: 'absolute',
        //     left: '50%',
        //     top: '50%',
        // }}>
        //     <Box
        //         component="form"
        //         sx={{
        //             '& > :not(style)': { mt: 10, ml: 80, width: '50ch' },
        //         }}
        //         noValidate
        //         autoComplete="off"
        //     >
        //         <Typography variant="h3" color="secondary" gutterBottom>Login Form</Typography>
        //         {/* <h2 color="primary"></h2> */}
        //         <Stack spacing={2} direction="row">

        //             <TextField
        //                 label="Email"
        //                 variant="standard"
        //                 placeholder="Type Email Here.."
        //                 color="primary"
        //                 focused
        //                 onChange={(e)=>setEmail(e.target.value)}
        //                 fullWidth
        //                 value={email}
        //             />
        //         </Stack>
        //         <Stack spacing={2} direction="row">
        //             <TextField
        //                 label="Password"
        //                 variant="standard"
        //                 placeholder="Type Password Here.."
        //                 color="primary"
        //                 focused
        //                 value={password}
        //                 onChange={(e)=>setPassword(e.target.value)}
        //                 fullWidth
        //             />
        //         </Stack>
        //         <Stack spacing={2} direction="row">
        //             <Button variant="contained" onClick={clickHandle}>Login</Button>
        //         </Stack>
        //     </Box>
        // </div>
    )
}

export default Login;