/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Employees from "./components/Employees";
// import AddEmployees from "./components/AddEmployees";
import AddEdit from "./components/AddEdit";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import EditEmployees from "./components/EditEmployees";

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
            {/* <Link to="/edit">Edit</Link> */}
          </Stack>

          <Routes>
            <Route exact path="/" element={<Employees />}></Route>
            <Route exact path="/addedit" element={<AddEdit />}></Route>
            <Route exact path="/update/:id" element={<AddEdit />}></Route>
          </Routes>
        </Router>
      </Box>
    </div>
  );
}

export default App;
