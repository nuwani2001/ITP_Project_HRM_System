import { useEffect, useState } from "react";
import Plot from 'react-plotly.js'
import Calendar from 'react-calendar';
import'./Calender.css';
import axios from "axios";

export default function LeaveRequestReport(){

     const [date, setDate] = useState(new Date());

    //bar chart 
    const[maternityLeaveCount,setMaternityLeaveCount] = useState(0);
    const[sickLeaveCount,setSickLeaveCount] = useState (0);
    const[annualLeaveCount,setAnuualLeaveCount] = useState(0);
    const[paternalLeaveCount,setPaternalLeaveCount]=useState(0);
    const[shortLeaveCount,setShortLeaveCount]=useState(0);
    const getData =() => {
        let urls = [
            `http://localhost:8070/leave/reason/sick Leave`,
            'http://localhost:8070/leave/reason/Maternity Leave',
            'http://localhost:8070/leave/reason/Annual Leave',
            'http://localhost:8070/leave/reason/Paternal Leave',
            'http://localhost:8070/leave/reason/short Leave'
        ];
        Promise.all(urls.map((urls)=>axios.get(urls))).then(([
            {data: sickLeave},
            {data: MaternityLeave},
            {data: AnnualLeave},
            {data: PaternalLeave},
            {data: shortLeave}
             ])=>{
                console.log(sickLeave);
                setSickLeaveCount(sickLeave.leave.length)
                setMaternityLeaveCount(MaternityLeave.leave.length);
                setAnuualLeaveCount(AnnualLeave.leave.length);
                setPaternalLeaveCount(PaternalLeave.leave.length);
                setShortLeaveCount(shortLeave.leave.length);
             });

    }

    useEffect (()=>{
        getData();
    },[]);
  
    return (
        <div style={{marginLeft:"20px",marginRight:"20px"}}>
            <hr></hr>
            <a  href="/leave/" type="button" class="btn btn-outline-dark"style={{float:"left"}}>back <i class="fa fa-reply"/></a>
            <center><h1>Leave Report</h1></center><hr></hr>
            <br></br>
            <div className="row">

                
            <div className="col">    
                       
                    <div className="card text-white bg-dark mb-3" style={{maxWidth: "19rem",maxHeight:"800px"}}>
                    <div className="card-header"><center><h3>Leaves allocated for a year</h3></center></div>
                    <div className="card-body">
                    <p className="card-text"><center><h2>Annual Leave</h2></center></p>
                    <p className="card-text"><center><h2> 14 </h2></center></p>
                    <p className="card-text"><center><h2>Sick Leave</h2></center></p>
                    <p className="card-text"><center><h2> 07 </h2></center></p>
                    <p className="card-text"><center><h2>Short Leave</h2></center></p>
                    <p className="card-text"><center><h2> 07 </h2></center></p>
                    <p className="card-text"><center><h2>Maternity Leave </h2></center></p>
                    <p className="card-text"><center><h2> 84 </h2></center></p>
                    <p className="card-text"><center><h2>Paternal Leave</h2></center></p>
                    <p className="card-text"><center><h2> 01 </h2></center></p>
                    </div>
                    </div>

                    {/* <div className="card text-white bg-dark mb-3" style={{maxWidth: "19rem",maxHeight:"250px"}}>
                    <div className="card-header"><center><h3>Absent</h3></center></div>
                    <div className="card-body">
                    <p className="card-text"><center><h1>50</h1></center></p>
                    </div>
                    </div> */}
            </div>
            

                <div className="col">

                    <Plot

                        data = {[{
                             
                            type: 'bar',
                            // x: ['reason','hat','cat','bat'],
                            // y: [29,50,100,20],
                            x: ['Sick Leave','Annual leave','Maternity Leave','Paternal Leave','short Leave'],
                            y: [sickLeaveCount,annualLeaveCount,maternityLeaveCount,paternalLeaveCount,shortLeaveCount]
                        }]}
                        layout={ {title: 'Number of leaves applied',width:700,height: 650,xaxis:{type:"category",title: 'Leave Reason'},yaxis:{title: 'Number of Leaves'}} }

                       //Plotly.newPlot('myDiv', data);
                    />

                </div>  


                <div className="col" >
                    <center>
                    <div className="app">   
                            
                            <div className='calendar-container'>
                            <Calendar onChange={setDate} value={date} />

                            <span className='bold'>Todays Date is:</span>{' '}
                            </div>
                            <p className='text-center'>
                                {date.toDateString()}
                            </p>
                    </div> 
                    </center>       
                </div>

         
                
                <table class="table table-hover table-dark" style={{align:"center"}}>
                <thead><tr style={{align:"center"}}><center><h3>Number of leaves granted</h3></center></tr></thead>
                   <thead>
                        <tr>
                        <th scope="col">Maternity Leave</th>
                        <th scope="col">Sick Leave</th>
                        <th scope="col">Annual Leave</th>
                        <th scope="col">Paternal Leave</th>
                        <th scope="col">Short Leave</th>
                        </tr>
                        
                    </thead>
               
                    <tbody>
                        <tr>
                        
                        <td>{maternityLeaveCount}</td>
                        <td>{sickLeaveCount}</td>
                        <td>{annualLeaveCount}</td>
                        <td>{paternalLeaveCount}</td>
                        <td>{shortLeaveCount}</td>
                        </tr>
                      
                        
                    </tbody>
                </table>
               
                
        <br></br>
            </div>
            
        </div>


    );
        
    
}