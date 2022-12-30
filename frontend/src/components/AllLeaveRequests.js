import React ,{useState,useEffect} from "react";
import axios from "axios";
import { useHistory} from "react-router-dom";

export default function AllLeaveRequests(){
    const [leaves,setLeaves]=useState([]);
    let history=useHistory();
    
    useEffect(()=>{
        function getLeaves(){
            axios.get("http://localhost:8070/leave/").then((res)=>{
                console.log(res.data);
                setLeaves(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getLeaves();

    },[])

    return (
    
        <div>
            <br></br>
            <div class="btn-group btn-group-lg" role="group" aria-label="Large button group"> &nbsp; &nbsp;
                 <a  href="/leave/add" type="button" class="btn btn-outline-dark">ADD LEAVE</a>
                 <a  href="/Report" type="button" class="btn btn-outline-dark">VIEW REPORT <i class="fa fa-bar-chart"/></a>
                 <a href="/leave/find" type="button" class="btn btn-outline-dark">sEARCH</a>
                
            </div>
           
        <div className="container">
            <br></br>
            <center><h3>All leave request made</h3></center>
            <table className="table table-borderless">
                <tr> 
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Reason</th>
                    <th>Leave applied from</th>
                    <th>Leave applied till</th>
                    <th>Number of days</th>
                </tr>
                <tbody>
                    {
                        leaves.map((leave)=>(
                            <tr>
                                <td>{leave.empID}</td>
                                <td>{leave.name}</td>
                                <td>{leave.reason}</td>
                                <td>{leave.date}</td>
                                <td>{leave.dateTo}</td>
                                <td>{leave.total_Days}</td>
                                
                                <td><button className="btn btn-success" onClick={()=>{
                                    history.push(`/update/${leave._id}`);
                                    window.location.replace(`http://localhost:3000/leave/update/${leave._id}`);
                                }}>Update</button></td>
                                <td><button className="btn btn-danger"onClick={()=>{
                                    history.push(`/delete/${leave._id}`);
                                    window.location.replace(`http://localhost:3000/leave/delete/${leave._id}`);
                                }}>Delete</button></td>

                             
            
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

        </div>
    )

}