import React, { useState, useEffect } from "react";
import axios from "axios"; //to take data from db

export default function AllSickEmployee() {

    const[eid, setEid] = useState("");
    const [sickemployees, setSickEmployees] = useState([]);

    useEffect(() => {
        function getSickEmployees() {
            axios.get("http://localhost:8070/Sickemployee/").then((res) => {
                //console.log(res.data);
                setSickEmployees(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getSickEmployees();
    }, [])

    return (
        <div className="container-fluid">
            <br></br>
            <div  style={{margin:"auto"}}>
                <h2>Medical Treatments</h2>

                <div>

                <div style={{marginLeft:"80%", width:"30%"}}>
                   
                        <input type="text"  id="search" placeholder="Enter EID..." onChange={(e) => { setEid(e.target.value) }} />
                        <button class="btn btn-primary btnView" onClick={() => {
                            window.location.replace(`/health/searchSick/${eid}`);
                        }}><i class="fa fa-search"></i></button>
                        <form class="d-flex" role="search">
                        <a href="/health/addtreat" type="button" className="btn btn-secondary float-right"  style={{marginRight:"0px",marginLeft:"10px", width:"26%"}} >Add Details <i class="fa fa-plus"></i></a>
                        <a href="/health/totalServicesReport" type="button" class="btn btn-secondary float-right" style={{marginRight:"0px",marginLeft:"10px", width:"20%"}}>Report <i class="fa fa-bar-chart"></i></a>
                    </form>
                </div>

                    <table className="table table-borderless">
                        <tr>
                            <th>Emp ID</th>
                            <th>Name</th>
                            <th>Shift</th>
                            <th>Date</th>
                            <th>In Time</th>
                            <th>Out Time</th>
                            <th>Age </th>
                            <th>Phone Number</th>
                            <th>Treatment</th>
                            <th>Remarks</th>
                            <th>Emergency Phone Number</th>
                            <th>Sent To</th>
                            <th>Reason</th>
                            
                        </tr>

                        <tbody>
                            {
                                sickemployees.map((sickemployee) => (
                                    <tr>
                                        <td>{sickemployee.eid}</td>
                                        <td>{sickemployee.name}</td>
                                        <td>{sickemployee.shift}</td>
                                        <td>{sickemployee.date}</td>
                                        <td>{sickemployee.intime}</td>
                                        <td>{sickemployee.outtime}</td>
                                        <td>{sickemployee.age}</td>
                                        <td>{sickemployee.phone}</td>
                                        <td>{sickemployee.treatment}</td>
                                        <td>{sickemployee.remark}</td>
                                        <td>{sickemployee.emergency}</td>
                                        <td>{sickemployee.sentTo}</td>
                                        <td>{sickemployee.reason}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/health/updateSickEmployee/${sickemployee._id}`)
                                            }}>Update <i class="fa fa-pencil"></i></button>
                                        </td>

                                        <td>
                                            <button className="btn btn-danger" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/health/deleteSickEmployee/${sickemployee._id}`)
                                            }}>Delete <i class="fa fa-trash-o fa-lg"></i></button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                        <div>
                        <a href="/health" type="button" class="btn btn-secondary float-right" style={{marginLeft:"60px", width:"100px", marginTop:"170%"}}>back <i class="fa fa-reply"></i></a>

                        </div>
                    </table>

                </div>
            </div>



        </div>
    )
}