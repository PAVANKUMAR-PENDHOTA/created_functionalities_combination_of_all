/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadUsersAsync,
  asyncDeleteEmployee,
} from "../redux/modules/reducers/thunk";
// import { useNavigate } from 'react-router-dom';

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import axios from 'axios';
// import { getAllUsers } from '../redux/api/users';
import { Link, useNavigate } from "react-router-dom";

const Employees = () => {



  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, employee, errorMessage } = useSelector(
    (state) => state.employee
  );
  //   console.log(employee);
  useEffect(() => {
    dispatch(loadUsersAsync());
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const deleteHandler = async (id) => {
    if (
      window.confirm(
        "Are you sure that you wanted to delete the Employee record"
      )
    ) {
      dispatch(asyncDeleteEmployee(id));
      setTimeout(() => {
        dispatch(loadUsersAsync());
        // window.location.reload(false);
      }, 100);
    }
  };

  

  return (
    <div>
       <Stack
            direction="row"
            mb="10px"
            spacing={2}
            component="h2"
            sx={{ textDecoration: "none" }}
          >
            
            <Link to="/home">Home</Link>
            <Link to="/addedit">Add</Link>
            <Link to="/photos">Gallery</Link>
            <Link to="/outlet">Profile</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/sidebar">Sidebar</Link>
            <Link to="/">Logout</Link>
          </Stack>

      {isLoading && <h4>Loading...</h4>}

      {errorMessage && <h3 style={{ color: "red" }}>{errorMessage}</h3>}

      <Stack direction="row" alignItems="center" mb="10px" spacing={2}>
        <Button
          variant="contained"
          component="label"
          m="2"
          onClick={() => navigate("/addedit")}
          sx={{ marginLeft: "90%" }}
        >
          Add Employee
        </Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">NAME</StyledTableCell>
              <StyledTableCell align="right">ORGANISATION</StyledTableCell>
              <StyledTableCell align="right">DESIGNATION</StyledTableCell>
              <StyledTableCell align="right">AGE</StyledTableCell>
              <StyledTableCell align="right">CITY</StyledTableCell>
              <StyledTableCell align="right">PINCODE</StyledTableCell>
              <StyledTableCell align="right">ACTIONS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employee &&
              employee.map((row, index) => (
                <StyledTableRow key={row.id} >
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.organisation}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.designation}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.age}</StyledTableCell>
                  <StyledTableCell align="right">{row.city}</StyledTableCell>
                  <StyledTableCell align="right">{row.pincode}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Box
                      sx={{
                        "& > :not(style)": {
                          m: 2,
                        },
                      }}
                    >
                      <Link to={`/update/${row.id}`}>
                        <EditIcon color="primary"></EditIcon>
                      </Link>
                      <DeleteIcon
                        sx={{ color: pink[500], marginBottom: "20px" }}
                        onClick={() => deleteHandler(row.id)}
                      ></DeleteIcon>
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Employees;
