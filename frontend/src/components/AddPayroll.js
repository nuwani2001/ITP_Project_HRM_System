import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AddPayroll() {
    const [emp_id, setEid] = useState(""); //state is eid
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

    const [payrollStatus] = useState("Enabled");

    const { u, id } = useParams(); //??????????????????

    useEffect(() => {
        axios.get(`http://localhost:8070/employees/get/${id}`).then((res) => {
            console.log(res.data.employees);
            setEid(res.data.employees.emp_id);
            setName(res.data.employees.full_name);
            setDepartment(res.data.employees.department);
            setBankDetails(res.data.employees.bankDetails);
            setNoOfLeaves(res.data.employees.noOfLeaves);
            setOtHours(res.data.employees.otHours);
            setWorkedHours(res.data.employees.workedHours);
            setEtf(res.data.employees.etf);
            setEpf(res.data.employees.epf);
            setBobinateAllowance(res.data.employees.bobinateAllowance);
            setShiftAllowance(res.data.employees.shiftAllowance);
            setDeductions(res.data.employees.deductions);
            setSalary(res.data.employees.salary);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    function update(e) {
        e.preventDefault();

        const newEmployee = {
            emp_id,
            name,
            department,
            bankDetails,
            noOfLeaves,
            otHours,
            workedHours,
            etf,
            epf,
            bobinateAllowance,
            shiftAllowance,
            deductions,
            salary
        }
        axios.post(`http://localhost:8070/payroll/add/`, newEmployee).then(() => {
            alert("Payroll added");
            window.location.replace("http://localhost:3000/payroll/pending");
        }).catch((err) => {
            alert("Error, Payroll NOT added");
        })

        //updating payroll status
        const payroll = {
            payrollStatus
        }
        axios.put(`http://localhost:8070/payroll/update/status/${emp_id}`, payroll).then(() => {

        }).catch((err) => {
            alert("Error, Payroll status NOT updated");
        })
    }

    function demo() { //function for demo button
        setBankDetails("BOC, Malabe, 498-1974635");
        setWorkedHours(50);
        setEtf("Enabled");
        setEpf("Disabled");
        setBobinateAllowance("Enabled");
        setShiftAllowance("Disabled");
        setDeductions(5000);
        setSalary(150000);
    }

    return (
        //bootstrap form
        <div className="container">
            <br/>
            <div className="row">
                <div className="col">
                    <h1>Add Payroll Details</h1>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary" onClick={() => {
                        demo();
                    }}>Demo</button>
                </div>
            </div>
            <form onSubmit={update}>
                <div className="form-group">
                    <label for="eid">Employee ID</label>
                    <input type="text" className="form-control" id="eid" value={emp_id} placeholder="Enter Employee ID" disabled onChange={(e) => { //onchange means that when a change happens(change is entering a name or age or gender in the form) then some action/event will happen
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
                    <select class="custom-select my-1 mr-sm-2" id="department" value={department} disabled onChange={(e) => {
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
                    <input type="text" className="form-control" id="noOfLeaves" value={noOfLeaves} placeholder="Enter Number Of Leaves" onChange={(e) => { //onchange means that when a change happens(change is entering a name or age or gender in the form) then some action/event will happen
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
                    <input type="number" className="form-control" id="workedHours" value={workedHours} min="0" step="0.1" placeholder="Enter Worked Hours" required onChange={(e) => {
                        setWorkedHours(e.target.value); //whenever a change happens, setGender function will be executed, setGender assigns the values typed in the forms to the gender state
                    }} />
                </div>
                <div class="form-group">
                    <label class="my-1 mr-2" for="etf">ETF</label>
                    <select class="custom-select my-1 mr-sm-2" id="etf" value={etf} required onChange={(e) => {
                        setEtf(e.target.value); //whenever a change happens, setAge function will be executed, setAge assigns the values typed in the forms to the age state
                    }}>
                        <option value="" selected>Choose...</option>
                        <option value="Enabled">Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="my-1 mr-2" for="epf">EPF</label>
                    <select class="custom-select my-1 mr-sm-2" id="epf" value={epf} required onChange={(e) => {
                        setEpf(e.target.value); //whenever a change happens, setAge function will be executed, setAge assigns the values typed in the forms to the age state
                    }}>
                        <option value="" selected>Choose...</option>
                        <option value="Enabled">Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="my-1 mr-2" for="epf">Bobbin Allowance</label>
                    <select class="custom-select my-1 mr-sm-2" id="epf" value={bobinateAllowance} required onChange={(e) => {
                        setBobinateAllowance(e.target.value); //whenever a change happens, setAge function will be executed, setAge assigns the values typed in the forms to the age state
                    }}>
                        <option value="" selected>Choose...</option>
                        <option value="Enabled">Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="my-1 mr-2" for="epf">Shift Allowance</label>
                    <select class="custom-select my-1 mr-sm-2" id="epf" value={shiftAllowance} required onChange={(e) => {
                        setShiftAllowance(e.target.value); //whenever a change happens, setAge function will be executed, setAge assigns the values typed in the forms to the age state
                    }}>
                        <option value="" selected>Choose...</option>
                        <option value="Enabled">Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="deductions">Deductions</label>
                    <input type="number" className="form-control" id="deductions" required value={deductions} min="0" step="0.01" placeholder="Enter Deductions" onChange={(e) => {
                        setDeductions(e.target.value); //whenever a change happens, setGender function will be executed, setGender assigns the values typed in the forms to the gender state
                    }} />
                </div>
                <div className="form-group">
                    <label for="salary">Employee Salary</label>
                    <input type="number" className="form-control" id="salary" value={salary} min="20000" step="0.01" placeholder="Enter Employee Salary" required onChange={(e) => { //onchange means that when a change happens(change is entering a name or age or gender in the form) then some action/event will happen
                        setSalary(e.target.value); //whenever a change happens, setName function will be executed, setName assigns the values typed in the forms to the name state
                    }} />
                </div>
                <a type="button" href="/payroll/pending" class="btn btn-secondary">Back <i class="fa fa-reply"></i></a>
                <button type="submit" className="btn btn-success btn-md" style={{ float: 'right' }}>Submit <i class="fa fa-check"></i></button>
                <br /><br />
            </form>
        </div>
    )
}

export default AddPayroll;
