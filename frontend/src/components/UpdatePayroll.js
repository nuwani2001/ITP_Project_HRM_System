import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdatePayroll() {
    const [eid, setEid] = useState(""); //state is eid
    const [name, setName] = useState(""); //state is name
    const [department, setDepartment] = useState("");
    const [bankDetails, setBankDetails] = useState("");
    // const [noOfLeaves, setNoOfLeaves] = useState("");
    // const [otHours, setOtHours] = useState("");
    const [workedHours, setWorkedHours,] = useState("");
    const [etf, setEtf,] = useState("");
    const [epf, setEpf] = useState("");
    const [bobinateAllowance, setBobinateAllowance] = useState("");
    const [shiftAllowance, setShiftAllowance] = useState("");
    const [deductions, setDeductions] = useState("");
    const [salary, setSalary] = useState("");

    const { u, id } = useParams(); //??????????????????

    useEffect(() => {
        axios.get(`http://localhost:8070/payroll/get/${id}`).then((res) => {
            console.log(res.data.employee);
            setEid(res.data.employee.eid);
            setName(res.data.employee.name);
            setDepartment(res.data.employee.department);
            setBankDetails(res.data.employee.bankDetails);
            // setNoOfLeaves(res.data.employee.noOfLeaves);
            // setOtHours(res.data.employee.otHours);
            setWorkedHours(res.data.employee.workedHours);
            setEtf(res.data.employee.etf);
            setEpf(res.data.employee.epf);
            setBobinateAllowance(res.data.employee.bobinateAllowance);
            setShiftAllowance(res.data.employee.shiftAllowance);
            setDeductions(res.data.employee.deductions);
            setSalary(res.data.employee.salary);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    function update(e) {
        e.preventDefault();

        const newEmployee = {
            eid,
            name,
            department,
            bankDetails,
            // noOfLeaves,
            // otHours,
            workedHours,
            etf,
            epf,
            bobinateAllowance,
            shiftAllowance,
            deductions,
            salary
        }
        axios.put(`http://localhost:8070/payroll/update/${id}`, newEmployee).then(() => {
            alert("Payroll updated");
            window.location.replace("http://localhost:3000/payroll");
        }).catch((err) => {
            alert("Error, Payroll was NOT updated");
        })
    }

    return (
        //bootstrap form
        <div className="container">
            <h1><br />Update Payroll Details</h1>
            <form onSubmit={update}>
                <div className="form-group">
                    <label for="eid">Employee ID</label>
                    <input type="text" className="form-control" id="eid" value={eid} placeholder="Enter Employee ID" disabled onChange={(e) => { //onchange means that when a change happens(change is entering a name or age or gender in the form) then some action/event will happen
                        setEid(e.target.value); //whenever a change happens, setName function will be executed, setName assigns the values typed in the forms to the name state
                    }} />
                </div>
                <div className="form-group">
                    <label for="name">Employee Name</label>
                    <input type="text" className="form-control" id="name" value={name} disabled placeholder="Enter Employee Name" onChange={(e) => { //onchange means that when a change happens(change is entering a name or age or gender in the form) then some action/event will happen
                        setName(e.target.value); //whenever a change happens, setName function will be executed, setName assigns the values typed in the forms to the name state
                    }} />
                </div>
                <div class="form-group">
                    <label class="my-1 mr-2" for="department">Department</label>
                    <select class="custom-select my-1 mr-sm-2" id="department" value={department} disabled required onChange={(e) => {
                        setDepartment(e.target.value);//whenever a change happens, setName function will be executed, setName assigns the values typed in the forms to the name state
                    }}>
                        <option value="Engineering">Engineering</option>
                        <option value="Finance">Finance</option>
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Production">Production</option>
                        <option value="Shipping">Shipping</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="bankDetails">Bank Details</label>
                    <input type="text" className="form-control" id="bankDetails" value={bankDetails} placeholder="Enter Bank Details" required onChange={(e) => { //onchange means that when a change happens(change is entering a name or age or gender in the form) then some action/event will happen
                        setBankDetails(e.target.value); //whenever a change happens, setName function will be executed, setName assigns the values typed in the forms to the name state
                    }} />
                </div>
                {/* <div className="form-group">
                    <label for="noOfLeaves">Number Of Leaves</label>
                    <input type="text" className="form-control" id="noOfLeaves" value={noOfLeaves} placeholder="Enter Number Of Leaves" disabled onChange={(e) => { //onchange means that when a change happens(change is entering a name or age or gender in the form) then some action/event will happen
                        setNoOfLeaves(e.target.value); //whenever a change happens, setName function will be executed, setName assigns the values typed in the forms to the name state
                    }} />
                </div>
                <div className="form-group">
                    <label for="otHours">OT Hours</label>
                    <input type="text" className="form-control" id="otHours" value={otHours} placeholder="Enter OT hours" onChange={(e) => { //onchange means that when a change happens(change is entering a name or age or gender in the form) then some action/event will happen
                        setOtHours(e.target.value); //whenever a change happens, setName function will be executed, setName assigns the values typed in the forms to the name state
                    }} />
                </div> */}
                <div className="form-group">
                    <label for="workedHours">Worked Hours</label>
                    <input type="text" className="form-control" id="workedHours" value={workedHours} pattern="[0-9.]+" placeholder="Enter Worked Hours" required onChange={(e) => {
                        setWorkedHours(e.target.value); //whenever a change happens, setGender function will be executed, setGender assigns the values typed in the forms to the gender state
                    }} />
                </div>
                <div class="form-group">
                    <label class="my-1 mr-2" for="etf">ETF</label>
                    <select class="custom-select my-1 mr-sm-2" id="etf" value={etf} required onChange={(e) => {
                        setEtf(e.target.value); //whenever a change happens, setAge function will be executed, setAge assigns the values typed in the forms to the age state
                    }}>
                        <option value="Enabled">Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="my-1 mr-2" for="epf">EPF</label>
                    <select class="custom-select my-1 mr-sm-2" id="epf" value={epf} required onChange={(e) => {
                        setEpf(e.target.value); //whenever a change happens, setAge function will be executed, setAge assigns the values typed in the forms to the age state
                    }}>
                        <option value="Enabled">Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="my-1 mr-2" for="epf">Bobbin Allowance</label>
                    <select class="custom-select my-1 mr-sm-2" id="epf" value={bobinateAllowance} required onChange={(e) => {
                        setBobinateAllowance(e.target.value); //whenever a change happens, setAge function will be executed, setAge assigns the values typed in the forms to the age state
                    }}>
                        <option value="Enabled">Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="my-1 mr-2" for="epf">Shift Allowance</label>
                    <select class="custom-select my-1 mr-sm-2" id="epf" value={shiftAllowance} required onChange={(e) => {
                        setShiftAllowance(e.target.value); //whenever a change happens, setAge function will be executed, setAge assigns the values typed in the forms to the age state
                    }}>
                        <option value="Enabled">Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="deductions">Deductions</label>
                    <input type="text" className="form-control" id="deductions" value={deductions} pattern="[0-9.]+" placeholder="Enter Deductions" onChange={(e) => {
                        setDeductions(e.target.value); //whenever a change happens, setGender function will be executed, setGender assigns the values typed in the forms to the gender state
                    }} />
                </div>
                <div className="form-group">
                    <label for="salary">Employee Salary</label>
                    <input type="text" className="form-control" id="salary" value={salary} pattern="[0-9.]+" placeholder="Enter Employee Salary" required onChange={(e) => { //onchange means that when a change happens(change is entering a name or age or gender in the form) then some action/event will happen
                        setSalary(e.target.value); //whenever a change happens, setName function will be executed, setName assigns the values typed in the forms to the name state
                    }} />
                </div>
                <a  type="button" href = "/payroll" class="btn btn-secondary">Back <i class="fa fa-reply"></i></a>
                <button type="submit" className="btn btn-success btn-md" style={{float: 'right'}}>Update <i class="fa fa-pencil"></i></button>
            </form>
        </div>
    )
}

export default UpdatePayroll;
