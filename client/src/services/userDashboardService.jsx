import React from "react";
import axios from "axios";
// const CreateVpaIdService = async (userId, phoneNumber, bankName, pin) => {
//     try {
//         let vpaRequest = {
//             "userId" : userId,
//             "phoneNumber" : phoneNumber,
//             "bankName" : bankName,
//             "pin" : pin
//         };
//         console.log(vpaRequest);
//         console.log(vpaRequest.userId);
//         console.log(vpaRequest.phoneNumber);
//         console.log(vpaRequest.bankName);
//         console.log(vpaRequest.pin);
//          let vpaResponse = await axios.post("http://localhost:8080/createVpa", JSON.stringify(vpaRequest),  // No need to stringify
//             {
//                 headers: {
//                     "Content-Type": "application/json" , 
//                     "Accept" : "application/json" // Tell backend it's JSON
//                 }
//             }) //first argument will be the end point that we will hit..second, the data that it expects
//          console.log("Generated Vpa Id:");
//          console.log(vpaResponse);
//          let response = {
//             data : vpaResponse.data,
//             status : vpaResponse.status,
//             error : null
//          };
//          return response;
//     } catch (error) {
//         let response = {
//             data : null,
//             error : error
//          };
//          return response;
//     }
    
// }



const CreateVpaIdService = async (userId, phoneNumber, bankName, pin) => {
    try {
        const vpaRequest = {
            userId: userId,
            phoneNumber: phoneNumber.toString(),
            bankName: bankName,
            pin: pin.toString() // Ensure pin is string if backend expects string
        };

        console.log("Sending request with data:", vpaRequest);

        const response = await axios.post(
            "http://localhost:8080/createVpa",
            vpaRequest,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }
        );

        console.log("Received response:", response.data);
        return {
            data: response.data,
            status: response.status,
            error: null
        };
    } catch (error) {
        console.error("Error in CreateVpaIdService:", {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        return {
            data: null,
            error: error.response?.data || error.message,
            status: error.response?.status
        };
    }
};

// ... (keep other services the same as previous corrected version)

 const AddBalanceService = async (vpaId, balanceToBeAdded) => {
    try {
        let addBalanceRequest = {
            "vpaId" : vpaId,
            "balanceToBeAdded" : balanceToBeAdded
        };
         let addBalanceResponse = await axios.post("http://localhost:8080/addBalance",addBalanceRequest) //first argument will be the end point that we will hit..second, the data that it expects
         console.log("Balance:");
         console.log(addBalanceResponse);
         let response = {
            data : addBalanceResponse.data,
            status : addBalanceResponse.status,
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

const FetchBalanceService = async (vpaId) => {
    try {
        let fetchBalanceRequest = {
            "vpaId" : vpaId,
            
        };
         let fetchBalanceResponse = await axios.get("http://localhost:8080/fetchBalance",fetchBalanceRequest) //first argument will be the end point that we will hit..second, the data that it expects
         console.log("Fetched Balance:");
         console.log(fetchBalanceResponse);
         let response = {
            data : fetchBalanceResponse.data,
            status : fetchBalanceResponse.status,
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

export { CreateVpaIdService, AddBalanceService, FetchBalanceService};
