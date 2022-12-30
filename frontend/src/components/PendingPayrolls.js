//component that displays all students

import React, { useState, useEffect } from 'react'; //useEffect takes what needs to be displayed during the rendering of a component
import { useHistory } from 'react-router-dom'; //this is needed for update page
import axios from "axios";

export default function PendingPayrolls() {

    //first you must take the array that is being returned from the read function(http://localhost:8070/student/)
    const [employees, setEmployees] = useState([]);
    let history = useHistory();
    useEffect(() => {
        function getEmployees() {
            //implements how and from where the data is taken from
            axios.get("http://localhost:8070/employees/").then((res) => {
                console.log(res.data);
                setEmployees(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }

        getEmployees();

    }, [])

    return (

        <div className="container">
            <br />
            <div className="row">
                <div className="col">
                <h1>Pending Payrolls</h1>
                </div>
                <div className="d-flex">
                    <a type="button" href="/payroll" class="btn btn-secondary" style={{ float: 'right' }}>Back <i class="fa fa-reply"></i></a>
                </div>
            </div>
            <table style={{ textAlign: "center" }} className="table">
                <thead>
                    <tr>
                        <th>EIDㅤ</th>
                        <th>Departmentㅤ</th>
                        <th>Payroll status</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee =>
                        employee.payrollStatus === "Disabled" && employee.HR_active === "Active" ? (
                            <tr key={employee._id}>
                                <td>{employee.emp_id}</td>
                                <td>{employee.department}</td>
                                <td>{employee.payrollStatus}</td>
                                <td><button className="btn btn-success btn-sm" onClick={() => {
                                    history.push(`/update/${employee._id}`); //navigates to updated page
                                    window.location.replace(`http://localhost:3000/payroll/add/${employee._id}`); //this is used to clear form
                                }} >Create Payroll <i class="fa fa-plus"></i></button></td>
                            </tr>
                        ) : null
                    )}
                </tbody>
            </table>
        </div>
    )
}