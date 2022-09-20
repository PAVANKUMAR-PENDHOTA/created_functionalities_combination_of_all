/* eslint-disable import/no-anonymous-default-export */
import actionTypes from "../constants/actionTypes";

const usersLoadStart = () => ({
  type: actionTypes.EMPLOYEE_LOAD_START,
});
const usersLoadSuccess = (employee) => ({
  type: actionTypes.EMPLOYEE_LOAD_SUCCESS,
  payload: employee,
});
const usersLoadError = (errorMessage) => ({
  type: actionTypes.EMPLOYEE_LOAD_ERROR,
  payload: errorMessage,
});

const deleteEmployeeRequest = (id) => ({
  type: actionTypes.DELETE_EMPLOYEE_REQUEST,
  payload: id,
});
const deleteEmployeeSuccess = (payload) => ({
  type: actionTypes.EMPLOYEE_DELETE_SUCCESS,
  payload: payload,
});
const deleteEmployeeError = (errorMessage) => ({
  type: actionTypes.EMPLOYEE_DELETE_ERROR,
  payload: errorMessage,
});

const employeePostStart = (data)=>({
    type: actionTypes.EMPLOYEE_POST_START,
    payload: data
});

const employeePostSuccess =(payload)=>({
    type: actionTypes.EMPLOYEE_POST_SUCCESS,
    payload:payload,
});

const employeePostError =(errorMessage)=>({
    type: actionTypes.EMPLOYEE_POST_ERROR,
    payload: errorMessage,
});

const employeeEditStart = (id, state)=>({
    type: actionTypes.EMPLOYEE_EDIT_START,
    id: id,
    state: state
});

const employeeEditSuccess = (payload)=>({
    type: actionTypes.EMPLOYEE_EDIT_SUCCESS,
    payload: payload,
});
const employeeEditError =(errorMessage)=>({
    type:actionTypes.EMPLOYEE_EDIT_ERROR,
    payload: errorMessage, 
});

const usersPhotosStart = () => ({
  type: actionTypes.PHOTOS_LOAD_START,
});
const usersPhotosSuccess = (employee) => ({
  type: actionTypes.PHOTOS_LOAD_SUCCESS,
  payload: employee,
});
const usersPhotosError = (errorMessage) => ({
  type: actionTypes.PHOTOS_LOAD_ERROR,
  payload: errorMessage,
});


const postsFetchStart = () =>({
  type:actionTypes.FETCH_POST_REQUEST, 
});
const postsFetchSuccess = (posts)=>({
  type: actionTypes.FETCH_POST_SUCCESS,
  payload: posts,
});
const postsFetchError =(errorMessage)=>({
  type: actionTypes.FETCH_POST_FAILED,
  payload: errorMessage,
});

// const sortPostsAsc = (dispatch getState)=>({
//   const { employeeReducer } = getState();
//   dispatch({ type: actions.SORT_POSTS_ASC, payload: employeeReducer.posts });
// });
const sortPostsAsc = (posts)=>({
  type:actionTypes.SORT_POSTS_ASC,
  payload: posts
});
const sortPostsDesc = (posts)=>({
  type:actionTypes.SORT_POSTS_DESC,
  payload: posts,
});

const searchPosts =(posts)=>({
  type:actionTypes.SEARCH_POSTS,
  payload: posts
})


export default {
  usersLoadStart,
  usersLoadSuccess,
  usersLoadError,

  deleteEmployeeSuccess,
  deleteEmployeeError,
  deleteEmployeeRequest,

  employeePostStart,
  employeePostSuccess,
  employeePostError,

  employeeEditStart,
  employeeEditSuccess,
  employeeEditError,

  usersPhotosStart,
  usersPhotosSuccess,
  usersPhotosError,

  postsFetchStart,
  postsFetchSuccess,
  postsFetchError,

  sortPostsAsc,
  sortPostsDesc,

  searchPosts
};
