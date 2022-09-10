import actionTypes from "../../constants/actionTypes";

const initialState = {
    isLoading: false,
    employee: null,
    errorMessage: null,
}

const employeeReducer = (state = initialState, {type , payload}) => {
    switch(type){
        case actionTypes.EMPLOYEE_LOAD_START:
            return{
                ...state,
                isLoading: true,
                employee: null,
                errorMessage: null,
            };
            case actionTypes.EMPLOYEE_LOAD_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    employee:payload,
                    errorMessage:null,
                };
                case actionTypes.EMPLOYEE_LOAD_ERROR:
                    return{
                        ...state,
                        isLoading:false,
                        errorMessage: payload,
                    };
                    default:
                        return state;
    }
};
export default employeeReducer;