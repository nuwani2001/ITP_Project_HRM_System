import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DeletePayroll(){
    const [eid, setEid] = useState(""); //state is eid
    const [name, setName] = useState(""); //state is name
    const [department, setDepartment] = useState(""); 
    const [bankDetails, setBankDetails] = useState("");  
    const [noOfLeaves, setNoOfLeaves] = useState(""); 
    const [otHours, setOtHours] = useState(""); 
    const [workedHours, setWorkedHours,] = useState(""); 
    const [etf, setEtf,] = useState(""); 
    const [epf, setEpf] = useState(""); 
    const [bobinateAllowance, setBobinateAllowance] = useState(""); 
    const [shiftAllowance, setShiftAllowance] = useState(""); 
    const [deductions, setDeductions] = useState(""); 
    const [salary, setSalary] = useState(""); 

    const [payrollStatus, setPayrollStatus] = useState("Disabled");

    const {del, id} = useParams(); 

    useEffect(() =>{
        axios.get(`http://localhost:8070/payroll/get/${id}`).then((res) =>{
            console.log(res.data.employee);
            setEid(res.data.employee.eid);
            setName(res.data.employee.name);
            setDepartment(res.data.employee.department);
            setBankDetails(res.data.employee.bankDetails);
            setNoOfLeaves(res.data.employee.noOfLeaves);
            setOtHours(res.data.employee.otHours);
            setWorkedHours(res.data.employee.workedHours);
            setEtf(res.data.employee.etf);
            setEpf(res.data.employee.epf);
            setBobinateAllowance(res.data.employee.bobinateAllowance);
            setShiftAllowance(res.data.employee.shiftAllowance);
            setDeductions(res.data.employee.deductions);
            setSalary(res.data.employee.salary);
        }).catch((err) =>{
            console.log(err);
        })
    },[]);

    function deleteData(e){
        e.preventDefault();

        //updating payroll status
        const employee = {
            payrollStatus
        }
        axios.put(`http://localhost:8070/payroll/update/status/${eid}`, employee).then(() => {
            // alert(payrollStatus)
        }).catch((err) => {
            alert("Error, Payroll status was NOT updated");
        })

        axios.delete(`http://localhost:8070/payroll/delete/${id}`).then(() =>{
            alert("Payroll Deleted");
            window.location.replace("http://localhost:3000/payroll");
        }).catch((err) =>{
            alert("Error, Payroll NOT deleted");
        })
    }
    return(
        //bootstrap form
        <div className="container">
            <h1><br/>Delete Payroll Details</h1>
            <form onSubmit={deleteData}> 
                <div className="form-group">
                    <label for="eid">Employee ID</label>
                    <input type="text" className="form-control" id="eid" value={eid} placeholder="Enter Employee Name" disabled/>
                </div>
                <div className="form-group">
                    <label for="name">Employee Name</label>
                    <input type="text" className="form-control" id="name" value={name} placeholder="Enter Employee Name" disabled/>
                </div>
                <div className="form-group">
                    <label for="department">Department</label>
                    <input type="text" className="form-control" id="department" value={department} placeholder="Enter Department" disabled/>
                </div>
                <div className="form-group">
                    <label for="bankDetails">Bank Details</label>
                    <input type="text" className="form-control" id="bankDetails" value={bankDetails} placeholder="Enter Bank Details" disabled/>
                </div>
                {/* <div className="form-group">
                    <label for="noOfLeaves">Number of leaves</label>
                    <input type="text" className="form-control" id="noOfLeaves" value={noOfLeaves} placeholder="Enter Number Of Leaves" disabled/>
                </div>
                <div className="form-group">
                    <label for="otHours">OT Hours</label>
                    <input type="text" className="form-control" id="otHours" value={otHours} placeholder="Enter OT Hours" disabled/>
                </div> */}
                <div className="form-group">
                    <label for="workedHours">Worked Hours</label>
                    <input type="text" className="form-control" id="workedHours" value={workedHours} placeholder="Enter Worked Hours" disabled/>
                </div>
                <div className="form-group">
                    <label for="etf">ETF</label>
                    <input type="text" className="form-control" id="etf" value={etf} placeholder="Enter OT Hours" disabled/>
                </div>
                <div className="form-group">
                    <label for="epf">EPF</label>
                    <input type="text" className="form-control" id="epf" value={epf} placeholder="Enter OT Hours" disabled/>
                </div>
                <div className="form-group">
                    <label for="bobinateAllowance">Bobbin Allowance</label>
                    <input type="text" className="form-control" id="bobinateAllowance" value={bobinateAllowance} placeholder="Enter OT Hours" disabled/>
                </div>
                <div className="form-group">
                    <label for="shiftAllowance">Shift Allowance</label>
                    <input type="text" className="form-control" id="shiftAllowance" value={shiftAllowance} placeholder="Enter OT Hours" disabled/>
                </div>
                <div className="form-group">
                    <label for="deductions">Deductions</label>
                    <input type="text" className="form-control" id="deductions" value={deductions} placeholder="Enter OT Hours" disabled/>
                </div>
                <div className="form-group">
                    <label for="salary">Salary</label>
                    <input type="text" className="form-control" id="salary" value={salary} placeholder="Enter Employee Salary" disabled/>
                </div>
                {/* <div className="form-group">
                    <label for="payrollStatus">Payroll Status</label>
                    <input type="text" className="form-control" id="payrollStatus" value={payrollStatus} placeholder="Enter Employee Salary" disabled/>
                </div> */}
                <a  type="button" href = "/payroll" class="btn btn-secondary">Back <i class="fa fa-reply"></i></a>
                <button onClick={() => setPayrollStatus("Disabled")} type="submit" style={{float: 'right'}} className="btn btn-danger">Delete <i class="fa fa-trash-o fa-lg"></i></button>
                <br/><br/>
            </form>
        </div>
    )
}