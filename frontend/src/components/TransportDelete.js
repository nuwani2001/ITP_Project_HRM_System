import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TransportDelete(){

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

    const {del, id} = useParams();
    
    useEffect(()=>{
        axios.get(`http://localhost:8070/transport/get/${id}`).then((res)=>{
            console.log(res.data);
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
    },[]);

    function deleteData(e){
        e.preventDefault();

        axios.delete(`http://localhost:8070/transport/delete/${id}`).then(()=>{
            alert("Transport Service Deleted");
            window.location.replace("http://localhost:3000/transport");
        }).catch((err)=>{
            alert(err);
        })
    }

    return(
        <div className="container">
            <br></br>
            <h1>Remove Transport Service</h1>
            <hr></hr>
            <br></br>
            <form onSubmit={deleteData}>
                <div className="row">
                    <div class="col">
                        <label for="vehicle_no" class="form-label">Vehicle Number</label>
                        <input type="text" class="form-control" id="vehicle_no" value={vehicle_no} disabled/>
                    </div>
                    <div className="col">
                        <label for="vehicle_type" class="form-label">Vehicle Type</label>
                        <input type="text" class="form-control" id="vehicle_type" value={vehicle_type} disabled/>
                    </div>
                </div>
                <br></br>
                <div class="mb-3">
                    <label for="driver_name" class="form-label">Driver's Name</label>
                    <input type="text" class="form-control" id="driver_name" value={driver_name} disabled/>
                </div>
                <div className="row">
                    <div class="col">
                        <label for="driver_contact_no" class="form-label">Driver's Contact Number</label>
                        <input type="text" class="form-control" id="driver_contact_no" value={driver_contact_no} disabled/>
                    </div>
                    <div className="col"></div>
                </div>
                <br/>
                <div class="mb-3">
                    <label for="company" class="form-label">Hired Company</label>
                    <input type="text" class="form-control" id="company" value={company} disabled/>
                </div>
                <div className="row">
                    <div class="col">
                        <label for="nic" class="form-label">Driver's NIC Number</label>
                        <input type="text" class="form-control" id="nic" value={nic} disabled/>
                    </div>
                    <div class="col">
                        <label for="license_no" class="form-label">Driving License Number</label>
                        <input type="text" class="form-control" id="license_no" value={license_no} disabled/>
                    </div>
                </div>
                <br></br>
                <div class="mb-3">
                    <label for="lead_name" class="form-label">Lead's Name</label>
                    <input type="text" class="form-control" id="lead_name" value={lead_name} disabled/>
                </div>
                <div className="row">
                <div class="col">
                        <label for="lead_contact_no" class="form-label">Lead's Contact Number</label>
                        <input type="text" class="form-control" id="lead_contact_no" value={lead_contact_no} disabled/>
                    </div>
                    <div class="col">
                        <label for="no_of_seats" class="form-label">Number of Seats</label>
                        <input type="number" class="form-control" id="no_of_seats" value={no_of_seats} disabled/>
                    </div>
                </div>
                <br></br>
                <hr></hr>
                <div className="row">
                    <div class="col">
                        <label for="route" class="form-label">Route</label>
                        <input type="text" class="form-control" id="route" value={route} disabled/>
                    </div>
                    <div class="col">
                        <label for="distance" class="form-label">Distance (km)</label>
                        <input type="number" class="form-control" id="distance" value={distance} disabled/>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div class="col">
                        <label for="starting_time" class="form-label">Starting Time</label>
                        <input type="time" class="form-control" id="starting_time" value={starting_time} disabled/>
                    </div>
                    <div class="col">
                        <label for="arrival_time" class="form-label">Arrival Time</label>
                        <input type="time" class="form-control" id="arrival_time" value={arrival_time} disabled/>
                    </div>
                </div>
                <br></br>
                <br></br>
                
                <a href="/transport" className="btn btn-primary">Cancel <i class="fa fa-times"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit" class="btn btn-danger">Remove <i class="fa fa-trash-o fa-lg"></i></button>
                <br></br>
                <br></br>
            </form>
        </div>
    )

}