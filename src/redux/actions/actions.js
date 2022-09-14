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

const employeeEditStart = (payload)=>({
    type: actionTypes.EMPLOYEE_EDIT_START,
    payload: payload,
});

const employeeEditSuccess = (payload)=>({
    type: actionTypes.EMPLOYEE_EDIT_SUCCESS,
    payload: payload,
});
const employeeEditError =(errorMessage)=>({
    type:actionTypes.EMPLOYEE_EDIT_ERROR,
    payload: errorMessage, 
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
  employeeEditError
};
