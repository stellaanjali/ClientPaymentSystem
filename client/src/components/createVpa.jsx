import { useState } from "react"
import React from "react";
import {CreateVpaIdService} from "../services/userDashboardService";
import { useNavigate } from "react-router-dom";

const CreateVpa = (props) => {
    const [userId, setUserId] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [bankName, setBankName] = useState("");
    const [pin, setPin] = useState(0);

    const navigate = useNavigate(); // Initialize the hook


    const sleep = async(ms) => {
        await new Promise((resolve) => setTimeout(resolve, ms));
      }

    const handleCreateVpa = async() => { // ye form se data leke service mei bhejega aur service api call krega
        
        let createdVpa = await CreateVpaIdService(userId, phoneNumber, bankName, pin);
        console.log("Got response from Create Vpa Service");
        console.log(createdVpa);
        if(!createdVpa.error){ //no error
            if(createdVpa.status===201){
                alert("Vpa Id created successfully");
                await sleep(4000)
                navigate("/userDashboard"); // Replace props.history.push
            }
            else if(createdVpa.status===409){
                alert("Vpa Id already exists");
            }
            else{
                alert(`Received status${createdVpa.status} from the server`);
            }
        }
        else{ //error
            alert("Some error occured during vpa id creation" );
        }
        
}
    //3 things..1. heading 2. the form 3. ek button
    //jab v html ke andar js likhenge {} ke andar likhenge
    return (
        <div> 
            <h2> Create Vpa Id</h2>
            <input type="number" placeholder="UserId" value={userId} onChange={(e) => setUserId(e.target.value)}/> 
            <input type="text" placeholder="PhoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            <input type="text" placeholder="BankName" value={bankName} onChange={(e) => setBankName(e.target.value)}/>
            <input type="number" placeholder="Pin" value={pin} onChange={(e) => setPin(e.target.value)}/>
            <button onClick={handleCreateVpa}>Create</button>
        </div>
    )
};
export default CreateVpa;

