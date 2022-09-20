/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Employees from "./components/Employees";
// import AddEmployees from "./components/AddEmployees";
import AddEdit from "./components/AddEdit";
import Photos from "./components/Photos";
import One from "./components/AddOutlet/One";
import Two from "./components/AddOutlet/Two";
import Three from "./components/AddOutlet/Three";
import Four from "./components/AddOutlet/Four";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import EditEmployees from "./components/EditEmployees";
import Grid from '@mui/material/Grid';
import SearchPosts from "./components/SearchPagination/SearchPosts";


function App() {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Router>
          <Typography
            variant="h3"
            display="block"
            color="secondary"
            sx={{ textAlign: "center" }}
          >
            New employee Details
          </Typography>

          <Stack
            direction="row"
            mb="10px"
            spacing={2}
            component="h2"
            sx={{ textDecoration: "none" }}
          >
            <Link to="/">Home</Link>
            <Link to="/addedit">Add</Link>
            <Link to="/photos">Gallery</Link>
            <Link to="/outlet">Profile</Link>
            <Link to="/posts">Posts</Link>
          </Stack>

          <Routes>
            <Route exact path="/" element={<Employees />}></Route>
            <Route exact path="/addedit" element={<AddEdit />}></Route>
            <Route exact path="/update/:id" element={<AddEdit />}></Route>
            <Route exact path="/posts" element={<SearchPosts/>}/>
           
            {/* <Grid  item xs={12} sm={4} md={4}> */}
            <Route exact path="/photos" element={<Photos/>}/>
            {/* </Grid> */}

            <Route exact path="/outlet" element={<One/>}>
                <Route exact path="/outlet/two" element={<Two/>}/>
                <Route exact path="/outlet/three" element={<Three/>}/>
                <Route exact path="/outlet/four" element={<Four/>}/>
            </Route>


          </Routes>
        </Router>
      </Box>
    </div>
  );
}

export default App;
