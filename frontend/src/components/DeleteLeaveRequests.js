import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DeleteLeaveRequests(){

  //creating variables for each function
  const[empID,setempID]=useState("");
  const[name,setName]=useState("");
  const[reason,setReason]=useState("");
  const[date,setDate]=useState("");
  const[dateTo,setDateTo]=useState("");
  const[total_Days,setTotal_Days]=useState();
  const[status,setStatus]=useState("");
  const {del,id}=useParams();

  useEffect(()=>{
    axios.get(`http://localhost:8070/leave/get/${id}`).then((res)=>{

        console.log(res.data.leave);
        setempID(res.data.leave.empID);
        setName(res.data.leave.name);
        setReason(res.data.leave.reason);
        setDate(res.data.leave.date);
        setDateTo(res.data.leave.dateTo);
        setTotal_Days(res.data.leave.total_Days);
        setStatus(res.data.leave.status);


    }).catch((err)=>{
        console.log(err);
    })
  },[]);

  function deleteLeave(e){
    e.preventDefault();
    axios.delete(`http://localhost:8070/leave/delete/${id}`).then(()=>{
        alert("Leave request deleted");
        window.location.replace("http://localhost:3000/leave");
    }).catch((err)=>{
        alert(err);
    })
  }
return(
    <div className="container">
    <h1>Deleting leaves made...</h1>
    <form onSubmit={deleteLeave}>

        <div className="form-group">
          <label for="GetName">Employee ID :</label>
          <input type="text" className="form-control" id="name" value={empID} placeholder="Enter Employee ID" disabled/>
        </div>

        <div className="form-group">
          <label for="GetName">Employee Name :</label>
          <input type="text" className="form-control" id="name" value={name} placeholder="Enter name in full" disabled/>
        </div>

        <div className="form-group">
          <select class="form-select" aria-label="Default select example"  value={reason} disabled>
              <option selected>Reason :</option>
              <option value="sick Leave">Sick Leave</option>
              <option value="short leave">Short Leave</option>
              <option value="Annual Leave">Annual Leave</option>
              <option value="Maternity Leave">Maternity Leave</option>
              <option value="Paternity Leave">Paternity Leave</option>
          </select>
        </div>

        <div className="form-group">
          <label for="getDatefrom">Leave applied from :</label>
          <input type="date" className="form-control" id="DateFrom" value={date} placeholder="Select the date" disabled/>
        </div>

        <div className="form-group">
          <label for="getDateto">Leave applied till :</label>
          <input type="date" className="form-control" id="DateFrom" value={dateTo} placeholder="Select the date" disabled/>
        </div>

        <div className="form-group">
          <label for="CalculateLeaveDays">Number of days :</label>
          <input type="number" className="form-control" id="TotalDays" value={total_Days} placeholder="Number of dates" disabled/>
        </div>

        <div className="form-group">
          <br></br> <br></br>
        <a  href="/leave/" type="button" class="btn btn-secondary">back <i class="fa fa-reply"/></a>

     
          
        <button type="submit" className="btn btn-danger" style={{float:"right"}}>Delete <i class="fa fa-trash-o fa-lg"/></button>
        </div>


        
      </form>
   </div>
)


}