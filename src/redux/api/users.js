import axios from 'axios';

export const getAllUsers = async() =>{
    // const base_url = "https://jsonplaceholder.typicode.com"
    const base_url = "http://localhost:4000"
    
    return await axios({
        method: "GET",
        url: `${base_url}/employee`,
        // responseType: "json",
        // headers: {
        //     "content-type": "application/json",
        // },
    });
};  