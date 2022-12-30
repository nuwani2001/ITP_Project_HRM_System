import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

export default function UpdateAttendance() {
    // let [employees, setEmployee] = useState([]);
    const { id } = useParams();

    const [empNo, setEmpNo] = useState("");
    const [entryTime, setEntryTime] = useState("");
    const [exitTime, setExitTime,] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [workingHrs, setWorkingHrs] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8070/attendance/getAttDetId/${id}`).then((res) => {
            console.log("Hello world");
            setEmpNo(res.data.empNo);
            setEntryTime(res.data.entryTime);
            setExitTime(res.data.exitTime);
            setDate(res.data.date);
            setStatus(res.data.status);
            setWorkingHrs(res.data.workingHrs);
        }).catch((err) => {
            console.log(err.response.data);
        })
    }, []);


    function sendData(e) {
        e.preventDefault();

        axios.put(`http://localhost:8070/attendance/updateAtt/${id}`, { empNo: empNo, entryTime: entryTime, exitTime: exitTime, date: date, status: status, workingHrs: workingHrs }).then(() => {
            alert("Attendance Updated")
        }).catch((err) => {
            alert(err);
        })
    }

    function demoBtn(){
        setEntryTime("01:00:00");
        setExitTime("06:00:00");
        setDate("11/05/2022");
        setStatus("Ok");
        setWorkingHrs(5);
    }

    return (
        <div className="formStyle formCls">
            <h2>Update Attendance</h2>
            <div className="updelForm">
                <form onSubmit={sendData}>
                    <div className="mb-3">
                        <label for="empId" className="form-label">Employee ID</label>
                        <input type="text" className="form-control" id="empId" value={empNo} disabled />
                    </div>
                    <div className="mb-3">
                        <label for="entTime" className="form-label">Entry Time</label>
                        <input type="text" className="form-control" id="entTime" required value={entryTime} onChange={(e) => {
                            setEntryTime(e.target.value)
                        }} />
                    </div>
                    <div className="mb-3">
                        <label for="extTime" className="form-label">Exit Time</label>
                        <input type="text" className="form-control" id="extTime" required value={exitTime} onChange={(e) => {
                            setExitTime(e.target.value)
                        }} />
                    </div>
                    <div className="mb-3">
                        <label for="date" className="form-label">Date</label>
                        <input type="date" className="form-control" id="date" required value={date} onChange={(e) => {
                            setDate(e.target.value)
                        }} />
                    </div>
                    <div className="mb-3">
                        <label for="status" className="form-label">Status</label>
                        <input type="text" className="form-control" required pattern="[A-Za-z]{1,10}" id="status" value={status} onChange={(e) => {
                            setStatus(e.target.value)
                        }} />
                    </div>
                    <div className="mb-3">
                        <label for="workHrs" className="form-label">Working Hours</label>
                        <input type="text" className="form-control" required pattern="[0-9]+" id="workHrs" value={workingHrs} onChange={(e) => {
                            setWorkingHrs(e.target.value)
                        }} />
                    </div>
                    <button type="submit" className="btn btn-success">Update <i class="fa fa-pencil"/></button>
                </form>
                
                <a href="/attendence/viewDailyAtt">
                    <button className="btn btn-secondary bottomBackBtn">Back <i class="fa fa-reply"/></button>
                </a>
                <button className="btn btn-warning attDemoBtn" onClick={demoBtn}>DEMO</button>
            </div>

        </div>
    )
}