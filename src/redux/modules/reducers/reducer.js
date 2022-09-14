import actionTypes from "../../constants/actionTypes";

const initialState = {
    isLoading: false,
    employee: null,
    errorMessage: null,
    singleEmployee: null,
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
                    case actionTypes.EMPLOYEE_DELETE_SUCCESS:
                        return{
                            ...state,
                            isLoading:false,
                        };
                        case actionTypes.EMPLOYEE_DELETE_ERROR:
                            return{
                                ...state,
                                isLoading:false,
                                errorMessage:payload,
                            };
                        case actionTypes.EMPLOYEE_POST_START:
                            return{
                                ...state,
                                isLoading:true,
                                employee: null,
                                errorMessage:null,
                            }
                        case actionTypes.EMPLOYEE_POST_SUCCESS:
                            return{
                                ...state,
                                isLoading:false,
                                employee: payload,

                            };
                        case actionTypes.EMPLOYEE_POST_ERROR:
                            return{
                                ...state,
                                isLoading:false,
                                errorMessage: payload,
                            }
                        case actionTypes.EMPLOYEE_EDIT_START:
                            return{
                                ...state,
                                isLoading:true,
                                employee: null,
                                errorMessage: null,
                            };
                        case actionTypes.EMPLOYEE_EDIT_SUCCESS:
                            return{
                                ...state,
                                isLoading: false,
                                employee: payload,
                                errorMessage: null,
                            };
                        case actionTypes.EMPLOYEE_EDIT_ERROR:
                            return{
                                ...state,
                                isLoading: false,
                                employee: null,
                                errorMessage: payload,

                            };
                    default:
                        return state;
    }
};
export default employeeReducer;