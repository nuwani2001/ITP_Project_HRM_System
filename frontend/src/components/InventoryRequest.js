//import React from "react";
//import { useState } from "react";
//import { useHistory } from "react-router-dom";

//There's another inbuilt method called useEffect in React Hook which will be used when fetching details --> thus, it should also be imported.
//Be it function based or class based, "React" must be imported.
//import the React library here, which was assigned to a variable callled "react" in package.json
import React, { useState, useEffect } from 'react';

//Import the axios pacakge to read the data from the backend to the frontend.
import axios from "axios";

//Used for navigation purposes(after clicking on update button --> moves to update page)
import { useHistory, useParams } from "react-router-dom";

export default function InvRequest() {


    //Creating an array that passes 2 values.
    //First value of "students" returns the state.
    //Second value of "setStudents" returns the method that sets the values to the statae, or the one that changes the value of the state.
    //The initial/default value of the useState is an empty array.([])

    let [ReqQuantity, setReqQuantity] = useState();
    let [InvQuantity, setInvQuantity] = useState();
    let [Itcode, setCode] = useState("");
    let [Invcode, setInvCode] = useState("");



    //There's another function called getStudents defined inside the arrow function.
    function getInventoryInfo() {

        //axois can go to the mentioned URL and get the backend data.
        //axois uses the "get" method --> when retrieving data from the DB --> since that is the http request that is specified in the BACKEND
        //If data was successfully fetched, then ---> the data objects sent as an array is passed to the seStudent method.
        axios.get(`http://localhost:8070/inventory/getItem/${Itcode}`).then((res) => {
            console.log(res.data);
            setInvQuantity(res.data.inventory.Quantity);
            setInvCode(res.data.inventory._id);
            console.log(Invcode);

            //if it wasn't successfully fetched, then the error is displayed and handled as an exception.
        }).catch((err) => {
            alert("Item Code does not exist");
        })

        //checkStock();
    }

    /*
    function checkCode(){
        //axois can go to the mentioned URL and get the backend data.
        //axois uses the "get" method --> when retrieving data from the DB --> since that is the http request that is specified in the BACKEND
        //If data was successfully fetched, then ---> the data objects sent as an array is passed to the seStudent method.
        axios.get(`http://localhost:8070/inventory/getItem/${Itcode}`).then((res) => {
            console.log(res.data);
            //setInvQuantity(res.data.inventory.Quantity);
            setInvCode(res.data.inventory._id);
            console.log(Invcode);

            //if it wasn't successfully fetched, then the error is displayed and handled as an exception.
        }).catch((err) => {
            alert("Item Code Entered Does Not Exist");
        })
    }
*/
    function checkStock() {
        // e.preventdefault();
        if (InvQuantity >= ReqQuantity) {
            setInvQuantity(InvQuantity - ReqQuantity);
            //if its is onChange --> use "let" variables.
            //if it is onClick --> can use both(const and let)
            alert("Stocks request granted");

        }
        else {
            alert("Request Denied");
        }
    }

    function backUpdate() {
        const newQuantity = { "Quantity": InvQuantity };
        axios.put(`http://localhost:8070/inventory/updateQuantity/${Invcode}`, newQuantity);
        window.location.replace(`http://localhost:3000/inventory`);
    }


    return (
        <div className='container'>
            
            <div style={{marginLeft:"20%"}}>
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Request Stationery</h1>
                <input className="form-control mr-sm-2" type="search" class="w-25 p-3"   placeholder="Request Inv ItemCode(Eg:- ST002)" aria-label="ItemCode" onChange={(e) => {
                     setCode(e.target.value);
                }} ></input>
                <input className="form-control mr-sm-2" type="number" class="w-25 p-3" placeholder="Request Inv Quantity"  aria-label="Quantity" onChange={(e) => {
                    setReqQuantity(e.target.value);
                    getInventoryInfo();
                }}></input>
                <button className="btn btn-outline-success my-2 my-sm-0" class="w-12 p-3" onClick={checkStock}>Request</button>
                <button className="btn btn-outline-success my-2 my-sm-0" class="w-12 p-3" onClick={backUpdate}>Back</button>
            </div>
        </div>
        
    )

}
