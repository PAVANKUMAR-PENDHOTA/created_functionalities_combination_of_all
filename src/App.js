/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersAsync } from "./redux/modules/reducers/thunk";

function App() {

 
    const dispatch = useDispatch();
    const {isLoading, users, errorMessage} = useSelector((state)=> state.users);
    // eslint-disable-next-line no-undef
    console.log(users);
    useEffect(()=>{
      dispatch(loadUsersAsync());
    },[])
  return (
    <div>

        <h1>Users Listing1</h1>

        {isLoading && <h4>Loading...</h4>}
        
        {users && users.map((user)=><h4 key={user.id}>{user.name}</h4>)}

        {errorMessage && <h3>{errorMessage}</h3>}


    </div>
  );
}

export default App;
