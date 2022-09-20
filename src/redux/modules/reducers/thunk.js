import { deleteEmployee, getAllUsers, postEmployee, editEmployee , getPhotos , fetchPosts } from "../../api/users";
import actions from "../../actions/actions";

export const loadUsersAsync = () => (dispatch) => {
  dispatch(actions.usersLoadStart());

  getAllUsers()
    .then((response) => dispatch(actions.usersLoadSuccess(response.data)))
    .catch((error) => dispatch(actions.usersLoadError(error.message)));
};

export const fetchPostsAsync = () => (dispatch) => {
  dispatch(actions.postsFetchStart());
  fetchPosts()
    .then((response)=> dispatch(actions.postsFetchSuccess(response.data)))
    .catch((error)=>dispatch(actions.postsFetchError(error.message)));

}

export const asyncDeleteEmployee = (payload) => (dispatch) => {
  dispatch(actions.deleteEmployeeRequest(payload));
  deleteEmployee(payload)
    .then((response) => dispatch(actions.deleteEmployeeSuccess(response)))
    .catch((error) => dispatch(actions.deleteEmployeeError(error)));
};

export const asyncPostEmployee = (payload) =>(dispatch)=>{
  console.log(payload)
    dispatch(actions.employeePostStart(payload));
    postEmployee(payload)
    .then((response)=> dispatch(actions.employeePostSuccess(response)))
    .catch((error)=>dispatch(actions.employeePostError(error)))

}

export const asyncEditEmployee = (id, state) => (dispatch) =>{
  console.log(id, state);
  dispatch(actions.employeeEditStart());
  editEmployee(id, state)
      .then((response)=>dispatch(actions.employeeEditSuccess(response)))
      .catch((error)=>dispatch(actions.employeeEditError(error)))
}

export const loadPhotosAsync = () => (dispatch) => {
  dispatch(actions.usersPhotosStart());

  getPhotos()
    .then((response) => dispatch(actions.usersPhotosSuccess(response.data)))
    .catch((error) => dispatch(actions.usersPhotosError(error.message)));
};

export const sortPostsAsyc = () =>(dispatch) =>{
  dispatch(actions.postsFetchStart());
  fetchPosts()
  .then((response)=> dispatch(actions.sortPostsAsc(response.posts)))
  .catch((error)=>console.log(error))
}

export const sortPostsDesync = () =>(dispatch) =>{
  dispatch(actions.postsFetchStart());
  fetchPosts()
  .then((response)=> dispatch(actions.sortPostsDesc(response.posts)))
  .catch((error)=>console.log(error))
}

export const searchPostsAsync =()=>(dispatch)=>{
  dispatch(actions.postsFetchStart());
  fetchPosts()
  .then((response)=> dispatch(actions.searchPosts(response.posts)))
  .catch((error)=> console.log(error))
}
