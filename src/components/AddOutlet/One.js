import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";

const One = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Stack
      // direction="row"
      // mb="10px"
      // spacing={2}
      // component="h2"
      // className="topnav"
      // sx={{ textDecoration: "none" }}
      >
        <div className="topnav">
          <Link className="link" to="/home">
            Home
          </Link>
          <Link className="link" to="/addedit">
            Add
          </Link>
          <Link className="link" to="/photos">
            Gallery
          </Link>
          <Link className="link" to="/outlet">
            Profile
          </Link>
          <Link className="link" to="/posts">
            Posts
          </Link>
          <Link className="link" to="/">
            Logout
          </Link>
        </div>
      </Stack>
      <div className="row">
        <div className="column1">
          <Link
            to="/outlet/two"
            className={pathname === "/outlet/two" ? "activeBtn" : "navBtn"}
          >
            Registration
          </Link>
          <Link
            to="/outlet/three"
            className={pathname === "/outlet/three" ? "activeBtn" : "navBtn"}
          >
            Three
          </Link>
          <Link
            to="/outlet/four"
            className={pathname === "/outlet/four" ? "activeBtn" : "navBtn"}
          >
            Four
          </Link>
        </div>
        <div className="column2">
          <Outlet />
        </div>
      </div>
      <div className="footer">
        <div className="row-footer">
          <div className="column-footer">
            <p>lorem ipsum dollor sit emmit</p>
            <p>lorem ipsum dollor sit emmit</p>

          </div>
          <div className="column-footer">
          <p>lorem ipsum dollor sit emmit</p>
          <p>lorem ipsum dollor sit emmit</p>

          </div>
          <div className="column-footer">
          <p>lorem ipsum dollor sit emmit</p>
          <p>lorem ipsum dollor sit emmit</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default One;
