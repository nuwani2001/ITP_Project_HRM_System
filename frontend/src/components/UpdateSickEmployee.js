import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function UpdateSickEmployee() {

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

  const {id} = useParams();

  useEffect(()=>{
      axios.get(`http://localhost:8070/Sickemployee/get/${id}`).then((res) =>{
          console.log(res.data);
          seteid(res.data.SickEmployee.eid);
          setshift(res.data.SickEmployee.shift);
          setdate(res.data.SickEmployee.date);
          setintime(res.data.SickEmployee.intime);
          setouttime(res.data.SickEmployee.outtime);
          settreatment(res.data.SickEmployee.treatment);
          setremark(res.data.SickEmployee.remark);
          setname(res.data.SickEmployee.name);
          setage(res.data.SickEmployee.age);
          setphone(res.data.SickEmployee.phone);
          setemergency(res.data.SickEmployee.emergency);
          setsentto(res.data.SickEmployee.sentTo);
          setreason(res.data.SickEmployee.reason);
      }).catch((err)=>{
          console.log(err)
      })
  },[])


  function updateData(e) {
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

    axios.put(`http://localhost:8070/Sickemployee/update/${id}`, e = newSEmp).then(() => {
      alert("Treatment details updated!");
      window.location.replace("http://localhost:3000/health/viewtreat");
    }).catch((err) => {
      alert(err)
    })
  }

  return (
    <div>
      <div className="container">
        <br></br>
        <form onSubmit={updateData}>
            <h3>Update Medical Treatments </h3>
          <div class="form-row">
            <div class="col-md-6">
              <label for="eid" class="form-label">Employee ID</label>
              <input type="text" class="form-control" id="eid" value={eid} disabled onChange={(e) => {
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
              <input type="text" class="form-control" id="phone" value={phone} onChange={(e) => {
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
              <input type="text" class="form-control" id="emergency" value={emergency} onChange={(e) => {
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
          <button type="submit" class="btn btn-success">Update <i class="fa fa-pencil"></i></button>
          <a href="/health/viewtreat" type="button" class="btn btn-secondary" style={{ marginLeft: "40px" }}>back <i class="fa fa-reply"></i></a>
        </form>
      </div>
    </div>
  )
}