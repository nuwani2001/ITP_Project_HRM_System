import React, { useState, useEffect } from "react";
import axios from "axios"; //to take data from db
import { useParams } from "react-router-dom";

export default function AllPregnant() {

    const {eid} = useParams();
    const [pregnants,setPregnant] = useState([]);

    useEffect(() => {
        function getSinglePregnant() {
            axios.get(`http://localhost:8070/Pregemployee/getPregnant/${eid}`).then((res) => {
                console.log(res.data);
                setPregnant(res.data.PregEmployee);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getSinglePregnant();
    }, [])

    return (
        <div>
            <br></br>
            <div style={{margin:"auto"}}>
                <h2>Pregnant Employees</h2>
                <div>
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
                                pregnants.map((pregnant) => (
                                    <tr>
                                        <td>{pregnant.eid}</td>
                                        <td>{pregnant.name}</td>
                                        <td>{pregnant.deliverydate}</td>
                                        <td>{pregnant.prechild}</td>
                                        <td>{pregnant.age}</td>
                                        <td>{pregnant.phone}</td>
                                        <td>{pregnant.relative}</td>
                                        <td>{pregnant.token}</td>
                                        <td>{pregnant.frock}</td>
                                        <td>{pregnant.cliniccard}</td>
                                        <td>{pregnant.recdate}</td>
                                        <td>{pregnant.pressure}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/health/updatePregnant/${pregnant._id}`)
                                            }}>Update</button>
                                        </td>

                                        <td>
                                            <button className="btn btn-danger" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/health/deletePregnant/${pregnant._id}`)
                                            }}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>

                    <a href="/health" type="button" class="btn btn-secondary float-right" style={{marginRight:"40px", width:"8%"}}>back</a>
                </div>
            </div>



        </div>
    ) 
}