/* eslint-disable no-undef */
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";
import {
  asyncEditEmployee,
  asyncPostEmployee,
} from "../redux/modules/reducers/thunk";

const initialState = {
  name: "",
  organisation: "",
  designation: "",
  age: "",
  city: "",
  pincode: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { name, organisation, designation, age, city, pincode } = state;
  // console.log(state,"====State checking..");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:4000/employee/${id}`)
        .then((resp) => setState({ ...resp.data[0] }));
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !organisation || !designation || !age || !city || !pincode) {
      window.confirm("Please provide value into each input field");
    } else {
      if (!id) {
        dispatch(asyncPostEmployee(state));
      } else dispatch(asyncEditEmployee(id, state));
      setTimeout(() => navigate("/"), 500);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
        }}
      >
        {id ? (
          // "Update" : "Save"}
          <Typography variant="h3" gutterBottom component="div">
            Update Employee
          </Typography>
        ) : (
          <Typography variant="h3" gutterBottom component="div">
            Add Employee
          </Typography>
        )}

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "115ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={submitHandler}
        >
          <TextField
            fullWidth
            label="Enter Name"
            type="text"
            name="name"
            id="name"
            value={name || " "}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Organisation"
            type="text"
            name="organisation"
            id="organisation"
            value={organisation || ""}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Designation"
            type="text"
            name="designation"
            id="designation"
            value={designation || ""}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Enter Age"
            type="text"
            name="age"
            id="age"
            value={age || ""}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Enter City"
            type="text"
            name="city"
            id="city"
            value={city || ""}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Enter Pincode"
            type="text"
            name="pincode"
            id="pincode"
            value={pincode || ""}
            onChange={handleInputChange}
          />
          <TextField type="submit" value={id ? "Update" : "Save"} />
          <TextField type="button" value="Go Back" onClick={() => goBack()} />
        </Box>
      </Box>
    </div>
  );
};

export default AddEdit;
