import { useState } from "react"
import React from "react";
import RegisterService from "../services/registerService";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate(); // Initialize the hook


    const sleep = async(ms) => {
        await new Promise((resolve) => setTimeout(resolve, ms));
      }

    const handleRegister = async() => { // ye form se data leke service mei bhejega aur service api call krega
        console.log("Called Handle Register");
        let userRegistered = await RegisterService(name, email, password);
        console.log("Got response from register service");
        console.log(userRegistered);
        if(!userRegistered.error){ //no error
            if(userRegistered.status===201){
                alert("User Registered successfully");
                await sleep(4000)
                navigate("/login"); // Replace props.history.push
            }
            else if(userRegistered.status===409){
                alert("Email already exists");
            }
            else{
                alert(`Received status${userRegistered.status} from the server`);
            }
        }
        else{ //error
            alert("Some error occured during registration" );
        }
        
}
    //3 things..1. heading 2. the form 3. ek button
    //jab v html ke andar js likhenge {} ke andar likhenge
    return (
        <div> 
            <h2> User Registration</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/> 
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleRegister}>Register</button>
        </div>
    )
};
export default Register;

// import { useState } from "react";
// import React from "react";

// const Register = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleRegister = () => {
//         console.log("User Registered:", { name, email, password });
//     };

//     const handleName = (e) => {
//         setName(e.target.value)
//     }

//     return (
//         <div> 
//             <h2>User Registration</h2>
//             <label>Name</label>
//             <input 
//                 type="text" 
//                 placeholder="Name" 
//                 value={name} 
//                 onChange={handleName} 
//             /> 
//             <label>Email</label>
//             <input 
//                 type="email" 
//                 placeholder="Email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//             /> 
//             <label>Password</label>
//             <input 
//                 type="password" 
//                 placeholder="Password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//             /> 
//             <button onClick={handleRegister}>Register</button>
//         </div>
//     );
// };

// export default Register;


