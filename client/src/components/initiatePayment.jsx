import { useState } from "react"
import React from "react";
import { useNavigate } from "react-router-dom";

const InitiatePayment = () => {
    

    //const navigate = useNavigate(); // Initialize the hook


    // const sleep = async(ms) => {
    //     await new Promise((resolve) => setTimeout(resolve, ms));
    //   }

//     const handleRegister = async() => { // ye form se data leke service mei bhejega aur service api call krega
//         console.log("Called Handle Register");
//         let userRegistered = await RegisterService(name, email, password);
//         console.log("Got response from register service");
//         console.log(userRegistered);
//         if(!userRegistered.error){ //no error
//             if(userRegistered.status===201){
//                 alert("User Registered successfully");
//                 await sleep(4000)
//                 navigate("/login"); // Replace props.history.push
//             }
//             else if(userRegistered.status===409){
//                 alert("Email already exists");
//             }
//             else{
//                 alert(`Received status${userRegistered.status} from the server`);
//             }
//         }
//         else{ //error
//             alert("Some error occured during registration" );
//         }
        
// }
    //3 things..1. heading 2. the form 3. ek button
    //jab v html ke andar js likhenge {} ke andar likhenge
    return (
        <div> 
            <h2> Payment Initiation Page</h2>
        </div>
    )
};
export default InitiatePayment;


