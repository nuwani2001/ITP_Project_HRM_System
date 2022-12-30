import axios from "axios";
import { useEffect, useState } from "react";

function TransportAll(){
    const [transports, setTransports] = useState([]);
    
    useEffect(()=>{
        function getTransports(){
            axios.get("http://localhost:8070/transport/").then((res)=>{
                console.log(res.data);
                setTransports(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getTransports();
    }, [])

    return(
        <div>
            <br></br>
            
            <div>
                <div style={{width:"90%", margin:"auto"}}>

                    <div style={{marginRight:"0px", marginLeft:"auto", width:"30%"}}>
                        
                        <form class="d-flex" role="search">
                            <a style={{marginRight:"0px", marginLeft:"auto"}} href="/transport/add" className="btn btn-primary" >Add Service <i class="fa fa-plus"></i></a>
                            <a style={{marginRight:"0px", marginLeft:"10px"}} href="/transport/find" className="btn btn-secondary">Find <i class="fa fa-search"></i></a>
                            <a style={{marginRight:"0px", marginLeft:"10px"}} href="/transport/report" className="btn btn-secondary"><i class="fa fa-bar-chart"> Report</i></a>
                        </form>
                    </div>

                    <br></br>
                    <h1>Transport Services</h1>
                    <br></br>
                    <table className="table table-borderless" style={{fontSize:"13px"}}>
                        <tr>
                            <th><center>Vehicle Number</center></th>
                            <th><center>Vehicle Type</center></th>
                            <th><center>Driver's Name</center></th>
                            <th><center>Driver's Contact No</center></th>
                            <th><center>Hired Company</center></th>
                            <th><center>Driver's NIC Number</center></th>
                            <th><center>Driving License Number</center></th>
                            <th><center>Lead's Name</center></th>
                            <th><center>Lead's Contact No</center></th>
                            <th><center>Number of Seats</center></th>
                            <th><center>Route</center></th>
                            <th><center>Distance (km)</center></th>
                            <th><center>Starting Time</center></th>
                            <th><center>Arrival Time</center></th>
                            <th></th>
                            <th></th>
                        </tr>

                        <tbody>
                            {
                                transports.map((transport)=>(
                                    <tr>
                                        <td><center>{transport.vehicle_no}</center></td>
                                        <td><center>{transport.vehicle_type}</center></td>
                                        <td><center>{transport.driver_name}</center></td>
                                        <td><center>{transport.driver_contact_no}</center></td>
                                        <td><center>{transport.company}</center></td>
                                        <td><center>{transport.nic}</center></td>
                                        <td><center>{transport.license_no}</center></td>
                                        <td><center>{transport.lead_name}</center></td>
                                        <td><center>{transport.lead_contact_no}</center></td>
                                        <td><center>{transport.no_of_seats}</center></td>
                                        <td><center>{transport.route}</center></td>
                                        <td><center>{transport.distance}</center></td>
                                        <td><center>{transport.starting_time}</center></td>
                                        <td><center>{transport.arrival_time}</center></td>
                                        <td>
                                            <button className="btn btn-success btn-sm" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/transport/update/${transport._id}`);
                                            }}>Update <i class="fa fa-pencil"></i></button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/transport/delete/${transport._id}`);
                                            }}>Delete <i class="fa fa-trash-o fa-lg"></i></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default TransportAll;