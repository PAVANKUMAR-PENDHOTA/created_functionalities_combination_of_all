import { combineReducers } from "redux";
import usersReducer from "./reducers/reducer";

const rootReducer = () =>
    combineReducers({
        users : usersReducer,
    })
export default rootReducer;