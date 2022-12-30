import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ViewAllEmployees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        function getEmployees() {
            axios.get("http://localhost:8070/employees").then((res) => {
                console.log(res.data);
                setEmployees(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getEmployees();

    }, [])


    // employees.map((employee) => {
    //     function colorChange() {
    //         if (employee.HR_active == "Inactive") {
    //             employee.HR_active.style.color = 'red';
    //         } else {
    //             employee.HR_active.style.color = 'black';
    //         }
    //     }
    // }
    // )
    // {
    //     employees.map((employee) => {
    //     function colorChange() {
            
    //         if (employee.HR_active == "Inactive") {
    //             employee.HR_active.style.fontcolor  = '#A00101';
    //         } else {
    //             employee.HR_active.style.fontcolor = 'color:black';
    //         }
    //     }
    //     })
    // }
    return (
        <div>
            <br></br>
            <div className="container">
                <div style={{ marginRight: "0px", marginLeft: "auto", width: "30%" }}>

                    <form class="d-flex" role="search">
                        <a style={{ marginRight: "0px", marginLeft: "10px" }} href="/employees/add" className="btn btn-primary">Add Employee <i class="fa fa-plus"></i></a>
                        <a style={{ marginRight: "0px", marginLeft: "10px" }} href="/employees/search" className="btn btn-secondary">Search <i class="fa fa-search" /></a>
                        <a style={{ marginRight: "0px", marginLeft: "10px" }} href="/employees/report" className="btn btn-secondary">Report <i class="fa fa-bar-chart" /></a>
                    </form>
                </div>
                <br></br>
                <center><h3>All Employees</h3></center>
                <table className="table table-borderless">
                    <tr>
                        <th>Employee ID</th>
                        <th>Full Name</th>
                        <th>NIC</th>
                        <th>Employment Type</th>
                        <th>Designation</th>
                        <th>HR Active</th>
                    </tr>
                    <tbody>
                        {
                            employees.map((employee) => (
                                <>
 
                                    <tr>
                                        <td>{employee.emp_id}</td>
                                        <td>{employee.full_name}</td>
                                        <td>{employee.nic}</td>
                                        <td>{employee.employment_type}</td>
                                        <td>{employee.designation}</td>
                                        <td>
                                        {employee.HR_active}
                                        </td>

                                        <td><button className="btn btn-primary" onClick={() => {
                                            window.location.replace(`http://localhost:3000/employees/get/${employee._id}`);
                                        }}>View <i class="fa fa-eye" /></button></td>
                                        <td><button className="btn btn-success" onClick={() => {
                                            window.location.replace(`http://localhost:3000/employees/update/${employee._id}`);
                                        }}>Update <i class="fa fa-pencil" /></button></td>
                                        <td><button className="btn btn-danger" onClick={() => {
                                            window.location.replace(`http://localhost:3000/employees/delete/${employee._id}`);
                                        }}>Delete <i class="fa fa-trash-o fa-lg" /></button></td>

                                    </tr>
                                </>
                            ))
                        }
                    </tbody>
                </table>
                {/* <center>
                    <button className="btn btn-primary" onClick={() => {
                        window.location.replace(`http://localhost:3000/employees/add/`);
                    }}>Add New Employee</button>
                </center> */}
            </div>

        </div>
    )

}