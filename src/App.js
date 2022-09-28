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
import Login from "./components/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Registration from "./components/Sidebar/Registration";


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

         

          <Routes>
          <Route exact path="/" element={<Login/>}></Route>
            <Route exact path="/Home" element={<Employees />}></Route>
            <Route exact path="/addedit" element={<AddEdit />}></Route>
            <Route exact path="/update/:id" element={<AddEdit />}></Route>
            <Route exact path="/posts" element={<SearchPosts/>}/>
            <Route exact path="/sidebar" element={<Sidebar/>}/>
             
           
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
