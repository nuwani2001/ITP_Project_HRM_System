import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TransportUpdate(){

    const [vehicle_no, setVehicle_no] = useState("");
    const [vehicle_type, setVehicle_type] = useState("");
    const [driver_name, setDriver_name] = useState("");
    const [driver_contact_no, setDriver_contact_no] = useState("");
    const [company, setCompany] = useState("");
    const [nic, setNic] = useState("");
    const [license_no, setLicense_no] = useState("");
    const [lead_name, setLead_name] = useState("");
    const [lead_contact_no, setLead_contact_no] = useState("");
    const [no_of_seats, setNo_of_seats] = useState();
    const [route, setRoute] = useState("");
    const [distance, setDistance] = useState();
    const [starting_time, setStarting_time] = useState("");
    const [arrival_time, setArrival_time] = useState("");

    const {update, id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8070/transport/get/${id}`).then((res)=>{
            console.log(res.data.transport);
            setVehicle_no(res.data.transport.vehicle_no);
            setVehicle_type(res.data.transport.vehicle_type);
            setDriver_name(res.data.transport.driver_name);
            setDriver_contact_no(res.data.transport.driver_contact_no);
            setCompany(res.data.transport.company);
            setNic(res.data.transport.nic);
            setLicense_no(res.data.transport.license_no);
            setLead_name(res.data.transport.lead_name);
            setLead_contact_no(res.data.transport.lead_contact_no);
            setNo_of_seats(res.data.transport.no_of_seats);
            setRoute(res.data.transport.route);
            setDistance(res.data.transport.distance);
            setStarting_time(res.data.transport.starting_time);
            setArrival_time(res.data.transport.arrival_time);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);

    function updateData(e){
        e.preventDefault();

        const newTransport = {
            vehicle_no,
            vehicle_type,
            driver_name,
            driver_contact_no,
            company,
            nic,
            license_no,
            lead_name,
            lead_contact_no,
            no_of_seats,
            route,
            distance,
            starting_time,
            arrival_time
        }

        axios.put(`http://localhost:8070/transport/update/${id}`, newTransport).then(()=>{
            alert("Transport Service Updated");
            window.location.replace("http://localhost:3000/transport");
        }).catch((err)=>{
            alert(err);
        })
    }

    return(
        <div className="container">
            <br></br>
            <h1>Update Transport Service</h1>
            <hr></hr>
            <br></br>
            <form onSubmit={updateData}>
                <div className="row">
                    <div class="col">
                        <label for="vehicle_no" class="form-label">Vehicle Number</label>
                        <input type="text" class="form-control" id="vehicle_no" value={vehicle_no} placeholder="Eg: ABC 1234" pattern="[a-zA-Z]{2}[\s][0-9]{4}|[a-zA-Z]{3}[\s][0-9]{4}" required onChange={(e)=>{
                            setVehicle_no(e.target.value);
                        }}/>
                    </div>
                    <div className="col">
                        <label for="vehicle_type" class="form-label">Vehicle Type (Van / Bus)</label>
                        <input type="text" class="form-control" id="vehicle_type" value={vehicle_type} placeholder="Eg: Van" pattern="[V||v][A||a][N||n]||[B||b][U||u][S||s]" required onChange={(e)=>{
                            setVehicle_type(e.target.value);
                        }}/>
                    </div>
                </div>
                <br></br>
                <div class="mb-3">
                    <label for="driver_name" class="form-label">Driver's Name</label>
                    <input type="text" class="form-control" id="driver_name" value={driver_name} placeholder="Eg: A.B.C. Perera" maxlength="100" pattern="[A-Za-z .]{1,100}" required onChange={(e)=>{
                            setDriver_name(e.target.value);
                        }}/>
                </div>
                <div className="row">
                    <div class="col">
                        <label for="driver_contact_no" class="form-label">Driver's Contact Number</label>
                        <input type="text" class="form-control" id="driver_contact_no" value={driver_contact_no} placeholder="Enter the Contact No" pattern="0[0-9]{9}" required onChange={(e)=>{
                                setDriver_contact_no(e.target.value);
                            }}/>
                    </div>
                    <div className="col"></div>
                </div>
                <br/>
                <div class="mb-3">
                    <label for="company" class="form-label">Hired Company</label>
                    <input type="text" class="form-control" id="company" value={company} placeholder="Eg: ABC Pvt Ltd" required onChange={(e)=>{
                            setCompany(e.target.value);
                        }}/>
                </div>
                <div className="row">
                    <div class="col">
                        <label for="nic" class="form-label">Driver's NIC Number</label>
                        <input type="text" class="form-control" id="nic" value={nic} placeholder="123456789V" pattern="[0-9]{9}[V||v]|[0-9]{12}" required onChange={(e)=>{
                            setNic(e.target.value);
                        }}/>
                    </div>
                    <div class="col">
                        <label for="license_no" class="form-label">Driving License Number</label>
                        <input type="text" class="form-control" id="license_no" value={license_no} placeholder="Enter a Valid License Number" pattern="[A-Z][0-9]{7}" required onChange={(e)=>{
                            setLicense_no(e.target.value);
                        }}/>
                    </div>
                </div>
                <br></br>
                <div class="mb-3">
                    <label for="lead_name" class="form-label">Lead's Name</label>
                    <input type="text" class="form-control" id="lead_name" value={lead_name} placeholder="Eg: A.B.C. Perera" maxlength="100" pattern="[A-Za-z .]{1,100}" required onChange={(e)=>{
                            setLead_name(e.target.value);
                        }}/>
                </div>
                <div className="row">
                <div class="col">
                        <label for="lead_contact_no" class="form-label">Lead's Contact Number</label>
                        <input type="text" class="form-control" id="lead_contact_no" value={lead_contact_no} placeholder="Enter the Contact No" pattern="0[0-9]{9}" required onChange={(e)=>{
                            setLead_contact_no(e.target.value);
                        }}/>
                    </div>
                    <div class="col">
                        <label for="no_of_seats" class="form-label">Number of Seats</label>
                        <input type="number" class="form-control" id="no_of_seats" value={no_of_seats} placeholder="No. of Seats" min="1" required onChange={(e)=>{
                            setNo_of_seats(e.target.value);
                        }}/>
                    </div>
                </div>
                <br></br>
                <hr></hr>
                <div className="row">
                    <div class="col">
                        <label for="route" class="form-label">Route</label>
                        <input type="text" class="form-control" id="route" value={route} placeholder="Starting Point" required onChange={(e)=>{
                                setRoute(e.target.value);
                            }}/>
                    </div>
                    <div class="col">
                        <label for="distance" class="form-label">Distance (km)</label>
                        <input type="number" class="form-control" id="distance" value={distance} placeholder="Distance from the starting point to company" min="0" step="0.001" required onChange={(e)=>{
                                setDistance(e.target.value);
                            }}/>
                    </div>
                </div>
                <div className="row">
                    <div class="col">
                        <label for="starting_time" class="form-label">Starting Time</label>
                        <input type="time" class="form-control" id="starting_time" value={starting_time} required onChange={(e)=>{
                            setStarting_time(e.target.value);
                        }}/>
                    </div>
                    <div class="col">
                        <label for="arrival_time" class="form-label">Arrival Time</label>
                        <input type="time" class="form-control" id="arrival_time" value={arrival_time} required onChange={(e)=>{
                            setArrival_time(e.target.value);
                        }}/>
                    </div>
                </div>
                <br></br>
                <br></br>
                <a href="/transport" className="btn btn-danger">Cancel <i class="fa fa-times"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit" class="btn btn-success">Update <i class="fa fa-check"></i></button>
                <br></br>
                <br></br>
            </form>
        </div>
    )

}

export default TransportUpdate;