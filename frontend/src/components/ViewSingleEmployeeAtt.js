import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

export default function ViewSingleEmployeeAtt(){
    const { empNo } = useParams();
    let [employees, setEmployee] = useState([]);

    useEffect(() => {
        const getAttendance = async () => {
            const { data: res } = await axios.get(`http://localhost:8070/attendance/getAttDetEmpNo/${empNo}`);
            setEmployee(res);
            console.log("Fetching...");
            console.log(employees);
        }
        getAttendance();
    }, [])

    return(
        <div className="mainBodyView">
            <a href="/attendence">
                <button className="btn btn-secondary topBackBtn" >Back <i class="fa fa-reply"/></button>
            </a>
            <table class="table table-striped tbl">
                <thead>
                    <tr>
                        <th scope="col">Emp No</th>
                        <th scope="col">Entry time</th>
                        <th scope="col">Exit time</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Working Hours</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => {
                        return (
                            <tr>
                                <td>{employee.empNo}</td>
                                <td>{employee.entryTime}</td>
                                <td>{employee.exitTime}</td>
                                <td>{employee.date}</td>
                                <td>{employee.status}</td>
                                <td>{employee.workingHrs}</td>
                                <td>
                                    <button type="button" className="btn btn-success" onClick={() => {
                                        window.location.replace(`/attendence/updateAttendance/${employee._id}`);
                                    }}>Update <i class="fa fa-pencil"/></button>
                                    <button type="button" className="btn btn-danger btnView" onClick={() => {
                                        window.location.replace(`/attendence/deleteAttendance/${employee._id}`);
                                    }}>Delete <i class="fa fa-trash-o fa-lg"/></button>
                                    {/* <button type="button" className="btn btn-warning btnView">Generate report</button> */}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}