import React from "react";
import axios from "axios";
const RegisterService = async (name, email, password) => {
    try {
        let registerRequest = {
            "name" : name,
            "email" : email,
            "password" : password
        };
         let registerResponse = await axios.post("http://localhost:8080/register", registerRequest) //first argument will be the end point that we will hit..second, the data that it expects
         console.log("Register Response:");
         console.log(registerResponse);
         let response = {
            data : registerResponse.data,
            status : registerResponse.status,
            error : null
         };
         return response;
    } catch (error) {
        let response = {
            data : null,
            error : error
         };
         return response;
    }
}
export default RegisterService;