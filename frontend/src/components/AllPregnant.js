import React, { useState, useEffect } from "react";
import axios from "axios"; //to take data from db

export default function AllPregnant() {

    const[eid, setEid] = useState("");
    const [pregemployees,setPregEmployees] = useState([]);

    useEffect(() => {
        function getPregEmployees() {
            axios.get("http://localhost:8070/Pregemployee/").then((res) => {
                console.log(res.data);
                setPregEmployees(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getPregEmployees();
    }, [])

    return (
        <div  className="container-fluid">
            <br></br>
            <div style={{margin:"auto"}}>
                <h2>Pregnant Employees</h2>
                <div>

                <div style={{marginRight:"40px", marginLeft:"auto", width:"30%"}}>
                        <input type="text" id="search" placeholder="Enter EID..." onChange={(e) => { setEid(e.target.value) }} />
                        <button class="btn btn-primary btnView" onClick={() => {
                            window.location.replace(`http://localhost:3000/health/searchPregnant/${eid}`);
                        }}><i class="fa fa-search"></i></button>
                        <a href="/health/addpregnant" type="button" class="btn btn-secondary float-right" style={{marginRight:"60px", width:"26%"}} >Add Details <i class="fa fa-plus"></i></a>
                    </div>

                    <table className="table table-borderless">
                        <tr>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Delivery Date</th>
                            <th>Previous Children Count</th>
                            <th>Age</th>
                            <th>Phone Number</th>
                            <th>Relative's Phone Number</th>
                            <th>Meal Token</th>
                            <th>Pregnan Frock</th>
                            <th>Clinic Card</th>
                            <th>Recieved Date</th>
                            <th>Pressure/Cholesterol</th>
                            <th></th>
                            <th></th>
                        </tr>

                        <tbody>
                            {
                                pregemployees.map((pregemployee) => (
                                    <tr>
                                        <td>{pregemployee.eid}</td>
                                        <td>{pregemployee.name}</td>
                                        <td>{pregemployee.deliverydate}</td>
                                        <td>{pregemployee.prechild}</td>
                                        <td>{pregemployee.age}</td>
                                        <td>{pregemployee.phone}</td>
                                        <td>{pregemployee.relative}</td>
                                        <td>{pregemployee.token}</td>
                                        <td>{pregemployee.frock}</td>
                                        <td>{pregemployee.cliniccard}</td>
                                        <td>{pregemployee.recdate}</td>
                                        <td>{pregemployee.pressure}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/health/updatePregnant/${pregemployee._id}`)
                                            }}>Update <i class="fa fa-pencil"></i></button>
                                        </td>

                                        <td>
                                            <button className="btn btn-danger" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/health/deletePregnant/${pregemployee._id}`)
                                            }}>Delete <i class="fa fa-trash-o fa-lg"></i></button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                        <div>
                        <a href="/health" type="button" class="btn btn-secondary float-right" style={{width:"100px", marginTop:"120%",marginLeft:"80px"}}>back <i class="fa fa-reply"></i></a>

                        </div>
                    </table>

                </div>
            </div>



        </div>
    ) 
}