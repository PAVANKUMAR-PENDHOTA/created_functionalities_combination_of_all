import { combineReducers } from "redux";
import employeeReducer from "./reducers/reducer";

const rootReducer = () =>
    combineReducers({
        employee : employeeReducer,
        photos : employeeReducer,
        posts : employeeReducer,
    })
export default rootReducer;