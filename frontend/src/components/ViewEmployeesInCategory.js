import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

export default function ViewEmployeesInCategory() {
    let [employees, setEmployee] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const getEmpByCat = async () => {
            const { data: res } = await axios.get(`http://localhost:8070/employees/getEmployeeByCat/${category}`);
            setEmployee(res);
            console.log(employees);
        }
        getEmpByCat();
    }, [])

    return (
        <div className="mainBodyView">
            <h3>{category}</h3>
            <a href="/skillmetric/">
                <button className="btn btn-secondary bottomBackBtn">Back <i class="fa fa-reply"/></button>
            </a>
            <div className="container-fluid">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Emp No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Skill</th>
                            <th scope="col">Score</th>
                            <th scope="col">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => {
                            return (
                                <tr>
                                    <td>{employee.emp_id}</td>
                                    <td>{employee.full_name}</td>
                                    <td>{employee.skill}</td>
                                    <td>{employee.score}</td>
                                    <td>{employee.category}</td>
                                    <td>
                                        <button type="button" className="btn btn-success" onClick={() => {
                                            window.location.replace(`/skillmetric/updateSkills/${employee._id}`);
                                        }}>Update <i class="fa fa-pencil"/></button>
                                        <button type="button" className="btn btn-danger btnView" disabled>Delete <i class="fa fa-trash-o fa-lg"/></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            

        </div>
    )
}