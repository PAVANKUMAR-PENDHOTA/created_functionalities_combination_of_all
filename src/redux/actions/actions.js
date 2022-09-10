/* eslint-disable import/no-anonymous-default-export */
import actionTypes from "../constants/actionTypes";

const usersLoadStart = () =>({
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

export default {usersLoadStart,usersLoadSuccess,usersLoadError};