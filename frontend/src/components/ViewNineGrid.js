import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

export default function ViewNineGrid() {
    // let [majEmployees, setMajEmployee] = useState([]);
    let [employee, setEmployee] = useState([]);
    let [checkList, setCheckList] = useState([]);
    const [empNo, setEmpNo] = useState("");

    function updateinfo() {
        const getEmp = async () => {
            const { data: res } = await axios.get('http://localhost:8070/employees/');
            setEmployee(res);
            console.log(employee);
        }
        getEmp();

        const getCheckList = async () => {
            const { data: res } = await axios.get('http://localhost:8070/checkList/getCheckList');
            setCheckList(res);
            console.log(checkList);
        }
        getCheckList();

        for (let emp of employee) {
            let score = 0;
            let category;
            let empNo = emp["emp_id"];
            console.log("EMPID: " + empNo);

            let skill = emp["skill"];
            let skillArr = skill.split(",");
            for (let s of skillArr) {
                for (let chk of checkList) {
                    if (s == chk["name"]) {
                        score += chk["score"];
                        break;
                    }
                }
            }

            console.log("Score: " + score);
            if (score <= 5) {
                category = "BAD HIRES";
            }
            else if (score <= 10) {
                category = "UP OR OUT GRINDERS";
            }
            else if (score <= 15) {
                category = "UP OR OUT DILEMMAS";
            }
            else if (score <= 20) {
                category = "CORE PLAYERS";
            }
            else if (score <= 30) {
                category = "WORKHORSES";
            }
            else if (score <= 40) {
                category = "GENIUSES";
            }
            else if (score <= 60) {
                category = "HIGH PERFORMERS";
            }
            else if (score <= 70) {
                category = "HIGH POTENTIAL";
            }
            else if (score <= 100) {
                category = "STARS";
            }
            axios.put(`http://localhost:8070/employees/updateEmp/${empNo}`, { score: score, skill: skill, category: category }).then(() => {
                // alert("employee Updated")
                console.log("employee updated");
            }).catch((err) => {
                alert(err);
            })
        }
    }

    return (
        <div>

            <div className="btnHeader">
                <a href="/skillmetric/viewCheckList">
                    <button class="btn btn-primary btnView">View checkList <i class="fa fa-eye"/></button>
                </a>
                <button class="btn btn-success btnView" onClick={updateinfo}>Update Info <i class="fa fa-pencil"/></button>
                <button class="btn btn-warning btnView" onClick={() => {
                    window.location.replace(`/skillmetric/viewNineGridReport`);
                }}>Generate report <i class="fa fa-bar-chart"/></button>

                <input type="text"  id="search" className="searchBarSkill" placeholder="Search..." pattern="[E0-9]{6}"  onChange={(e) => { setEmpNo(e.target.value.toUpperCase()) }} />
                    <button class="btn btn-primary btnView" type="submit" onClick={() => {
                    window.location.replace(`/skillmetric/viewSingleEmployee/${empNo}`);
                }}>Search <i class="fa fa-search"/></button>

            </div>
            <center>
                <table class="table tblEmp">
                    <tbody>
                        <tr>
                            <td><button className="btn btn-primary btnDim" onClick={() => {
                                window.location.replace(`/skillmetric/ViewEmployeesInCategory/${"GENIUSES"}`);
                            }}>GENIUSES</button></td>
                            <td><button className="btn btn-primary btnDim" onClick={() => {
                                window.location.replace(`/skillmetric/ViewEmployeesInCategory/${"HIGH POTENTIAL"}`);
                            }}>HIGH POTENTIAL</button></td>
                            <td><button className="btn btn-primary btnDim" onClick={() => {
                                window.location.replace(`/skillmetric/ViewEmployeesInCategory/${"STARS"}`);
                            }}>STARS</button></td>
                        </tr>
                        <tr>
                            <td><button className="btn btn-primary btnDim" onClick={() => {
                                window.location.replace(`/skillmetric/ViewEmployeesInCategory/${"UP OR OUT DILEMMAS"}`);
                            }}>UP OR OUT DILEMMAS</button></td>
                            <td><button className="btn btn-primary btnDim" onClick={() => {
                                window.location.replace(`/skillmetric/ViewEmployeesInCategory/${"CORE PLAYERS"}`);
                            }}>CORE PLAYERS</button></td>
                            <td><button className="btn btn-primary btnDim" onClick={() => {
                                window.location.replace(`/skillmetric/ViewEmployeesInCategory/${"HIGH PERFORMERS"}`);
                            }}>HIGH PERFORMERS</button></td>
                        </tr>
                        <tr>
                            <td><button className="btn btn-primary btnDim" onClick={() => {
                                window.location.replace(`/skillmetric/ViewEmployeesInCategory/${"BAD HIRES"}`);
                            }}>BAD HIRES</button></td>
                            <td><button className="btn btn-primary btnDim" onClick={() => {
                                window.location.replace(`/skillmetric/ViewEmployeesInCategory/${"UP OR OUT GRINDERS"}`);
                            }}>UP OR OUT GRINDERS</button></td>
                            <td><button className="btn btn-primary btnDim" onClick={() => {
                                window.location.replace(`/skillmetric/ViewEmployeesInCategory/${"WORKHORSES"}`);
                            }}>WORKHORSES</button></td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </div>
    )
}