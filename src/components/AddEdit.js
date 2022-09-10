import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/employee/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !organisation || !designation || !age || !city || !pincode) {
      window.confirm("Please provide value into each input field");
    } else {
      if (!id) {
        axios
          .post("http://localhost:4000/insert", {
            name: name,
            organisation: organisation,
            designation: designation,
            age: age,
            city: city,
            pincode: pincode,
          })
          .then(() => {
            setState({
              name: "",
              organisation: "",
              designation: "",
              age: "",
              city: "",
              pincode: "",
            });
          })
          .catch((err) => window.error(err.response.data));
        window.confirm("Contact Added Successfully");
      } else {
        axios
          .put(`http://localhost:4000/update/${id}`, {
            name,
            organisation,
            designation,
            age,    
            city,
            pincode,
          })
          .then(() => {
            setState({
              name: "",
              organisation: "",
              designation: "",
              age: "",
              city: "",
              pincode: "",
            });
          })
          .catch((err) => console.log(err.response.data));
        console.log("Contact Updated Successfully");
      }
      setTimeout(() => navigate("/"), 500);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter name"
          name="name"
          id="name"
          value={name || " "}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="organisation"
          name="organisation"
          id="organisation"
          value={organisation || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="designation"
          name="designation"
          id="designation"
          value={designation || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter Age"
          name="age"
          id="age"
          value={age || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter City"
          name="city"
          id="city"
          value={city || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter Pincode"
          name="pincode"
          id="pincode"
          value={pincode || ""}
          onChange={handleInputChange}
        />
        <input type="submit" value={id ? "Update" : "Save"} />
        {/* <input type="reset" value="Reset"/> */}
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
