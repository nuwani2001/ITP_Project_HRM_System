import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TransportSearchResults(){

    const {find, srchby, keyword} = useParams();
    const [transports, setTransports] = useState([]);

    useEffect(()=>{
        function getTransports(){
            axios.get(`http://localhost:8070/transport/find/${srchby}/${keyword.toUpperCase()}`).then((res)=>{
                console.log(res.data);
                setTransports(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        
        getTransports();
    }, [])
    return(
        <div style={{width:"90%", margin:"auto"}}>
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
    )

}

export default TransportSearchResults;