import React, { useState } from "react";
import axios from 'axios';

export default function AddPregnant() {
    const [eid, seteid] = useState("");
    const [name, setname] = useState("");
    const [deliverydate, setdeliverydate] = useState("");
    const [prechild, setprechild] = useState("");
    const [age, setage] = useState("");
    const [phone, setphone] = useState("");
    const [relative, setrelative] = useState("");
    const [token, settoken] = useState("");
    const [frock, setfrock] = useState("");
    const [cliniccard, setcliniccard] = useState("");
    const [recdate, setrecdate] = useState("");
    const [pressure, setpressure] = useState("");


    function sendData(e) {
        e.preventDefault();

        const newPreg = {
            eid,
            name,
            deliverydate,
            prechild,
            age,
            phone,
            relative,
            token,
            frock,
            cliniccard,
            recdate,
            pressure
        }

        axios.post("http://localhost:8070/Pregemployee/add", e = newPreg).then(() => {
            alert("Pregnant details added");
            window.location.replace("http://localhost:3000/health/addpregnant");

        }).catch((err) => {
            alert(err)
        })

    }

    function demo(e){
        seteid("E00007");
        setname("Sooriyakanthage Malithi Gamage Aariyasinghe");
        setdeliverydate("2023-02-25");
        setprechild("3");
        setage("29");
        setphone("0722011111");
        setrelative("0789468821");
        settoken("given");
        setfrock("given");
        setcliniccard("given");
        setrecdate("2022-06-05");
        setpressure("pressure and cholesterol- normal");
    }

    return (
        <div>
            <div className="container">
                <br></br>

                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary" onClick={(e)=>{
                    demo(e);
                    }}>Demo</button>
        </div>
                <form onSubmit={sendData} >
                    <h3>Add Pregnant Employees</h3>
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="eid" class="form-label">Employee ID</label>
                            <input type="text" class="form-control" id="eid" value={eid} pattern="[E0-9]{6}" onChange={(e) => {
                                seteid(e.target.value);
                            }} required />
                        </div>


                        <div class="col-md-6">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" value={name} onChange={(e) => {
                                setname(e.target.value);
                            }} required />
                        </div>
                    </div>


                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="deliverydate" class="form-label">Delivery date</label>
                            <input type="date" class="form-control" id="deliverydate" value={deliverydate} onChange={(e) => {
                                setdeliverydate(e.target.value);
                            }} required />
                        </div>



                        <div class="col-md-6">
                            <label for="prechild" class="form-label">Previous Child Count</label>
                            <input type="Number" class="form-control" id="prechild" value={prechild} onChange={(e) => {
                                setprechild(e.target.value);
                            }} required />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="age" class="form-label">Age</label>
                            <input type="Number" class="form-control" id="age" value={age} onChange={(e) => {
                                setage(e.target.value);
                            }} required />
                        </div>



                        <div class="col-md-6">
                            <label for="phone" class="form-label">Phone Number</label>
                            <input type="text" class="form-control" id="phone" value={phone} pattern="[0-9]{10}" onChange={(e) => {
                                setphone(e.target.value);
                            }} required />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="relative" class="form-label">Relative's Phone Number</label>
                            <input type="text" class="form-control" id="relative" value={relative} pattern="[0-9]{10}" onChange={(e) => {
                                setrelative(e.target.value);
                            }} />
                        </div>


                        <div class="col-md-6">
                            <label for="pressure" class="form-label">Pressure/ Cholesterol</label>
                            <input type="text" class="form-control" id="pressure" value={pressure} onChange={(e) => {
                                setpressure(e.target.value);
                            }} />
                        </div>
                    </div>

                    <br></br>
                    <br></br>

                    <label for="token" class="form-label">Meal Token</label>
                    <br></br>
                    <div class="form-check-inline" >
                        <label class="form-check-label" for="tgiven">
                            <input type="radio" class="form-check-input" name="token" id="tgiven" value="Given" onChange={(e) => {
                                settoken(e.target.value);
                            }} />Given
                        </label>
                    </div>
                    <div class="form-check-inline">
                        <label class="form-check-label" for="tnotgiven">
                            <input type="radio" class="form-check-input" name="token" id="tnotgiven" value="Not Given" onChange={(e) => {
                                settoken(e.target.value);
                            }} />Not Given
                        </label>
                    </div>



                    <br></br>
                    <label for="frock" class="form-label" >Pregnancy Frock</label>
                    <br></br>
                    <div class="form-check-inline" >
                        <label class="form-check-label" for="fgiven">
                            <input type="radio" class="form-check-input" name="frock" id="fgiven" value="Given" onChange={(e) => {
                                setfrock(e.target.value);
                            }} />Given
                        </label>
                    </div>
                    <div class="form-check-inline">
                        <label class="form-check-label" for="fnotgiven">
                            <input type="radio" class="form-check-input" name="frock" id="fnotgiven" value="Not Given" onChange={(e) => {
                                setfrock(e.target.value);
                            }} />Not Given
                        </label>
                    </div>


                    <br></br>
                    <label for="cliniccard" class="form-label">Clinic Card</label>
                    <br></br>
                    <div class="form-check-inline" >
                        <label class="form-check-label" for="cgiven">
                            <input type="radio" class="form-check-input" name="cliniccard" id="cgiven" value="Given" onChange={(e) => {
                                setcliniccard(e.target.value);
                            }} />Given
                        </label>
                    </div>
                    <div class="form-check-inline">
                        <label class="form-check-label" for="cnotgiven">
                            <input type="radio" class="form-check-input" name="cliniccard" id="cnotgiven" value={"Not Given"} onChange={(e) => {
                                setcliniccard(e.target.value);
                            }} />Not Given
                        </label>
                    </div>

                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="recdate" class="form-label">Recieved date</label>
                            <input type="date" class="form-control" id="recdate" value={recdate} onChange={(e) => {
                                setrecdate(e.target.value);
                            }} />
                        </div>
                    </div>

                    <br></br>
                    <button type="submit" class="btn btn-primary">Submit <i class="fa fa-check"></i></button>


                    <a href="/health/viewpregnant" type="button" class="btn btn-secondary" style={{ marginLeft: "40px" }}>back <i class="fa fa-reply"></i></a>

                </form>
            </div>
        </div>
    )

}