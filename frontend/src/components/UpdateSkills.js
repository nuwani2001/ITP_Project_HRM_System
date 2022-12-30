import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

export default function UpdateSkills() {
    const { id } = useParams();

    const [empNo, setEmpNo] = useState("");
    const [name, setName] = useState("");
    const [skill, setSkill] = useState("");
    const [score, setScore] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8070/employees/get/${id}`).then((res) => {
            console.log("Hello world");
            setEmpNo(res.data.employees.emp_id)
            setName(res.data.employees.full_name);
            setSkill(res.data.employees.skill);
            setScore(res.data.employees.score);
            setCategory(res.data.employees.category);
        }).catch((err) => {
            console.log(err.response.data);
        })
    }, [])

    function sendData(e) {
        e.preventDefault();

        axios.put(`http://localhost:8070/employees/updateEmp/${empNo}`, { score: score, skill: skill, category: category }).then(() => {
            alert("employee Updated")
            // console.log("employee updated");
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div className="formStyle formCls">
            <h1>Update Skills</h1>
            <button className="btn btn-secondary bottomBackBtn" onClick={() => {
                                window.location.replace(`/skillmetric/ViewEmployeesInCategory/${category}`);
                            }}>Back <i class="fa fa-reply"/></button>
            <div className="updelForm">
                <form>
                    <div className="mb-3">
                        <label for="empNo" className="form-label">Emp No</label>
                        <input type="text" className="form-control" id="empNo" value={empNo} disabled />
                    </div>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" value={name} disabled />
                    </div>
                    <div className="mb-3">
                        <label for="skills" className="form-label">Skills</label>
                        <input type="text" className="form-control" id="skills" value={skill} onChange={(e) => {
                            setSkill(e.target.value)
                        }} />
                    </div>
                    <button type="submit" className="btn btn-success" onClick={sendData}>Update <i class="fa fa-pencil"/></button>
                </form>
            </div>

        </div>
    )
}