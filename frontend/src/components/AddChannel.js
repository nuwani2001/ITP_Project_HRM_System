import React, { useState } from "react";
import axios from "axios";

export default function AddChannel() {

  const [eid, seteid] = useState("");
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [age, setage] = useState("");
  const [disease, setdisease] = useState("");
  const [prescription, setprescription] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newChannel = {
      eid,
      name,
      date,
      age,
      disease,
      prescription
    }

    axios.post("http://localhost:8070/Doctorchannel/add", e = newChannel).then(() => {
      alert("Channeling details added");
      window.location.replace("http://localhost:3000/health/addchannel");
           
    }).catch((err) => {
      alert(err)
    })
  }

  function demo(e){
    seteid("E00010");
    setname("Omaththage Ranuja Vilhan Perera");
    setdate("2022-10-29")  //year-month-date
    setage(22)
    setdisease("Fever due to back pain")
    setprescription("ibuprofen 5mg,naproxen 10mg")
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

        <h3>Add Doctor Channeling</h3>
        <div className="">
          <button className="btn btn- outline-primary" style={{}}>Demo</button>
        </div>
        <form onSubmit={sendData}>
          
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


          <div class="col-md-6">
            <label for="date" class="form-label">Date</label>
            <input type="date" class="form-control" id="date" value={date} onChange={(e) => {
              setdate(e.target.value);
            }} required />
          </div>



          <div class="col-md-6">
            <label for="age" class="form-label">Age</label>
            <input type="Number" class="form-control" id="age" value={age} onChange={(e) => {
              setage(e.target.value);
            }} required />
          </div>




          <div class="col-md-6">
            <label for="disease" class="form-label">Disease</label>
            <input type="text" class="form-control" id="disease" value={disease} onChange={(e) => {
              setdisease(e.target.value);
            }} required />
          </div>


          <div class="col-md-6">
            <label for="prescription" class="form-label">Prescription</label>
            <input type="text" class="form-control" id="prescription" value={prescription} onChange={(e) => {
              setprescription(e.target.value);
            }} />
          </div>


          <br></br>
          <button type="submit" class="btn btn-primary">Submit <i class="fa fa-check"></i></button>

          <a href="/health/viewchannel" type="button" class="btn btn-secondary" style={{ marginLeft: "40px" }}>back <i class="fa fa-reply"></i></a>
        </form>
      </div>
    </div>
  )
}
