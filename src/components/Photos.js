/* eslint-disable no-const-assign */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotosAsync } from "../redux/modules/reducers/thunk";

import PhotoList from "./PhotoList";
import Pagination from "./Pagination";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { Container, Grid } from '@mui/system';
// import { Container, AppBar, Grow, Grid } from "@material-ui/core";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const Photos = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const { photos, isLoading, errorMessage } = useSelector(
    (state) => state.photos
  );
  useEffect(() => {
    dispatch(loadPhotosAsync());
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = Math.ceil(firstPostIndex, lastPostIndex);
  console.log("currentPosts", currentPosts);
  console.log("main photos",  photos );

//   const text = photos;
//   const result = text.slice(0 , 8)
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
            <Link to="/">Logout</Link>
          </Stack>

      <h1 style={{ color: "green",textAlign:"center", marginButtom:'50px',}}>Photo Gallery</h1>

      {isLoading && <h4>Loading...</h4>}

      {errorMessage && <h3 style={{ color: "red" }}>{errorMessage}</h3>}

      {/* {photos && photos.map((row, index)=>(
        <ul key={row.id}>
            <li> {index+1} </li> <li>{row.title}</li>
        </ul>  
     ))} */}

      <Container >
        
          <Grid item xs={12} sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '20px',}} >
            {photos &&
              photos.map((row, index) => (
                <Card  
                 key={index + 1}
                    >
                 
                  <CardMedia
                    component="img"
                    height="140"
                    image={row.url}
                    alt={row.title}
                    container="true" 
                    direction="row"
                    // alignItems="stretch"
                    spacing={3}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {row.title.slice(0,8)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {row.title}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              ))}
          </Grid>
      </Container>

      {/* <div>
     <PhotoList
      photos={currentPosts}
      />
      <Pagination
      totalPosts={photos}
      postsPerPage={postsPerPage}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      />
</div> */}
    </div>
  );
};

export default Photos;
