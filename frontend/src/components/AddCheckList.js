import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

export default function AddCheckList() {
    let [name, setchklName] = useState("");
    let [score, setChklScore] = useState("");
    let [date, setChklDate] = useState("");

    function sendData(e) {
        e.preventDefault(); //To prevent the default behaviour of a submit button
        const newChkl = {
            name,
            score,
            date
        }

        axios.post("http://localhost:8070/checkList/addCheckList", newChkl).then(() => {
            alert("CheckList added");
        }).catch((err) => {
            alert(err);
            console.log(err);
            console.log("Error with sending form data");
        })
    }

    function demoBtn(){
        setchklName("HR workshop");
        setChklScore("20");
        setChklDate("11/03/2022");
    }


    return (
        <div className="formStyle formCls">
            <h1>Add new checklist</h1>
            <a href="/skillmetric/viewCheckList">
                    <button className="btn btn-secondary">Back</button>
            </a>
            <div className="updelForm">
                <form encType="multipart/form-data" method="post" onSubmit={sendData}>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" value={name} required onChange={(e) => {
                            setchklName(e.target.value)
                        }} />
                    </div>
                    <div className="mb-3">
                        <label for="score" className="form-label">Score</label>
                        <input type="text" className="form-control" id="score" value={score} pattern="[0-9]+" required onChange={(e) => {
                            setChklScore(e.target.value)
                        }} />
                    </div>
                    <div className="mb-3">
                        <label for="date" className="form-label">Date</label>
                        <input type="date" className="form-control" value={date} id="date" required onChange={(e) => {
                            setChklDate(e.target.value)
                        }} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                </form>
                <button className="btn btn-warning" style={{marginTop: "10px"}} onClick={demoBtn}>DEMO</button>
            </div>
        </div>
    )
}