//There's another inbuilt method called useEffect in React Hook which will be used when fetching details --> thus, it should also be imported.
//Be it function based or class based, "React" must be imported.
//import the React library here, which was assigned to a variable callled "react" in package.json
import React, { useState, useEffect } from 'react';

//Import the axios pacakge to read the data from the backend to the frontend.
import axios from "axios";

//Used for navigation purposes(after clicking on update button --> moves to update page)
import { useHistory } from "react-router-dom";

//export the function of "AllStudents"
export default function AllInventory() {

    //Creating an array that passes 2 values.
    //First value of "students" returns the state.
    //Second value of "setStudents" returns the method that sets the values to the statae, or the one that changes the value of the state.
    //The initial/default value of the useState is an empty array.([])
    const [inventories, setInventory] = useState([]);

    //assigning the method of useHistory to the variable "history"
    let history = useHistory();

    useEffect(() => {
        //There's another function called getStudents defined inside the arrow function.
        function getInventory() {
            //axois can go to the mentioned URL and get the backend data.
            //axois uses the "get" method --> when retrieving data from the DB --> since that is the http request that is specified in the BACKEND
            //If data was successfully fetched, then ---> the data objects sent as an array is passed to the seStudent method.
            axios.get("http://localhost:8070/inventory/").then((res) => {
                console.log(res.data);
                setInventory(res.data);

                //if it wasn't successfully fetched, then the error is displayed and handled as an exception.
            }).catch((err) => {
                alert(err.message);
            })
        }

        //Invoke the function once its implemented.
        getInventory();
    }, [])



    return (




        <div className="container">
            <h1>All Inventory</h1>

            <table class="table align-middle">
                <div className="row">
                    <div class="btn-group" role="group" aria-label="Basic example">

                    </div>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-dark" onClick={() => {

                            //history.push moves from the current page.
                            //history.push(`/update/${student._id}`);
                            //window.location also redirects to another page.(delete page with the ID)
                            window.location.replace(`http://localhost:3000/inventory/add/`);
                        }}>Add Inventory <i class="fa fa-plus"></i></button>
                        <button type="button" class="btn btn-outline-dark" onClick={() => {

                            //history.push moves from the current page.
                            //history.push(`/update/${student._id}`);
                            //window.location also redirects to another page.(delete page with the ID)
                            window.location.replace(`http://localhost:3000/inventory/search`);
                        }}>Search Inventory</button>
                        <button type="button" class="btn btn-outline-dark" onClick={() => {
                            //history.push(`/delete/${student._id}`);
                            //window.location also redirects to another page.(delete page with the ID)
                            window.location.replace(`http://localhost:3000/inventory/report`);
                        }}>Inventory Report <i class="fa fa-bar-chart"/></button>
                        <button type="button" class="btn btn-outline-dark" onClick={() => {
                            //history.push(`/delete/${student._id}`);
                            //window.location also redirects to another page.(delete page with the ID)
                            window.location.replace(`http://localhost:3000/inventory/request`);
                        }}>Request Inventory</button>
                    </div>
                </div>
                <div>
                    <tr>

                        <th>ItemCode</th>
                        <th>Description</th>
                        <th>InvoiceNo</th>
                        <th>Quantity</th>
                        <th>Supplier</th>
                        <th>OrderDate</th>

                    </tr>


                    <tbody>
                        {
                            //.map function --> similar to a for each loop.
                            //inventories has all the objects passed as an array.
                            //we pass a varaiable inside the map function ---> to access the attributes.(age,gender,name)
                            inventories.map((inventory) => (

                                <tr scope="row">
                                    <td class="text-uppercase">{inventory.ItemCode}</td>
                                    <td class="text-uppercase">{inventory.Description}</td>
                                    <td class="text-uppercase">{inventory.InvoiceNo}</td>
                                    <td class="text-uppercase">{inventory.Quantity}</td>
                                    <td class="text-uppercase">{inventory.Supplier}</td>
                                    <td class="text-uppercase">{inventory.OrderDate}</td>
                                    <div>
                                        <td>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-success" onClick={() => {

                                                //history.push moves from the current page.
                                                //history.push(`/update/${student._id}`);
                                                //window.location also redirects to another page.(delete page with the ID)
                                                window.location.replace(`http://localhost:3000/inventory/update/${inventory._id}`);
                                            }}>UPDATE <i class="fa fa-pencil"></i></button>
                                        </td>

                                        <td>
                                            <button className="btn btn-danger" onClick={() => {
                                                //history.push(`/delete/${student._id}`);
                                                //window.location also redirects to another page.(delete page with the ID)
                                                window.location.replace(`http://localhost:3000/inventory/delete/${inventory._id}`);
                                            }}>DELETE <i class="fa fa-trash-o fa-lg"></i></button>
                                        </td>
                                    </div>
                                </tr>

                            ))
                        }

                    </tbody>
                </div>

            </table>

        </div>

    )
}