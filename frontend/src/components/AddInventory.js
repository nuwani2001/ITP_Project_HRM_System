//import the React library here, which was assigned to a variable callled "react" in package.json 
//The useState function in 'ReactHook' will be called in the import statement. ---> this helps to define a "state" in a function based approach, without the use of a constructor.
//If we don't use the "Export default" --> have to include the curly brackets surrounding "useState"
//First thing it returns --->This "useState" returns the value of the state.(The counter we developed using the "increment" button for instance)
//Second thing it returns ---> The "useState" also has the respective function to be implemented that reveals how the state value is updated.
import React, { useEffect, useState } from "react";
//import ReactDOM from 'react-dom';
//Import axios from the axios package we installed.This is needed to move the data from the frontend to the backend via an http request
import axios from "axios";

export default function AddInventory() {

    //Create 3 variables/states for name,age and gender
    //The initialization of these 3 states have been done below.
    //It is using the setName/setAge/setGender that we assign values to the states of name/age/gender respectively.
    //As the initial/default value we pass ("") in the useState of each respective state.
    //onChange is an event
    //The values passed in the text field of the form should be assigned to the respective state(name,age,gender) --> we do this using the onChange event available.
    //Value given in the input field to record he name should be passed to the state "name" respectively. ---> could be done using the setName method.
    //In the setName method we pass an argument ---> (e.target.value) --> what happens in taget.value is ---> value entered in the text field to input the name will be assigned to the state of "name".
    //Same process applies to the other 2 variables as well.
    const [ItemCode, setItemCode] = useState("");
    //since we are making the type of age as number --> remove "" of useState.
    const [Description, setDescription] = useState("");
    const [InvoiceNo, setInvoiceNo] = useState("");
    const [Quantity, setQuantity] = useState();
    const [Supplier, setSupplier] = useState("");
    const [OrderDate, setOrderDate] = useState("");
    let [upQuantity, setIncrQuantity] = useState();
    const [inventories, setInventories] = useState([]);
    const [isMatched, setIsMatched] = useState(true);


    useEffect(() => {
        axios.get("http://localhost:8070/inventory/").then((res) => {
            console.log(res.data);
            setInventories(res.data);
        }).catch((err) => {
            alert(err.message);
        })
    }, [])




    function sendData(e) {
        //The below code prevents the normal behaviour of the submit button.
        e.preventDefault();



        //Create a javascript object. That passes the 3 attributes.
        const newInventory = {
            ItemCode,
            Description,
            InvoiceNo,
            Quantity,
            Supplier,
            OrderDate
        }




        //We pass the data from the frontend to the backend using the post http request.
        //Then the backend server responds with another http request.
        //This http response coming from the backend is handled using a seperate npm package called "axios" --> this is imported at the top following the installation.
        //axios has a method called post that passes 3 arguments usually, if there is authentication(No authentication meaning --> only 2 parameters)
        //Pass the backend URL as the first parameter.
        //Pass the JS object next as the second parameter, that holds the 3 attributes passed through the form.

        axios.post("http://localhost:8070/inventory/add", newInventory).then(() => {
            //After sending the data --> backend server responds --> if successfully added then an alert message is sent.
            alert(`Inventory Added Successfully`);


            //After submitting the details ---> the values should be taken off from the fields ---> to do this --> the setters are assigned with ("")
            setItemCode("");
            setDescription("");
            setInvoiceNo("");
            setQuantity();
            setSupplier("");
            setOrderDate("");

            //Can move to the home page after deleting the data
            // window.location.replace("http://localhost:3000/inventory");

            //can move to the add student page after deleting the data.  
            //window.location.replace("http://localhost:3000/inventory/add");
        }).catch((err) => {
            //After sending the data --> backend server responds --> if it wasn't successfully added --> the error is handled as an exception.
            alert(err);
        })
        //Pass the js object that we created in the console.(This will display the name, age,gender that's passed).
        //console.log(newStudent);
    }

    return (
        <div className="container">
             <h1>Add Inventory</h1>
            <form onSubmit={sendData}>
                <div className="form-group"  >
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="name">Item Code</label>
                    </div>

                    <div class="col-sm-10">
                        <input type="text" className="form-control" required pattern ="[S][T][0-9]{3}" title="Has to be of 5 characters" id="code" placeholder="Enter item code" onChange={(e) => {
                            var code = setItemCode(e.target.value);
                        }} />
                        <div required/>
                    </div>
                </div>
                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="description">Description</label>
                    </div>

                    <div class="col-sm-10">
                        <input type="text" className="form-control" id="description" required placeholder="Enter description" onChange={(e) => {
                            setDescription(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="invoice">Invoice No</label>
                    </div>

                    <div class="col-sm-10">
                        <input type="text" className="form-control" required pattern ="[I][N][V][0-9]{3}" id="invoice" placeholder="Enter invoice no" onChange={(e) => {
                            setInvoiceNo(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="quantity">Quantity</label>
                    </div>

                    <div class="col-sm-10">
                        <input type="number" className="form-control" required id="quantity" placeholder="Enter quantity " onChange={(e) => {
                            upQuantity = setQuantity(e.target.value);
                            
                        }} />
                    </div>
                </div>

                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="supplier">Supplier</label>
                    </div>

                    <div class="col-sm-10">
                        <input type="text" className="form-control" required id="supplier" placeholder="Enter supplier " onChange={(e) => {
                            setSupplier(e.target.value);
                        }}/>
                    </div>
                </div>

                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="order">Order Date</label>
                    </div>

                    <div class="col-sm-10">
                        <input type="date" className="form-control" id="order" required placeholder="Enter order date " onChange={(e) => {
                            setOrderDate(e.target.value);
                        }} />
                         
                    </div>
                </div>
                
                <a  type="button" href = "/inventory" class="btn btn-secondary">Back <i class="fa fa-reply"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </div>
    )
}