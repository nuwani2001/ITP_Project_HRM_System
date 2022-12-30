import { useState } from "react";
import axios from "axios";

export default function TransportAdd(){

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

    function sendData(e){
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

        axios.post("http://localhost:8070/transport/add", newTransport).then(()=>{
            alert("Transport Service Added !");
            setVehicle_no("");
            setVehicle_type("");
            setDriver_name("");
            setDriver_contact_no("");
            setCompany("");
            setNic("");
            setLicense_no("");
            setLead_name("");
            setLead_contact_no("");
            setNo_of_seats();
            setRoute("");
            setDistance();
            setStarting_time("");
            setArrival_time("");
            window.location.replace("http://localhost:3000/transport/add");
        }).catch((err)=>{
            alert(err);
        })

    }

    function demo(e){
        e.preventDefault();
        setVehicle_no("LM 2639");
        setVehicle_type("BUS");
        setDriver_name("D.L. Ranasinghe");
        setDriver_contact_no("0748797052");
        setCompany("Shan Tours");
        setNic("701640136V");
        setLicense_no("O5493856");
        setLead_name("P.K.T. Rajapaksha");
        setLead_contact_no("0719975013");
        setNo_of_seats(63);
        setRoute("Dangalle");
        setDistance(20.8);
        setStarting_time("12:50");
        setArrival_time("13:45");
    }


    function reset(e){
        e.preventDefault();
        setVehicle_no("");
        setVehicle_type("");
        setDriver_name("");
        setDriver_contact_no("");
        setCompany("");
        setNic("");
        setLicense_no("");
        setLead_name("");
        setLead_contact_no("");
        setNo_of_seats("");
        setRoute("");
        setDistance("");
        setStarting_time("");
        setArrival_time("");
    }
    

    return(
        <div className="container">
            <br></br>
            <div className="row">
                <div className="col">
                <h1>Add a New Transport Service</h1>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary" onClick={(e)=>{
                        demo(e);
                    }}>Demo</button>
                </div>
            </div>
            <hr></hr>
            <br></br>
            <form onSubmit={sendData}>
                <div className="row">
                    <div class="col">
                        <label for="vehicle_no" class="form-label">Vehicle Number</label>
                        <input type="text" class="form-control" id="vehicle_no" placeholder="Eg: ABC 1234" pattern="[a-zA-Z]{2}[\s][0-9]{4}|[a-zA-Z]{3}[\s][0-9]{4}" value={vehicle_no} required onChange={(e)=>{
                            setVehicle_no(e.target.value);
                        }}/>
                    </div>
                    <div className="col">
                        <label for="vehicle_type" class="form-label">Vehicle Type (Van / Bus)</label>
                        <input type="text" class="form-control" id="vehicle_type" placeholder="Eg: Van" pattern="[V||v][A||a][N||n]||[B||b][U||u][S||s]" value={vehicle_type} required onChange={(e)=>{
                            setVehicle_type(e.target.value);
                        }}/>
                    </div>
                </div>
                <br></br>
                <div class="mb-3">
                    <label for="driver_name" class="form-label">Driver's Name</label>
                    <input type="text" class="form-control" id="driver_name" placeholder="Eg: A.B.C. Perera" maxLength="100" pattern="[A-Za-z .]{1,100}" value={driver_name} required onChange={(e)=>{
                            setDriver_name(e.target.value);
                        }}/>
                </div>
                <div className="row">
                    <div class="col">
                        <label for="driver_contact_no" class="form-label">Driver's Contact Number</label>
                        <input type="text" class="form-control" id="driver_contact_no" placeholder="Enter the Contact No" pattern="0[0-9]{9}" value={driver_contact_no} required onChange={(e)=>{
                                setDriver_contact_no(e.target.value);
                            }}/>
                    </div>
                    <div className="col"></div>
                </div>
                <br/>
                <div class="mb-3">
                    <label for="company" class="form-label">Hired Company</label>
                    <input type="text" class="form-control" id="company" placeholder="Eg: ABC Pvt Ltd" value={company} required onChange={(e)=>{
                            setCompany(e.target.value);
                        }}/>
                </div>
                <div className="row">
                    <div class="col">
                        <label for="nic" class="form-label">Driver's NIC Number</label>
                        <input type="text" class="form-control" id="nic" placeholder="123456789V" pattern="[0-9]{9}[V||v]|[0-9]{12}" value={nic} required onChange={(e)=>{
                            setNic(e.target.value);
                        }}/>
                    </div>
                    <div class="col">
                        <label for="license_no" class="form-label">Driving License Number</label>
                        <input type="text" class="form-control" id="license_no" placeholder="Enter a Valid License Number" pattern="[A-Z][0-9]{7}" value={license_no} required onChange={(e)=>{
                            setLicense_no(e.target.value);
                        }}/>
                    </div>
                </div>
                <br></br>
                <div class="mb-3">
                    <label for="lead_name" class="form-label">Lead's Name</label>
                    <input type="text" class="form-control" id="lead_name" placeholder="Eg: A.B.C. Perera" maxLength="100" pattern="[A-Za-z .]{1,100}" value={lead_name} required onChange={(e)=>{
                            setLead_name(e.target.value);
                        }}/>
                </div>
                <div className="row">
                <div class="col">
                        <label for="lead_contact_no" class="form-label">Lead's Contact Number</label>
                        <input type="text" class="form-control" id="lead_contact_no" placeholder="Enter the Contact No" pattern="0[0-9]{9}" value={lead_contact_no} required onChange={(e)=>{
                            setLead_contact_no(e.target.value);
                        }}/>
                    </div>
                    <div class="col">
                        <label for="no_of_seats" class="form-label">Number of Seats</label>
                        <input type="number" class="form-control" id="no_of_seats" placeholder="No. of Seats" min="1" value={no_of_seats} required onChange={(e)=>{
                            setNo_of_seats(e.target.value);
                        }}/>
                    </div>
                </div>
                <br></br>
                <hr></hr>
                <div className="row">
                    <div class="col">
                        <label for="route" class="form-label">Route</label>
                        <input type="text" class="form-control" id="route" placeholder="Starting Point" value={route} required onChange={(e)=>{
                                setRoute(e.target.value);
                            }}/>
                    </div>
                    <div class="col">
                        <label for="distance" class="form-label">Distance (km)</label>
                        <input type="number" class="form-control" id="distance" placeholder="Distance from the starting point to company" min="0" step="0.001" value={distance} required onChange={(e)=>{
                                setDistance(e.target.value);
                            }}/>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div class="col">
                        <label for="starting_time" class="form-label">Starting Time</label>
                        <input type="time" class="form-control" id="starting_time" value={starting_time} required onChange={(e)=>{
                            setStarting_time(e.target.value);
                        }}/>
                    </div>
                    <div class="col">
                        <label for="arrivale_time" class="form-label">Arrival Time</label>
                        <input type="time" class="form-control" id="arrivale_time" value={arrival_time} required onChange={(e)=>{
                            setArrival_time(e.target.value);
                        }}/>
                    </div>
                </div>
                <br></br>
                <br></br>
                <a href="/transport" className="btn btn-secondary">Back <i class="fa fa-reply"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-danger" onClick={(e)=>{
                    reset(e);
                }}>Reset <i class="fa fa-refresh"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit" className="btn btn-success">Submit <i class="fa fa-check"></i></button>
                <br></br>
                <br></br>
            </form>
        </div>
    )
}