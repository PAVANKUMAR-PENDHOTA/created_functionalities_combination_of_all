import React, { useState } from "react";
import "./App.css";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
// import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

// const PHONE_REGEX = new RegExp(/"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gmi);
// const EMAIL_REGEX = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");


const Two = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }));

  const [age, setAge] = React.useState("");

  const dropDownChange = (event) => {
    setAge(event.target.value);
  };

  // ===material ui ====

  const [postData, setPostData] = useState({
    username: "",
    gender: "",
    date: "",
    mobile: "",
    email: "",
    password: "",
    nationality: "",
  });
  // const { username, gender, date, mobile, email, password, nationality } =
  //   postData;

  const [error, setError] = useState({});

  // const navigate = useNavigate();
  const theme = createTheme();

  // for drop Downs
  // const drops = [India,America,Australia,Nepal,China,Other];
  // console.log(drops);

  // const errors = validate(email, password);
  const validate = (username, gender, date, mobile, email, password, nationality) => {
    // let testEmail = [email]

    const errors = {};
    if (username === "") {
      errors.username = "Username Required*";
    }
    if(gender === "") {
      errors.gender = 'Gender Required'
    }
    if(date === ''){
      errors.date = 'Date of birth is mandatory'
    }
    // if(mobile.length >= 9){
      if( /^\d*\.?\d*$/.test(mobile) && mobile.length>=9){
      errors.mobile = ''  
      }else{
      errors.mobile = 'Mobile number must be 10 digits'
    }
    
    if(email === ''){
      errors.email = 'Email field is mandatory'
    }
    if(password === ''){
      errors.password = 'Password field is mandatory'
    }
    if(nationality === ''){
      errors.nationality = 'Select your correct nation'
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, gender, date, mobile, email, password, nationality } =
      postData;

    const errors = validate(username, gender, date, mobile, email, password, nationality)
    if(Object.keys(errors).length !== 0) {
      setError(errors);
      console.log({errors})
    } else {
      console.log(postData,'submitted successfully..');
      alert("successfully Registered..!!")
      setPostData(" ");
      window.location.reload(false);
    }
    
  };

    // if(username.length == 0 || gender.length==0 || date.length==0 || mobile || email || password || nationality) {
    //   // const errors = validate(username,gender, date, mobile, email, password, nationality);
      
    //     setError(true);
    //     // console.log(errors.username, "errors");
    //   } else {
    //     console.log("error occured");
    //   }
  //   function isNumber(evt) {
  //     evt = (evt) ? evt : window.event;
  //     var charCode = (evt.which) ? evt.which : evt.keyCode;
  //     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //         return false;
  //     }
  //     return true;
  // }
   
  

  return (
    <div className="details">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <HowToRegIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
              Registration
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
              control="true"
              
            >
              {/* ======== Username =========== */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                placeholder="eg: Jhon Doe"
                name="username"
                autoComplete="username"
                value={postData.username}
                onChange={(e) =>
                  setPostData({ ...postData, username: e.target.value })
                }
                autoFocus
                multiline
              />
              {error.username && error.username ? <p style={{color:'red'}}>{error.username}</p> : ""}

              {/* =======Gender======= */}
              <FormControl sx={{ float: "left" }}>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ textAlign: "left" }}
                  control="true"
                  true="true"
                >
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={postData.gender}
                  onChange={(e) =>
                    setPostData({ ...postData, gender: e.target.value })
                  }
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />  
                </RadioGroup>
              </FormControl>
              {error.gender &&  <p style={{color:'red'}}>{error.gender}</p> }

              {/* =====DOB==== */}
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="demo-customized-textbox">
                  Date of Birth
                </InputLabel>
                <BootstrapInput
                  id="demo-customized-textbox"
                  value={postData.date}
                  onChange={(e) =>
                    setPostData({ ...postData, date: e.target.value })
                  }
                  type="date"
                />
              </FormControl>

              {error.date && <p style={{color:'red'}}>{error.date}</p>}

              {/* === Mobile ==== */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Mobile Number"
                placeholder="+91 XXXXXXXXXX"
                name="mobile"
                type="number"
                // pattern="[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}"
                // onKeyPress={handlePress}   
                value={postData.mobile}
                onChange={(e) =>
                  setPostData({ ...postData, mobile: e.target.value })
                }
                autoComplete="mobile"
                autoFocus
                multiline
              />
              {error.mobile && <p style={{color:'red'}}>{error.mobile}</p>}
              {/* ======= email ======== */}
              <TextField
                sx={{ mt: 1 }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                placeholder="eg: jhondoe@gmail.com"
                autoComplete="email"
                value={postData.email}
                onChange={(e) =>
                  setPostData({ ...postData, email: e.target.value })
                }
                autoFocus
                multiline
              />
              {error.email && <p style={{color:'red'}}>{error.email}</p>}
              {/* {hasError && hasError.email ? (
                                <p style={{color:'red'}}> {hasError.email}</p>
                            ): ""} */}

              {/* ======== password ===== */}

              <FormControl variant="outlined" sx={{ mt: 1 }} fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password || postData.password}
                  // onChange={handleChange("password")}
                  onChange={(e) =>
                    setPostData({ ...postData, password: e.target.value }) ||
                    handleChange("password")
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              {error.password && error.password ? <p style={{color:'red'}}>{error.password}</p> : ""}

              {/* {hasError && hasError.password ? (
                                <p style={{color:'red'}}> {hasError.password}</p>
                            ): ""} */}
              {/* === Drop Down === */}

              <FormControl sx={{ mt: 2 }} fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Nationality
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={postData.nationality || age}
                  label="Nationality"
                  multiline
                  placeholder="select your nationality"
                  onChange={(e) =>
                    setPostData({ ...postData, nationality: e.target.value }) ||
                    dropDownChange
                  }
                >
                  <MenuItem> -- select -- </MenuItem>
                  <MenuItem value={10}>India</MenuItem>
                  <MenuItem value={20}>America</MenuItem>
                  <MenuItem value={30}>Australia</MenuItem>
                  <MenuItem value={40}>Nepal</MenuItem>
                  <MenuItem value={50}>China</MenuItem>
                  <MenuItem value={60}>Other</MenuItem>
                </Select>
              </FormControl>

              {error.nationality && <p style={{color:'red'}}>{error.nationality}</p>}

              <FormControlLabel
                sx={{ float: "left" }}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Already have an account?"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
          {/* {error && <h2 style={{ color: "red" }}>{error}</h2> } */}
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Two;
