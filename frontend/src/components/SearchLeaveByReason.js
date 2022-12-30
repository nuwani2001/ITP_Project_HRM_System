import React ,{useState,useEffect} from "react";
import axios from "axios";
import { useHistory, useParams} from "react-router-dom";

export default function SearchLeaveByReason(){
    //const [leaves,setLeaves]=useState([]);
    const [leaveReason,setLeaveReason]=useState([]);
    let history=useHistory();
    const { reason } = useParams(); 
    
    useEffect(()=>{
        function getLeaveReason(){
            axios.get(`http://localhost:8070/leave/reason/${reason}`).then((res)=>{
                console.log(res.data);
                setLeaveReason(res.data.leave);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getLeaveReason();

    },[])

    
    

    

    return (
        <div className="container">
            <br></br>
            
            <table className="table table-borderless">
                <center>
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
                            leaveReason.map((leave)=>(
                                <tr>
                                    <td>{leave.empID}</td>
                                    <td>{leave.name}</td>
                                    <td>{leave.reason}</td>
                                    <td>{leave.date}</td>
                                    <td>{leave.dateTo}</td>
                                    <td>{leave.total_Days}</td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                    </center>
                
            </table>

            <a  href="/leave/" type="button" class="btn btn-secondary">back</a>
        </div>
    )

}