import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";


export default function SearchLeaveRequests() {

    const [EmpID, setLeaveid] = useState("");
    const [reason,setLeaveReason]=useState("");

    function Searchleave(e) {

        if (document.getElementById("EmpID").checked){

            e.preventDefault();
            window.location.replace(`http://localhost:3000/leave/find/${EmpID}`);

        }
        else if(document.getElementById("reason").checked){

            e.preventDefault();
            window.location.replace(`http://localhost:3000/leave/reason/${reason}`);
        }

        
       
    }
    
    return (
        
            <form onSubmit={Searchleave}>


                <center>
                    <br></br>
                <input onChange = {(e) => {setLeaveid(e.target.value); setLeaveReason(e.target.value)}} className="form-control mr-sm-2" type="search" class="w-25 p-3" placeholder="Search leave request" required aria-label="Search"></input>
                
                <button type="submit" style={{height:"60px",width:"70px"}}><i class="fa fa-search"></i></button>
                {/* <button className="btn btn-outline-success my-2 my-sm-0" class="w-12 p-3" type="submit">Search</button> */}
                <br></br><br></br>

                <div>
                <input type="radio" id="EmpID" name="fav_language" value="Search by EmpID"/>
                <label for="html">Search by EmpID</label>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                
                <input type="radio" id="reason" name="fav_language" value="Search by reason"/>
                <label for="css">Search by reason</label>
                </div>
         
                </center>
            </form>
        
    )
}