import React, { useState, useEffect } from "react";
// import {CreateVpaIdService}  from "../services/userDashboardService.jsx";
import { CreateVpaIdService } from "../services/userDashboardService.jsx";

import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
//   const [userId, setUserId] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [bankName, setBankName] = useState("");
//   const [pin, setPin] = useState(0);

  const navigate = useNavigate(); // Initialize the hook

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const response = await fetch("/api/user/dashboard");
//       const data = await response.json();
//       setVpaId(data.vpaId);
//       setBalance(data.balance);
//       setTransactions(data.transactions);
//     } catch (error) {
//       console.error("Error fetching data", error);
//     }
//   };

  const createVpaId = () => {
    navigate("/createVpa");
  };

//   const addBalance = async () => {
//     if (!amount || isNaN(amount) || amount <= 0) {
//       alert("Enter a valid amount");
//       return;
//     }

//     try {
//       const response = await fetch("/api/user/add-balance", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: parseFloat(amount) }),
//       });
//       const data = await response.json();
//       setBalance(data.newBalance);
//       setAmount("");
//     } catch (error) {
//       console.error("Error adding balance", error);
//     }
//   };

  return (
    <div style={{ width: "300px", margin: "20px auto", textAlign: "center", padding: "10px", border: "1px solid black", borderRadius: "8px" }}>
      <h2>User Dashboard</h2>

      {/* {vpaId ? (
        <p><strong>VPA ID:</strong> {vpaId}</p>
      ) : ( */}
        <button onClick={createVpaId}>Create VPA ID</button>
      {/* )} */}

      {/* <p><strong>Balance:</strong> ₹{balance}</p>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        style={{ padding: "5px", margin: "5px", width: "80%" }}
      />
      <button onClick={addBalance}>Add Balance</button> */}

      {/* <h3>Transactions</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {transactions.length > 0 ? transactions.map((tx, index) => (
          <li key={index} style={{ padding: "5px", borderBottom: "1px solid gray" }}>
            {tx.date} - {tx.type} - ₹{tx.amount}
          </li>
        )) : <p>No transactions yet</p>}
      </ul> */}
    </div>
  );
};

export default UserDashboard;
