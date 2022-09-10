import { combineReducers } from "redux";
import employeeReducer from "./reducers/reducer";

const rootReducer = () =>
    combineReducers({
        employee : employeeReducer,
    })
export default rootReducer;