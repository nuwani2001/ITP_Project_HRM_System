import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SearchTreatment() {
    const { eid } = useParams();
    const [treats, settreats] = useState([]);

    useEffect(() => {
        function getSingleTreat() {
            axios.get(`http://localhost:8070/Sickemployee/getSick/${eid}`).then((res) => {
                console.log(res.data);
                settreats(res.data.SickEmployee);
                console.log(treats);

            }).catch((err) => {
                console.log(err)
            })
        }
        getSingleTreat();
    }, [])

    return (
        <div>
            <br></br>
            <div style={{ margin: "auto" }}>
                <h2>Medical Treatments</h2>
                <div>
                    <table className="table table-borderless">
                        <tr>
                            <th>Employee ID</th>
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
                            <th></th>
                            <th></th>
                        </tr>

                        <tbody>
                            {
                                treats.map((treat) => (
                                    <tr>
                                        <td>{treat.eid}</td>
                                        <td>{treat.name}</td>
                                        <td>{treat.shift}</td>
                                        <td>{treat.date}</td>
                                        <td>{treat.intime}</td>
                                        <td>{treat.outtime}</td>
                                        <td>{treat.age}</td>
                                        <td>{treat.phone}</td>
                                        <td>{treat.treatment}</td>
                                        <td>{treat.remark}</td>
                                        <td>{treat.emergency}</td>
                                        <td>{treat.sentTo}</td>
                                        <td>{treat.reason}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => {
                                                window.location.replace(`http://localhost:3000/health/updateSickEmployee/${treat._id}`)
                                            }}>Update</button>
                                        </td>

                                        <td>
                                            <button className="btn btn-danger" onClick={() => {
                                                window.location.replace(`http://localhost:3000/health/deleteSickEmployee/${treat._id}`)
                                            }}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>

                    <a href="/health/viewtreat" type="button" class="btn btn-secondary float-right" style={{ marginRight: "20px", width: "8%", marginBottom: "20px" }}>back</a>
                </div>
            </div>
        </div>
    )
}