import React, { useState } from "react";
import axios from 'axios';

export default function AddStock() {
    const [code, setcode] = useState("");
    const [name, setname] = useState("");
    const [instock, setinstock] = useState("");
    const [stockreq, setstockreq] = useState("");
    const [reqdate, setreqdate] = useState("");
    const [resstatus, setresstatus] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newStock = {
            code,
            name,
            instock,
            stockreq,
            reqdate,
            resstatus
        }

        axios.post("http://localhost:8070/Medicalstock/add", e = newStock).then(() => {
            alert("New Medical stock detail added");
            window.location.replace("http://localhost:3000/health/addstock");
        }).catch((err) => {
            alert(err)
        })
    }

    function demo(e){
        setcode("S0002");
        setname("saline bottle");
        setinstock("1 bottle");
        setstockreq("4 bottles");
        setreqdate("2022-10-30");
        setresstatus("not recieved");
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
                    <h3>Add Medical Stocks</h3>
                    <div class="col-md-6">
                        <label for="code" class="form-label">Item Code</label>
                        <input type="text" class="form-control" id="code" value={code} pattern="[S0-9]{5}" onChange={(e) => {
                            setcode(e.target.value);
                        }} required />
                    </div>


                    <div class="col-md-6">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" value={name} onChange={(e) => {
                            setname(e.target.value);
                        }} required />
                    </div>


                    <div class="col-md-6">
                        <label for="instock" class="form-label">In Stock</label>
                        <input type="text" class="form-control" id="instock" value={instock} onChange={(e) => {
                            setinstock(e.target.value);
                        }} required />
                    </div>


                    <div class="col-md-6">
                        <label for="stockreq" class="form-label">Stock Request</label>
                        <input type="text" class="form-control" id="stockreq" value={stockreq} onChange={(e) => {
                            setstockreq(e.target.value);
                        }} required />
                    </div>

                    <div class="col-md-6">
                        <label for="reqdate" class="form-label">Requested Date</label>
                        <input type="date" class="form-control" id="reqdate" value={reqdate} onChange={(e) => {
                            setreqdate(e.target.value);
                        }} required />
                    </div>




                    <div class="col-md-6">
                        <label for="resstatus" class="form-label">Recieved Status</label>
                        <select class="custom-select mr-sm-2" id="resstatus" value={resstatus} onChange={(e) => {
                            setresstatus(e.target.value);
                        }} required>
                            <option selected>Choose...</option>
                            <option value="recieved">Recieved</option>
                            <option value="not recieved">Not Recieved</option>
                        </select>
                    </div>


                    <br></br>
                    <button type="submit" class="btn btn-primary">Submit <i class="fa fa-check"></i></button>
                    <a href="/health/viewstock" type="button" class="btn btn-secondary" style={{ marginLeft: "40px" }}>back <i class="fa fa-reply"></i></a>
                </form>
            </div>
        </div>
    )
}