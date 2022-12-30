import React, { useState, useEffect } from "react";
import axios from "axios"; //to take data from db

export default function AllChannel() {

    const[eid, setEid] = useState("");
    const [doctorchannels,setDoctorChannels] = useState([]);

    useEffect(() => {
        function getDoctorChannels() {
            axios.get("http://localhost:8070/Doctorchannel/").then((res) => {
                //console.log(res.data);
                setDoctorChannels(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getDoctorChannels();
    }, [])

    return (
        <div  className="container-fluid">
            <br></br>
            <div style={{margin:"auto"}}>
                <h2>Doctor Channeling</h2>
                <div>

                <div style={{marginRight:"40px", marginLeft:"auto", width:"30%"}}>
                        <input type="text" id="search" placeholder="Enter EID..." onChange={(e) => { setEid(e.target.value) }} />
                        <button class="btn btn-primary btnView" onClick={() => {
                            window.location.replace(`http://localhost:3000/health/searchChannel/${eid}`);
                        }}><i class="fa fa-search"></i></button>
                        <a href="/health/addchannel" type="button" class="btn btn-secondary float-right" style={{marginRight:"60px", width:"26%"}}>Add Details <i class="fa fa-plus"></i></a>
                    </div>

                    <table className="table table-borderless">
                        <tr>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Age</th>
                            <th>Disease</th>
                            <th>Prescription</th>
                            <th></th>
                            <th></th>
                        </tr>

                        <tbody>
                            {
                                doctorchannels.map((doctorchannel) => (
                                    <tr>
                                        <td>{doctorchannel.eid}</td>
                                        <td>{doctorchannel.name}</td>
                                        <td>{doctorchannel.date}</td>
                                        <td>{doctorchannel.age}</td>
                                        <td>{doctorchannel.disease}</td>
                                        <td>{doctorchannel.prescription}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/health/updateDocChannel/${doctorchannel._id}`)
                                            }}>Update <i class="fa fa-pencil"></i></button>
                                        </td>

                                        <td>
                                            <button className="btn btn-danger" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/health/deleteDocChannel/${doctorchannel._id}`)
                                            }}>Delete <i class="fa fa-trash-o fa-lg"></i></button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                        <div>
                        <a href="/health" type="button" class="btn btn-secondary float-right" style={{marginRight:"10px", width:"80px", marginTop:"120%"}}>back <i class="fa fa-reply"></i></a>

                        </div>
                    </table>

                </div>
            </div>

        </div>
    ) 
}