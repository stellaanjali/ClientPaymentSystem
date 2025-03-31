import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register"; // Case-sensitive, ensure correct path
import Login from "./components/login";
import InitiatePayment from "./components/initiatePayment";
import UserDashboard from "./components/userDashboard";
import CreateVpa from "./components/createVpa";

const AppRoutes = () => (
    <Router>
        <Routes>  
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/initiatePayment" element={<InitiatePayment/>}/>
            <Route path="/userDashboard" element={<UserDashboard/>}/>
            <Route path="/createVpa" element={<CreateVpa/>}/>
            
        </Routes>
    </Router>
);

export default AppRoutes;


