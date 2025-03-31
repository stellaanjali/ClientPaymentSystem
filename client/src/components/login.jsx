import { useState } from "react"
import React from "react";
import LoginService from "../services/loginService";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate(); // Initialize the hook


    const sleep = async(ms) => {
        await new Promise((resolve) => setTimeout(resolve, ms));
      }

    const handleLogin = async() => { // ye form se data leke service mei bhejega aur service api call krega
        console.log("Called Handle Login");
        let userLogin = await LoginService(email, password);
        console.log("Got response from login service");
        console.log(userLogin);
        if(!userLogin.error){ //no error
            if(userLogin.status===200){
                alert("User Logged in successfully");
                await sleep(4000);
                navigate("/userDashboard");
            }
            else if(userLogin.status===401){
                alert("Please enter correct login credentials");
            }
            else{
                alert(`Received status${userLogin.status} from the server`);
            }
        }
        else{ //error
            alert("Some error occured during login" );
        }
        
}
    //3 things..1. heading 2. the form 3. ek button
    //jab v html ke andar js likhenge {} ke andar likhenge
    return (
        <div> 
            <h2> User Login</h2>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
};
export default Login;




