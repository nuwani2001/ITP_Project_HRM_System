import React, { useState, useEffect } from "react";
import axios from "axios"; //to take data from db
import { useParams } from "react-router-dom";

export default function SingleChannel() {

    const {eid} = useParams();
    const [channels,setChannels] = useState([]);

    useEffect(() => {
        function getSingleChannel() {
            axios.get(`http://localhost:8070/Doctorchannel/getChannel/${eid}`).then((res) => {
                console.log(res.data);
                setChannels(res.data.DoctorChannel);
                console.log(channels);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getSingleChannel();
    }, [])

    return (
        <div>
            <br></br>
            <div style={{margin:"auto"}}>
                <h2>Doctor Channeling</h2>
                <div>
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
                                channels.map((channel) => (
                                    <tr>
                                        <td>{channel.eid}</td>
                                        <td>{channel.name}</td>
                                        <td>{channel.date}</td>
                                        <td>{channel.age}</td>
                                        <td>{channel.disease}</td>
                                        <td>{channel.prescription}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/health/updateDocChannel/${channel._id}`)
                                            }}>Update</button>
                                        </td>

                                        <td>
                                            <button className="btn btn-danger" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/health/deleteDocChannel/${channel._id}`)
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