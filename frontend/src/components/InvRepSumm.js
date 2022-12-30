//There's another inbuilt method called useEffect in React Hook which will be used when fetching details --> thus, it should also be imported.
//Be it function based or class based, "React" must be imported.
//import the React library here, which was assigned to a variable callled "react" in package.json
import React, { useState, useEffect } from 'react';

//Import the axios pacakge to read the data from the backend to the frontend.
import axios from "axios";

//Used for navigation purposes(after clicking on update button --> moves to update page)
import { useHistory } from "react-router-dom";

//export the function of "AllStudents"
export default function InvRepSumm() {

    //Creating an array that passes 2 values.
    //First value of "students" returns the state.
    //Second value of "setStudents" returns the method that sets the values to the statae, or the one that changes the value of the state.
    //The initial/default value of the useState is an empty array.([])
    const [inventories, setInventory] = useState([]);
    const [reorder, setReorder] = useState();
    
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
                alert("Error in fetching.");
            })
        }

        //Invoke the function once its implemented.
        getInventory();
    }, [])

    function checkReorder(itemcode){
        if( itemcode == "ST001"){
            //setReorder(500);
            return 500;
        }
        else if(itemcode == "ST002"){
            //setReorder(300);
            return 300;
        }

        else if(itemcode == "ST003"){
            //setReorder(100);
            return 100;
        }
        else if(itemcode == "ST004"){
            //setReorder(50);
            return 50;
        } else if(itemcode == "ST005"){
            //setReorder(50);
            return 150;
        } else if(itemcode == "ST006"){
            //setReorder(50);
            return 250;
        } else if(itemcode == "ST007"){
            //setReorder(50);
            return 250;
        } else if(itemcode == "ST008"){
            //setReorder(50);
            return 200;
        } else if(itemcode == "ST009"){
            //setReorder(50);
            return 100;
        }
        else{
            //setReorder(150);
            return 150;
        }
          
    }

    function checkStatus(code,qty){
        if((code == "ST001" && qty > 500) || (code == "ST002" && qty > 300) || (code == "ST003" && qty > 100) || (code == "ST004" && qty > 50)|| (code == "ST005" && qty > 150)|| (code == "ST006" && qty > 250)|| (code == "ST007" && qty > 250)|| (code == "ST008" && qty > 200)|| (code == "ST009" && qty > 100)){
            //style.color = "orange";
             return "Stable";
        }
        else if((code == "ST001" && qty == 500) || (code == "ST002" && qty == 300) || (code == "ST003" && qty == 100) || (code == "ST004" && qty == 50)|| (code == "ST005" && qty > 150)|| (code == "ST006" && qty > 250)|| (code == "ST007" && qty > 250)|| (code == "ST008" && qty > 200)|| (code == "ST009" && qty > 100)){
            return "Reached Re-Order";
        }
        else if((code == "ST001" && qty < 500) || (code == "ST002" && qty < 300) || (code == "ST003" && qty < 100) || (code == "ST004" && qty < 50)|| (code == "ST005" && qty < 150)|| (code == "ST006" && qty < 250)|| (code == "ST007" && qty < 250)|| (code == "ST008" && qty < 200)|| (code == "ST009" && qty < 100)){
            return "Danger";
        }
        else{
            return "To Be Verified";
        }

    }



    return (

        <div className="container" style={{ boxShadow: "3px 6px 3px #cec"}}>
            <h1>Inventory Report</h1>

            <table className="table table-borderless">
                <div className="row">
                </div>
                
                <tr scope="col" style={{ backgroundColor: "black", color: "white"}}>
                    <th scope="col">ItemCode</th>
                    <th scope="col">Description</th>
                    <th scope="col">Re-Order Level</th>
                    <th scope="col">Available Quantity</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
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
                                <td class="text-uppercase">{checkReorder(inventory.ItemCode)}</td>
                                <td class="text-uppercase">{inventory.Quantity}</td>
                                <td class="text-uppercase">{checkStatus(inventory.ItemCode,inventory.Quantity)}</td>
                            </tr>
                        ))
                    }
                </tbody>
               
            </table>
            <a  type="button" href = "/inventory" class="btn btn-secondary">Back</a>
        </div>

    )
}
