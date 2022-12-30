import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Plot from "react-plotly.js";
import ReactMonthPicker from "react-month-picker";
import "react-month-picker/css/month-picker.css";

export default function MonthlyAttChart() {

    console.log("HELLO");
    let [employees, setEmployee] = useState([]);
    let [month, setmonth] = useState("");
    let [year, setYear] = useState("");
    let [allEmp, setAllEmp] = useState([]);
    let [empCount, setEmpCount] = useState(0)

    let Jan = 0, Feb = 0, Mar = 0, Apr = 0, May = 0, Jun = 0, Jul = 0, Aug = 0, Sep = 0, Oct = 0, Nov = 0, Dec = 0
    let count = 0


    const handleMonth = (event) => {
        setmonth(event.target.value);
        console.log("Month: " + month);
    };

    const handleYear = (event) => {
        setYear(event.target.value);
        console.log("Year: " + year);
    };

    function forloop() {
        count = employees.length;
        for (let i = 0; i < count; i++) {
            console.log("INSIDE THE FOR LOOP")
            console.log("Time: " + employees[i]["timeI"])
            if (employees[i]["timeI"].includes("Jan") && employees[i]["timeI"].includes(year))
                Jan++
            else if (employees[i]["timeI"].includes("Feb") && employees[i]["timeI"].includes(year))
                Feb++
            else if (employees[i]["timeI"].includes("Mar") && employees[i]["timeI"].includes(year))
                Mar++
            else if (employees[i]["timeI"].includes("Apr") && employees[i]["timeI"].includes(year))
                Apr++
            else if (employees[i]["timeI"].includes("May") && employees[i]["timeI"].includes(year))
                May++
            else if (employees[i]["timeI"].includes("Jun") && employees[i]["timeI"].includes(year))
                Jun++
            else if (employees[i]["timeI"].includes("Jul") && employees[i]["timeI"].includes(year))
                Jul++
            else if (employees[i]["timeI"].includes("Aug") && employees[i]["timeI"].includes(year))
                Aug++
            else if (employees[i]["timeI"].includes("Sep") && employees[i]["timeI"].includes(year))
                Sep++
            else if (employees[i]["timeI"].includes("Oct") && employees[i]["timeI"].includes(year))
                Oct++
            else if (employees[i]["timeI"].includes("Nov") && employees[i]["timeI"].includes(year))
                Nov++
            else if (employees[i]["timeI"].includes("Dec") && employees[i]["timeI"].includes(year))
                Dec++
        }
        console.log("September: " + Sep)
    }
    forloop()

    function getAttendanceDetails() {
        console.log("Month: " + month + "\nYear: " + year);
        // let dt = month + "/" + "*/" + year;
        const getAttendance = async () => {
            const { data: res } = await axios.get(`http://localhost:8070/attendance/getAttDet/`);
            setEmployee(res);

            function getEmployees() {
                axios.get("http://localhost:8070/employees").then((res) => {
                    console.log(res.data);
                    setAllEmp(res.data);
                }).catch((err) => {
                    alert(err.message);
                })
            }
            getEmployees();
        }
        getAttendance();



    }

    return (
        <div className="mainBodyView">
            <a href="/attendence">
                <button className="btn btn-secondary topBackBtn" >Back <i class="fa fa-reply"/></button>
            </a>

            <center>
                <Plot
                    data={[
                        {
                            type: "bar",
                            x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            y: [(Jan / count) * 100,
                            (Feb / count) * 100,
                            (Mar / count) * 100,
                            (Apr / count) * 100,
                            (May / count) * 100,
                            (Jun / count) * 100,
                            (Jul / count) * 100,
                            (Aug / count) * 100,
                            (Sep / count) * 100,
                            (Oct / count) * 100,
                            (Nov / count) * 100,
                            (Dec / count) * 100,]
                        }
                    ]}

                    layout={
                        { width: 1000, height: 500, title: "Average monthly attendance" }
                    }
                />
            </center>

            <div className="selectMenu">
                <select value={month} onChange={handleMonth} className="dropdown">
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                </select>

                <select value={year} onChange={handleYear} className="dropdown">
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>

                <button className=" btn-primary" onClick={getAttendanceDetails}>Generate chart</button>
            </div>



            <div className="tbl">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Emp No</th>
                            <th scope="col">Emp Name</th>
                            <th scope="col">No of days attended</th>
                            <th scope="col">Total work days</th>
                            <th scope="col">Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allEmp.map((employee) => {
                            let counter = 0
                            let percentage = 0
                            employees.map((emp) => {
                                // console.log("HEHE: " + emp.empNo)
                                // let searchDate = year+"-"+month
                                // console.log(emp.timeI)
                                if (employee.emp_id == emp.empNo && emp.timeI.includes(month) && emp.timeI.includes(year)) {
                                    // console.log(searchDate)
                                    console.log("Month: " + month + " Year: " + year)
                                    counter++
                                }
                                let avg = parseFloat(counter / 30)
                                percentage = parseFloat(avg * 100).toFixed(2) + "%"
                            })

                            return (
                                <tr>
                                    <td>{employee.emp_id}</td>
                                    <td>{employee.full_name}</td>
                                    <td>{counter}</td>
                                    <td>{30}</td>
                                    <td>{percentage}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}