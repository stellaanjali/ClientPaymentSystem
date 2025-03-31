import React from "react";
import axios from "axios";
const LoginService = async (email, password) => {
    try {
        let loginRequest = {
            "email" : email,
            "password" : password
        };
         let loginResponse = await axios.post("http://localhost:8080/login",loginRequest) //first argument will be the end point that we will hit..second, the data that it expects
         console.log("Login Response:");
         console.log(loginResponse);
         let response = {
            data : loginResponse.data,
            status : loginResponse.status,
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
export default LoginService;