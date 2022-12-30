import React, { useState } from "react";
import axios from 'axios';

export default function AddSickEmployee() {

  const [eid, seteid] = useState("");
  const [shift, setshift] = useState("");
  const [date, setdate] = useState("");
  const [intime, setintime] = useState("");
  const [outtime, setouttime] = useState("");
  const [treatment, settreatment] = useState("");
  const [remark, setremark] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [phone, setphone] = useState("");
  const [emergency, setemergency] = useState("");
  const [sentTo, setsentto] = useState("");
  const [reason, setreason] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newSEmp = {
      eid,
      shift,
      date,
      intime,
      outtime,
      treatment,
      remark,
      name,
      age,
      phone,
      emergency,
      sentTo,
      reason
    }

    axios.post("http://localhost:8070/Sickemployee/add", e = newSEmp).then(() => {
      alert("Treatment details added");
      window.location.replace("http://localhost:3000/health/addtreat");
    }).catch((err) => {
      alert(err)
    })
  }

  function demo(e){
    e.preventDefault();
    seteid("E00010");
    setshift("8.00 a.m - 2.00 p.m");
    setdate("2022-02-11");
    setintime("11:26");
    setouttime("11:46");
    settreatment("Gave first aid");
    setremark("need to do a surgery");
    setname("Omaththage Ranuja Vilhan Perera");
    setage("22");
    setphone("0722016112");
    setemergency("0719648513");
    setsentto("Biyagama Hospital");
    setreason("Fracture in hand wrist");
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
        <form onSubmit={sendData}>
          <h3>Add Medical Treatments</h3>
          <div class="form-row">
            <div class="col-md-6">
              <label for="eid" class="form-label">Employee ID</label>
              <input type="text" class="form-control" id="eid" pattern="[E0-9]{6}" value={eid} onChange={(e) => {
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
            <div class=" col-md-6">
              <label for="shift">Shift</label>
              <select id="shift" class="form-control" value={shift} onChange={(e) => {
                setshift(e.target.value);
              }}>
                <option selected>8.00 a.m - 2.00 p.m</option>
                <option>2.00 p.m - 8.00 p.m</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="age" class="form-label">Age</label>
              <input type="Number" class="form-control" id="age" value={age} onChange={(e) => {
                setage(e.target.value);
              }} required />
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6">
              <label for="date" class="form-label">Date</label>
              <input type="date" class="form-control" id="date" value={date} onChange={(e) => {
                setdate(e.target.value);
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
              <label for="intime" class="form-label">In Time</label>
              <input type="time" class="form-control" id="intime" value={intime} onChange={(e) => {
                setintime(e.target.value);
              }} required />
            </div>
            <div class="col-md-6">
              <label for="emergency" class="form-label">Emergency Phone Number</label>
              <input type="text" class="form-control" id="emergency" value={emergency} pattern="[0-9]{10}" onChange={(e) => {
                setemergency(e.target.value);
              }} />
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6">
              <label for="outtime" class="form-label">Out Time</label>
              <input type="time" class="form-control" id="outtime" value={outtime} onChange={(e) => {
                setouttime(e.target.value);
              }} required />
            </div>
            <div class="col-md-6">
              <label for="sentTo" class="form-label">Sent To</label>
              <input type="text" class="form-control" id="sentTo" value={sentTo} onChange={(e) => {
                setsentto(e.target.value);
              }} />
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6">
              <label for="treatment" class="form-label">Treatment</label>
              <input type="text" class="form-control" id="treatment" value={treatment} onChange={(e) => {
                settreatment(e.target.value);
              }} required />
            </div>
            <div class="col-md-6">
              <label for="reason" class="form-label">Reason</label>
              <input type="text" class="form-control" id="reason" value={reason} onChange={(e) => {
                setreason(e.target.value);
              }} />
            </div>
          </div>

          <div class="mb-2">
            <label for="remark" class="form-label">Remarks</label>
            <input type="text" class="form-control" id="remark" value={remark} onChange={(e) => {
              setremark(e.target.value);
            }} required />
          </div>

          <br></br>
          <button type="submit" class="btn btn-primary">Submit <i class="fa fa-check"></i></button>
          <a href="/health/viewtreat" type="button" class="btn btn-secondary" style={{ marginLeft: "40px" }}>back  <i class="fa fa-reply"></i></a>
        </form>
      </div>
    </div>
  )
}