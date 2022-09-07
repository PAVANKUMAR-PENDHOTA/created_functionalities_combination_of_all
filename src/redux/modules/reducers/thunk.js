import{ getAllUsers }from "../../api/users";
import actions from "../../actions/actions";

export const loadUsersAsync = () => (dispatch) => {
    dispatch(actions.usersLoadStart());

    getAllUsers()
                 .then((response)=> dispatch(actions.usersLoadSuccess(response.data)))
                 .catch((error) => dispatch(actions.usersLoadError(error.message)) );
};