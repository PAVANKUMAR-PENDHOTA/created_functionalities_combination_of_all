import React from 'react';
import Posts from './Posts';
import '../../App.css';

import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const SearchPosts = () => {
  return (
    <div className='mainPosts'>
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
            <Link to="/">Logout</Link>
          </Stack>
      <Posts/>
    </div>
  )
}

export default SearchPosts;
