import { useState,useEffect } from "react";
import axios from "axios";
export default function AddLeaveRequests(){

   //creating variables for each function
   const[empID,setempID]=useState("");
   const[name,setName]=useState("");
   const[reason,setReason]=useState("");
   const[status,setStatus]=useState("");
   //date calculation variables
   const [dateTo, setPreliminaryEnd] = useState(null);
   const [date, setPreliminaryStart] = useState(null);
   const [total_Days, setTimeDiff] = useState(0);

   /*A function is created to the submit button to fetch
   the data from the form and store it.*/
   function sendData(e){
    e.preventDefault();

    const newLeave={
      empID,name,reason,date,dateTo,total_Days,status
    }
    axios.post("http://localhost:8070/leave/add",newLeave).then(()=>{
      alert("Leave request made")
    }).catch((err)=>{
      alert(err)
    })
    window.location.replace("http://localhost:3000/leave/add");
  }

  //Use effect for date difference calculation
  useEffect(() => {
    if (dateTo !== null && date !== null) {
      let start = new Date(date);
      let end = new Date(dateTo);
      setTimeDiff((end - start) / (1000 * 60 * 60 * 24));
      
    }

  }, [dateTo, date]);

  //function to disable date till and set the dates accordingly
  function shortLeave(e) {
    e.preventDefault();
    if (document.getElementById("inlineFormCustomSelectPref").value == "short Leave"){
      document.getElementById("Dateto").disabled = true;
      setTimeDiff(0);
    }
    else 
      document.getElementById("Dateto").disabled = false;
  }

  function maternityLeave(e) {
    if (document.getElementById("inlineFormCustomSelectPref").value == "Maternity Leave"){
      setPreliminaryEnd(document.getElementById("DateFrom").value);
      document.getElementById("Dateto").stepUp(42);
      setTimeDiff(84);
    }
    else 
      document.getElementById("Dateto").disabled = false;
  }

  //function to set the employee name when given employee ID
  function setEmployeeName (e) {
    e.preventDefault();
    axios.get(`http://localhost:8070/employees/find/names_initials/${empID}`).then((res)=>{
      console.log(res.data.employees[0].full_name);
      setName(res.data.employees[0].full_name);
    }).catch((err)=>{
      alert("Invalid employeeID");
    })
  }



  return (
    <div className="container">
      <hr></hr><center><h1>Add a leave request</h1></center><hr></hr>
      <form onSubmit={sendData} action="/action_page.php" >

      <div className="form-group">
          <label for="GetName">Employee ID :</label> <br></br>
          <input type="text" style={{width:"93%",height:"40px"}} id="name" pattern="[E0-9]{6}" title="Start with E and then enter the rest, MUST have only 4 characters" placeholder="Enter employee ID" onChange={(e)=>{
            setempID(e.target.value);
          }}/>
           <button class="btn btn-outline-dark" style={{float:"right",height:"40px",width:"70px"}} onClick={(e)=>{
          setEmployeeName (e);
        }}><span class="bi bi-check"></span>✓</button> 
          
        
        </div>
        
        

        <div className="form-group">
          <label for="GetName">Employee Name :</label>
          <input type="text" className="form-control" pattern="[A-Z a-z]{1,500}"  id="name" maxLength="500" placeholder="Enter name in full" value={name} required disabled/>
        </div>

        

        <div className="form-group">
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Reason : </label>
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" required onChange={(e)=>{
            setReason(e.target.value); 
           
           
          }}>
          
              <option value="">Choose...</option>
              <option value="sick Leave">Sick Leave</option>
              <option value="short Leave">Short Leave</option>
              <option value="Annual Leave">Annual Leave</option>
              <option value="Maternity Leave">Maternity Leave</option>
              <option value="Paternal Leave">Paternal Leave</option>
          </select>
        </div>

        <div className="form-group">
          <label for="getDatefrom">Leave applied from :</label>
          <input type="date" className="form-control" id="DateFrom" placeholder="Select the date" required onChange={(e)=>{
            setPreliminaryStart(e.target.value);
            
           

          }}/>
        </div>

        <div className="form-group">
          <label for="getDateto">Leave applied till :</label>
          <input type="date" className="form-control" id="Dateto" placeholder="Select the date" required onChange={(e)=>{
            setPreliminaryEnd(e.target.value);
            shortLeave(e);
            maternityLeave(e);
            
          
            
          }}/>
        </div>

        <div className="form-group">
          <label for="CalculateLeaveDays">Number of days :</label>
          <p className="total-time" id="preliminary-review-total">
                  {total_Days}
                </p>
           
        
        </div>

      <div className="form-group">
      <a  href="/leave/" type="button" class="btn btn-secondary">back <i class="fa fa-reply"/></a>  
      <button type="submit" class="btn btn-success" style={{float:"right"}}>Submit <i class="fa fa-check"/></button>
      
      </div>

        
      </form>

      
    
    </div>
  )

}

