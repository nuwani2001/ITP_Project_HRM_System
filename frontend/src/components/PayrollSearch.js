import React from "react";
import { useEffect, useState } from "react";


export default function PayrollSearch(){

  const [eid, setEid] = useState("");

    function SearchEmp(e){
        e.preventDefault();
        window.location.replace(`http://localhost:3000/payroll/search/${eid}`);
    }

  return(
    <nav class="navbar">
    <div class="container-fluid">
      <div style={{marginRight:"0px",marginLeft:"auto",width:"20%"}}>
      <form onSubmit={SearchEmp} class="d-flex" role="search">
        <input onChange={(e) => {setEid(e.target.value)}} pattern="[E0-9]{6}" class="form-control me-2" type="search" required placeholder="Enter EID.." aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit"><i class="fa fa-search"></i></button>
      </form>
      </div>
    </div>
  </nav>
    )
}