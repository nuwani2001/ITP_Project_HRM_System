import { useState,useEffect } from "react";
import axios from "axios";

export default function LeaveRequest(){

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

  
  //function to disable  no of dates and dates till 
  function shortLeave () {

    
    if (document.getElementById("inlineFormCustomSelectPref").value == "short Leave"){
      document.getElementById("Dateto").disabled = true;
      setTimeDiff(0);
    }
    else 
      document.getElementById("Dateto").disabled = false;

  }

  //function to set 84 days for maternity leaves 
  function maternityLeave() {

    if (document.getElementById("inlineFormCustomSelectPref").value == "Maternity Leave"){

      document.getElementById("Dateto").disabled = true;
      setTimeDiff(84);

    }
    else {
      document.getElementById("Dateto").disabled = false;

    }

  }

  //function

  return (
    <div className="container">
      <form onSubmit={sendData} action="/action_page.php" >

      <div className="form-group">
          <label for="GetName">Employee ID :</label>
          <input type="text" className="form-control" id="name" pattern="[E0-9]{6}" title="Start with E and then enter the rest, MUST have only 4 characters" placeholder="Enter employee ID" onChange={(e)=>{
            setempID(e.target.value);
          }}/>
        </div>

        <div className="form-group">
          <label for="GetName">Employee Name :</label>
          <input type="text" className="form-control" id="name" placeholder="Enter name in full" required onChange={(e)=>{
            setName(e.target.value);
          }}/>
        </div>

        

        <div className="form-group">
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Reason : </label>
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" required onChange={(e)=>{
            setReason(e.target.value); 
            shortLeave();
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
            
          }}/>
        </div>

        <div className="form-group">
          <label for="CalculateLeaveDays">Number of days :</label>
          <p className="total-time" id="preliminary-review-total">
                  {total_Days}
                </p>
           
        
        </div>

        <div className="form-group">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>


        
      </form>

      <div style={{marginRight:"0px",marginLeft:"auto",width:"5%"}}>
      <a  href="/leave/" type="button" class="btn btn-outline-dark">back</a>
      </div>
    
    </div>
  )


   
}