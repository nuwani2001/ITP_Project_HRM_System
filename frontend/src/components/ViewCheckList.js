import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

export default function ViewCheckList() {
    let [checkLists, setCheckList] = useState([]);

    useEffect(() => {
        const getCheckList = async () => {
            const { data: res } = await axios.get('http://localhost:8070/checkList/getCheckList');
            setCheckList(res);
            console.log(checkLists);
        }
        getCheckList();
    }, [])


    return (
        <div className="mainBodyView">
            <a href="/skillmetric/">
                    <button className="btn btn-secondary" style={{marginRight: "40px"}}>Back <i class="fa fa-reply"/></button>
            </a>
            <a href="/skillmetric/addCheckList">
                <button class="btn btn-primary">Add checkList <i class="fa fa-plus"></i></button>
            </a>
            <div className="container-fluid">
                <table class="table table-borderless cen">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Score</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {checkLists.map((checkList) => {
                            return (
                                <tr>
                                    <td>{checkList.name}</td>
                                    <td>{checkList.score}</td>
                                    <td>{checkList.date}</td>
                                    <td>
                                        <button type="button" className="btn btn-success" onClick={() => {
                                            window.location.replace(`/skillmetric/updateCheckList/${checkList._id}`);
                                        }}>Update  <i class="fa fa-pencil"/></button>
                                        <button type="button" className="btn btn-danger btnView" onClick={() => {
                                            window.location.replace(`/skillmetric/deleteCheckList/${checkList._id}`);
                                        }}>Delete <i class="fa fa-trash-o fa-lg"/></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}