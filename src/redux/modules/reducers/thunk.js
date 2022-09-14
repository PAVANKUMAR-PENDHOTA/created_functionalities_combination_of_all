import { deleteEmployee, getAllUsers, postEmployee, editEmployee } from "../../api/users";
import actions from "../../actions/actions";
// import { response } from "express";
// import { response } from "express";

export const loadUsersAsync = () => (dispatch) => {
  dispatch(actions.usersLoadStart());

  getAllUsers()
    .then((response) => dispatch(actions.usersLoadSuccess(response.data)))
    .catch((error) => dispatch(actions.usersLoadError(error.message)));
};

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

export const asyncEditEmployee = (payload) => (dispatch) =>{
  console.log(payload);
  dispatch(actions.employeeEditStart(payload));
  editEmployee(payload)
      .then((response)=>dispatch(actions.employeeEditSuccess(response)))
      .catch((error)=>dispatch(actions.employeeEditError(error)))
}