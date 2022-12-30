import React, { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateChannel() {

  const [eid, seteid] = useState("");
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [age, setage] = useState("");
  const [disease, setdisease] = useState("");
  const [prescription, setprescription] = useState("");

  const {id} = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:8070/Doctorchannel/get/${id}`).then((res) =>{
        console.log(res.data);
        seteid(res.data.DoctorChannel.eid);
        setname(res.data.DoctorChannel.name);
        setdate(res.data.DoctorChannel.date);
        setage(res.data.DoctorChannel.age);
        setdisease(res.data.DoctorChannel.disease);
        setprescription(res.data.DoctorChannel.prescription);
        
    }).catch((err)=>{
        console.log(err)
    })
},[])

  function updateData(e) {
    e.preventDefault();

    const newChannel = {
      eid,
      name,
      date,
      age,
      disease,
      prescription
    }

    axios.put(`http://localhost:8070/Doctorchannel/update/${id}`, e = newChannel).then(() => {
      alert("Channeling details updated");
      window.location.replace("http://localhost:3000/health/viewchannel");
           
    }).catch((err) => {
      alert(err)
    })
  }

  return (
    <div>
      <div className="container">
          <br></br>
        <form onSubmit={updateData}>
            <h3>Update Doctor Channeling</h3>
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
          <button type="submit" class="btn btn-success">Update <i class="fa fa-pencil"></i></button>


         <a href="/health/viewchannel" type="button" class="btn btn-secondary" style={{ marginLeft: "40px" }}>back <i class="fa fa-reply"></i></a>
        </form>
      </div>
    </div>
  )
}
