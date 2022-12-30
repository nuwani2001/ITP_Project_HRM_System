import React, { useEffect, useState } from "react";
// import React, {Component} from "react";
import axios from "axios";
import "../App.css";
import Plot from "react-plotly.js";
// import Plotly from "react-plotly.js";

export default function EmployeeActiveInactive() {
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

    var activecount = 0;
    var inactivecount = 0;

    employees.map(employee => {
        if (employee.HR_active == "Active") {
            activecount++;
            // console.log("active count = " + activecount);
            // console.log("Name: " + employee.full_name);
        } else {
            inactivecount++;
            // console.log("inactive count = " + inactivecount);
        }
    }
    )

    var manpowercount = 0;
    var companycount = 0;

    employees.map(employee => {
        if (employee.employment_type == "Manpower") {
            manpowercount++;
        } else if(employee.employment_type == "Company"){
            companycount++;
        }
    }
    )


    const year = Date();
    var currYear = new Date(year);
    //InOut Employees
    var countJoined = 0;
    var countLeft = 0;

    employees.map(employee => {
        var dateJ = new Date(employee.date_joined);
        var dateL = new Date(employee.date_left);

        console.log(dateJ.getDay());
        console.log(dateL.getDay());

        // console.log(currYear.getFullYear());

        if (dateJ.getFullYear() == currYear.getFullYear()) {
            countJoined++
        }
        console.log(countJoined);
        if (dateL.getFullYear() == currYear.getFullYear()) {
            countLeft++
        }
    },
    )

    //designation
    var hrManagerCount = 0;
    var hrSuperIntendentCount = 0;
    var dataProcessLeadCount = 0;
    var dataProcessCoordinatiorCount = 0;
    var peopleServiceLeadCount = 0;
    var hrClerkCount = 0;
    var itManagerCount = 0;
    var itClerkCount = 0;
    var engineeringManagerCount = 0;
    var engineeringClerkCount = 0;
    var financeManagerCount = 0;
    var financeClerkCount = 0;
    var productionManagerCount = 0;
    var productionClerkCount = 0;
    var shippingManagerCount = 0;
    var shippingClerkCount = 0;
    employees.map(employee => {
        if (employee.designation == "HR Manager") {
            hrManagerCount++;
        } else if (employee.designation == "HR Super Intendent") {
            hrSuperIntendentCount++;
        } else if (employee.designation == "Data Process Lead") {
            dataProcessLeadCount++;
        } else if (employee.designation == "Data Process Coordinator") {
            dataProcessCoordinatiorCount++;
        } else if (employee.designation == "People Service Lead") {
            peopleServiceLeadCount++;
        } else if (employee.designation == "HR Clerk") {
            hrClerkCount++;
        } else if (employee.designation == "IT Manager") {
            itManagerCount++;
        } else if (employee.designation == "IT Clerk") {
            itClerkCount++;
        } else if (employee.designation == "Engineering Manager") {
            engineeringManagerCount++;
        } else if (employee.designation == "Engineering Clerk") {
            engineeringClerkCount++;
        } else if (employee.designation == "Finance Manager") {
            financeManagerCount++;
        } else if (employee.designation == "Finance Clerk") {
            financeClerkCount++;
        } else if (employee.designation == "Production Manager") {
            productionManagerCount++;
        } else if (employee.designation == "Production Clerk") {
            productionClerkCount++;
        } else if (employee.designation == "Shipping Manager") {
            shippingManagerCount++;
        } else if (employee.designation == "Shipping Clerk") {
            shippingClerkCount++;
        }

    })


    return (
        <>
            <a style={{ marginRight: "0px", marginLeft: "25px", marginTop: "10px" }} href="/" className="btn btn-secondary">Back <i class="fa fa-reply"/></a>
            <br/><br/>
            <center>
                <div>
                    <Plot
                        data={[
                            {
                                type: 'pie',
                                values: [activecount, inactivecount],
                                labels: ['Active', 'Inactive'],
                                textinfo: "label+percent",
                                textposition: "outside",
                                automargin: true,

                            }
                        ]}

                        layout={
                            {
                                title: "Active and Inactive Employees"
                            }
                        }

                    />

                    <Plot
                        data={[
                            {
                                y: [currYear.getFullYear()],
                                x: [countJoined],
                                type: 'bar',
                                name: 'Joined',
                                orientation: "h",
                                width: 0.25
                            },
                            {
                                y: [currYear.getFullYear()],
                                x: [countLeft],
                                type: 'bar',
                                name: 'Resigned',
                                orientation: "h",
                                width: 0.25
                            },
                        ]}

                        layout={
                            {
                                title: "Number of Joined and Resigned Employees"
                            }
                        }
                    />
                </div>
            </center>
            <center>
                <div>
                    <Plot
                        data={[
                            {
                                x: ["HR Manager", "HR Super Intendent", "Data Process Lead", "Data Process Coordinator", "People Service Lead", "HR Clerk", "IT Manager", "IT Clerk", "Engineering Manager", "Engineering Clerk", "Finance Manager", "Finance Clerk", "Production Manager", "Production Clerk", "Shipping Manager", "Shipping Clerk"],
                                y: [hrManagerCount, hrSuperIntendentCount, dataProcessLeadCount, dataProcessCoordinatiorCount, peopleServiceLeadCount, hrClerkCount, itManagerCount, itClerkCount, engineeringManagerCount, engineeringClerkCount, financeManagerCount, financeClerkCount, productionManagerCount, productionClerkCount, shippingManagerCount, shippingClerkCount],
                                type: 'bar',
                                name: 'Employees',
                                width: 0.75,

                            },
                        ]}

                        layout={
                            {
                                title: "Number of Employees per Designation"
                            }
                        }
                    />
                    <Plot
                        data={[
                            {
                                type: 'pie',
                                values: [manpowercount, companycount],
                                labels: ['Manpower', 'Company'],
                                textinfo: "label+percent",
                                textposition: "outside",
                                automargin: true,

                            }
                        ]}

                        layout={
                            {
                                title: "Manpower and Company Employees"
                            }
                        }

                    />
                </div>
                <div>

                </div>
            </center>
        </>

    )
}