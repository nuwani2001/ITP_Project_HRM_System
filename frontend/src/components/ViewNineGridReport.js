import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Plot from "react-plotly.js";

export default function ViewNineGridReport(){
    let badHires = 0, 
    uoog = 0,
    workhorses = 0,
    uood = 0,
    corePlayers = 0,
    highPerformers = 0,
    geniuses = 0,
    highPotential = 0,
    stars = 0

    let [employees, setEmployee] = useState([]);
    useEffect(() => {
        function getEmployees() {
            axios.get("http://localhost:8070/employees").then((res) => {
                setEmployee(res.data);
                
                
                // console.log(employees);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getEmployees();
    }, [])

    function fill(){
        employees.map((employee)=>{
            console.log(employee.category);
            if(employee.category == "BAD HIRES")
                badHires++;
            else if(employee.category == "UP OR OUT GRINDERS")
                uoog++;
            else if(employee.category == "WORKHORSES")
                workhorses++;
            else if(employee.category == "UP OR OUT DILEMMAS")
                uood++;
            else if(employee.category == "CORE PLAYERS")
                corePlayers++;
            else if(employee.category == "HIGH PERFORMERS")
                highPerformers++;
            else if(employee.category == "GENIUSES")
                geniuses++;
            else if(employee.category == "HIGH POTENTIAL")
                highPotential++;
            else if(employee.category == "STARS")
                stars++;
        })
        console.log(uoog)
    }
    fill();

    return(
        <div className="mainBodyView">
            <a href="/skillmetric/">
                    <button className="btn btn-secondary">Back</button>
            </a>
            <center>
                <Plot
                    data={[
                        {
                            type: "bar",
                            x: ['bad hires', 'up or out grinders', 'workhorses', 'up or out dilemmas', 'core players', 'high performers', 'geniuses', 'high potential', 'stars'],
                            y: [badHires, uoog, workhorses, uood, corePlayers, highPerformers, geniuses, highPotential, stars]
                        }
                    ]}

                    layout={
                        { width: 1300, height: 600, title: "Employees in each category" }
                    }
                />
            </center>
        </div>    
    )
}