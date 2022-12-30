import React ,{useState,useEffect} from "react";
import axios from "axios";
import { useHistory} from "react-router-dom";

export default function ViewAllLeaveRequests(){
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
                 <a  href="/leave/add" type="button" class="btn btn-outline-dark">Request leave <i class="fa fa-plus"></i></a>
                 <a  href="/Report" type="button" class="btn btn-outline-dark">View Report  <i class="fa fa-bar-chart"/></a>
                 <a href="/leave/find" type="button" class="btn btn-outline-dark"> Search leaves  <i class="fa fa-search"/></a>
                
            </div>
           
        <div className="container">
            <br></br>
            <hr></hr>
            <center><h1>All leave request made</h1></center>
            <hr></hr>
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
                                }}>Update <i class="fa fa-pencil"></i></button></td>
                                <td><button className="btn btn-danger"onClick={()=>{
                                    history.push(`/delete/${leave._id}`);
                                    window.location.replace(`http://localhost:3000/leave/delete/${leave._id}`);
                                }}>Delete <i class="fa fa-trash-o"></i></button></td>

                             
            
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

        </div>
    )

}