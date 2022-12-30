import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SearchEmployeeResult() {

    const { searchby, keyword } = useParams();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        function getEmployees() {
            axios.get(`http://localhost:8070/employees/search/${searchby}/${keyword}`).then((res) => {
                console.log(res.data);
                setEmployees(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        } 

        getEmployees();
    }, [])
    return (
        <>{/*<a style={{ marginRight: "0px", marginLeft: "10px", marginTop: "10px", marginBottom: "10px" }} href="/employees/search" className="btn btn-secondary">Back <i class="fa fa-reply"/></a>*/}
        <div>
            <table className="table table-borderless" style={{ fontSize: "13px" }}>
                <tr>
                    <th>Employee ID</th>
                    <th>Full Name</th>
                    <th>NIC</th>
                    <th>DOB</th>
                    <th>Designation</th>
                    <th>HR Active</th>
                    <th></th>
                    <th></th>
                </tr>

                <tbody>
                    {employees.map((employee) => (
                        <tr>
                            <td>{employee.emp_id}</td>
                            <td>{employee.full_name}</td>
                            <td>{employee.nic}</td>
                            <td>{employee.date_of_birth}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.HR_active}</td>
                            <td><button className="btn btn-primary" onClick={() => {
                                window.location.replace(`http://localhost:3000/employees/get/${employee._id}`);
                            } }>View <i class="fa fa-eye"/></button></td>
                            <td><button className="btn btn-success" onClick={() => {
                                window.location.replace(`http://localhost:3000/employees/update/${employee._id}`);
                            } }>Update <i class="fa fa-pencil"/></button></td>
                            <td><button className="btn btn-danger" onClick={() => {
                                window.location.replace(`http://localhost:3000/employees/delete/${employee._id}`);
                            } }>Delete <i class="fa fa-trash-o fa-lg"/></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div></>
    )

}

export default SearchEmployeeResult;