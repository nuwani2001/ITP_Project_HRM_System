//There's another inbuilt method called useEffect in React Hook which will be used when fetching details --> thus, it should also be imported.
//Be it function based or class based, "React" must be imported.
//import the React library here, which was assigned to a variable callled "react" in package.json
import React, { useState, useEffect } from 'react';

//Import the axios pacakge to read the data from the backend to the frontend.
import axios from "axios";

//Used for navigation purposes(after clicking on update button --> moves to update page)
import { useHistory, useParams } from "react-router-dom";

//export the function of "AllStudents"
export default function InvSearched() {

    //Creating an array that passes 2 values.
    //First value of "students" returns the state.
    //Second value of "setStudents" returns the method that sets the values to the statae, or the one that changes the value of the state.
    //The initial/default value of the useState is an empty array.([])
    const [inventory, setInv] = useState([]);
    const { code } = useParams();
    //assigning the method of useHistory to the variable "history"
    let history = useHistory();

    useEffect(() => {
        //There's another function called getStudents defined inside the arrow function.
        function getInv() {
            //axois can go to the mentioned URL and get the backend data.
            //axois uses the "get" method --> when retrieving data from the DB --> since that is the http request that is specified in the BACKEND
            //If data was successfully fetched, then ---> the data objects sent as an array is passed to the seStudent method.
            axios.get(`http://localhost:8070/inventory/getItem/${code}`).then((res) => {
                console.log(res.data);
                
                if(res.data.inventory===null){
                    alert("Item Code Does Not Exist");
                }
                else{
                    setInv(res.data.inventory);
                }
                //if it wasn't successfully fetched, then the error is displayed and handled as an exception.
            }).catch((err) => {
                alert(err.message);
            })
        }

        //Invoke the function once its implemented.
        getInv();
    }, [])


    return (

        <div className="container">
            <center>
            <h1>Stationery Searched</h1>
            
            <table className="table table-borderless">

                <div class="col-xs-6 my-auto">
                
                    
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
                          

                            <tr>
                              
                                <td class="text-uppercase">{inventory.ItemCode}</td>
                                <td class="text-uppercase">{inventory.Description}</td>
                                <td class="text-uppercase">{inventory.InvoiceNo}</td>
                                <td class="text-uppercase">{inventory.Quantity}</td>
                                <td class="text-uppercase">{inventory.Supplier}</td>
                                <td class="text-uppercase">{inventory.OrderDate}</td>
                                <td></td>

                                <td>
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
                                        <td>
                                        <a  type="button" href = "/inventory/search" class="btn btn-secondary">BACK <i class="fa fa-reply"></i></a>
                                        </td>
                            </tr>
                             
                            
                        }
                    </tbody>
                </div>
                
            </table >
            </center>
        </div >

    )
}