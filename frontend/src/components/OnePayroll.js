//component that displays all students

import React, { useState, useEffect } from 'react'; //useEffect takes what needs to be displayed during the rendering of a component
import { useHistory, useParams } from 'react-router-dom'; //this is needed for update page
import axios from "axios";
// import Search from './Search';

export default function OnePayroll() {

    //first you must take the array that is being returned from the read function(http://localhost:8070/student/)
    const [employee, setEmployee] = useState([]);
    let history = useHistory();

    let { id } = useParams(); //assigns url parameter to variable

    useEffect(() => {
        function getEmployee() {
            // implements how and from where the data is taken from
            axios.get(`http://localhost:8070/payroll/search/${id}`).then((res) => {
                console.log(res.data);
                setEmployee(res.data);
                // if(employee.data == null){
                //     alert("Employee doesn't exist");
                //     window.location.replace("http://localhost:3000/payroll/")
                // }
            }).catch((err) => {
                alert(err.message);
            })
        }

        getEmployee();

    }, [])

    return (

        <div className="container-fluid">
            <br /><h1>Single Payroll</h1>
            <table style={{ textAlign: "center" }} className="table">
                <thead>
                    <tr>
                        <th>EID</th>
                        <th>Ename</th>
                        <th>Department</th>
                        <th>Bank Details</th>
                        {/* <th>Number of leaves</th>
                        <th>OT Hours</th> */}
                        <th>Worked Hours</th>
                        <th>ETF</th>
                        <th>EPF</th>
                        <th>Bobbin Allowance</th>
                        <th>Shift Allowance</th>
                        <th>Deductions</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {employees.map(employee =>
                        employee.eid === null ? ( */}
                        {employee.map(employee =>
                            
                            <tr>
                                <td>{employee.eid}</td>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.bankDetails}</td>
                                {/* <td>{employee.noOfLeaves}</td>
                        <td>{employee.otHours}</td> */}
                                <td>{employee.workedHours}</td>
                                <td>{employee.etf}</td>
                                <td>{employee.epf}</td>
                                <td>{employee.bobinateAllowance}</td>
                                <td>{employee.shiftAllowance}</td>
                                <td>{employee.deductions}</td>
                                <td>{employee.salary}</td>
                                <td><button className="btn btn-success btn-sm" onClick={() => {
                                    history.push(`/update/${employee._id}`); //navigates to updated page
                                    window.location.replace(`http://localhost:3000/payroll/update/${employee._id}`); //this is used to clear form
                                }} >Update <i class="fa fa-pencil"></i></button></td>
                                <td><button className="btn btn-danger btn-sm" onClick={() => {
                                    history.push(`/delete/${employee._id}`);
                                    window.location.replace(`http://localhost:3000/payroll/delete/${employee._id}`); //this is used to clear form
                                }}>Delete <i class="fa fa-trash-o fa-lg"></i></button></td>
                            </tr>
                            )}
                        {/* ) : null)
                    )} */}
                </tbody>
                <br /><a type="button" href="/payroll" class="btn btn-secondary" style={{ float: 'right' }}>Back <i class="fa fa-reply"></i></a>
            </table>
        </div>
    )
}