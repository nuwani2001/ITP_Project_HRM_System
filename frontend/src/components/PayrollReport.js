import React, { useState, useEffect } from 'react'; //useEffect takes what needs to be displayed during the rendering of a component
import { useHistory, useParams } from 'react-router-dom'; //this is needed for update page
import axios from "axios";

export default function PayrollReport() {
    const [employee, setEmployee] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        function getEmployee() {
            axios.get(`http://localhost:8070/payroll/search/${id}`).then((res) => {
                console.log(res.data);
                setEmployee(res.data[0]);
            }).catch((err) => {
                alert(err.message);
            })
        }

        getEmployee();

    }, [])
    return (
        <div className="container">
            <br/><h1>Payroll</h1><br/>
            <table className='table' style={{margin:"auto", textAlign: 'center'}}>
                <tr>
                    <th className='table-dark'>Employee Details</th>
                    <th className='table-dark'></th>
                </tr>
                <tr>
                    <th>Employee Name   :</th>
                    <td>{employee.name}</td>
                </tr>
                <tr>
                    <th>Employee ID   :</th>
                    <td>{employee.eid}</td>
                </tr>
                <tr>
                    <th>Department   :</th>
                    <td>{employee.department}</td>
                </tr>
                <tr>
                    <th className='table-dark'>Allowances</th>
                    <th className='table-dark'></th>
                </tr>
                <tr>
                    <th>Bobbin   :</th>
                    <td>{employee.bobinateAllowance}</td>
                </tr>
                <tr>
                    <th>Shift   :</th>
                    <td>{employee.shiftAllowance}</td>
                </tr>
                <tr>
                    <th className='table-dark'>Worked Hours   :</th>
                    <td className='table-dark'>{employee.workedHours}</td>
                </tr>
                <tr>
                    <th>(-)Deductions   :</th>
                    <td>{employee.deductions}</td>
                </tr>
                <tr>
                    <th>Basic Salary   :</th>
                    <td>{employee.salary}</td>
                </tr>
                <tr>
                    <th className='table-dark'>Bank Details   :</th>
                    <td className='table-dark'>{employee.bankDetails}</td>
                </tr>
                <tr>
                    <th>ETF   :</th>
                    <td>{employee.etf}</td>
                </tr>
                <tr>
                    <th>EPF   :</th>
                    <td>{employee.epf}</td>
                </tr>
            </table>
            <br/>
            {/* <button type="button" </div>style={{float: 'right'}} className="btn btn-primary" >Print</button> */}
                <a type="button" href = "/payroll" class="btn btn-secondary">Back <i class="fa fa-reply"></i></a><br/><br/>
        </div>
    )
} 