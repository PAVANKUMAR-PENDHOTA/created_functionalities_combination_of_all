import actionTypes from "../../constants/actionTypes";

const initialState = {
    isLoading: false,
    employee: null,
    errorMessage: null,
    photos: null,
    posts: [],
	searchResults: [],
	page: 1,
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
                            case actionTypes.PHOTOS_LOAD_START:
                                return{
                                    ...state,
                                    isLoading: true,
                                    photos: null,
                                    errorMessage: null,
                                };
                                case actionTypes.PHOTOS_LOAD_SUCCESS:
                                    return{
                                        ...state,
                                        isLoading:false,
                                        photos:payload,
                                        errorMessage:null,
                                    };
                                    case actionTypes.PHOTOS_LOAD_ERROR:
                                        return{
                                            ...state,
                                            isLoading:false,
                                            errorMessage: payload,
                                        };

                                        case actionTypes.FETCH_POST_REQUEST:
                                            return {
                                                ...state,
                                                isLoading: true,
                                            };
                                        case actionTypes.FETCH_POST_SUCCESS:
                                            return {
                                                ...state,
                                                isLoading: false,
                                                posts: payload,
                                                searchResults: payload,
                                            };
                                        case actionTypes.FETCH_POST_FAILED:
                                            return {
                                                ...state,
                                                isLoading: false,
                                                errorMessage: payload,
                                            };
                                        case actionTypes.SORT_POSTS_ASC:
                                           const sortAsc = type.payload.sort((a, b) => (a.title < b.title ? 1 : a.title > b.title ? -1 : 0));
                                            return {
                                                ...state,
                                                posts: sortAsc,
                                            };
                                        case actionTypes.SORT_POSTS_DESC:
                                            const sortDesc = type.payload.sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0));
                                            return {
                                                ...state,
                                                posts: sortDesc,
                                            };
                                        case actionTypes.SEARCH_POSTS:
                                            return {
                                                ...state,
                                                posts: type.payload,    
                                                page: 1
                                            };
                                     default:
                                         return state;
    }
};
export default employeeReducer;