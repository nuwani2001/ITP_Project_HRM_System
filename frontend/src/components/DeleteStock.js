import React, { useState ,useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function DeleteStock() {
    const [code, setcode] = useState("");
    const [name, setname] = useState("");
    const [instock, setinstock] = useState("");
    const [stockreq, setstockreq] = useState("");
    const [reqdate, setreqdate] = useState("");
    const [resstatus, setresstatus] = useState("");

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8070/Medicalstock/get/${id}`).then((res) =>{
            console.log(res.data);
            setcode(res.data.MedicalStock.code);
            setname(res.data.MedicalStock.name);
            setinstock(res.data.MedicalStock.instock);
            setstockreq(res.data.MedicalStock.stockreq);
            setreqdate(res.data.MedicalStock.reqdate);
            setresstatus(res.data.MedicalStock.setresstatus);
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    function deleteData(e) {
        e.preventDefault();

        axios.delete(`http://localhost:8070/Medicalstock/delete/${id}`).then(() => {
            alert("Medical Stock details deleted!");
            window.location.replace("http://localhost:3000/health/viewstock");
        }).catch((err) => {
            alert(err)
        })
    }

    return (
        <div>
            <div className="container">
                <br></br>
                <form onSubmit={deleteData}>
                    <h3>Delete Medical Stocks</h3>
                    <div class="col-md-6">
                        <label for="code" class="form-label">Item Code</label>
                        <input type="text" class="form-control" id="code" value={code} disabled onChange={(e) => {
                            setcode(e.target.value);
                        }} required />
                    </div>


                    <div class="col-md-6">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" value={name} disabled onChange={(e) => {
                            setname(e.target.value);
                        }} required />
                    </div>


                    <div class="col-md-6">
                        <label for="instock" class="form-label">In Stock</label>
                        <input type="text" class="form-control" id="instock" value={instock} disabled onChange={(e) => {
                            setinstock(e.target.value);
                        }} required />
                    </div>


                    <div class="col-md-6">
                        <label for="stockreq" class="form-label">Stock Request</label>
                        <input type="text" class="form-control" id="stockreq" value={stockreq} disabled onChange={(e) => {
                            setstockreq(e.target.value);
                        }} required />
                    </div>

                    <div class="col-md-6">
                        <label for="reqdate" class="form-label">Requested Date</label>
                        <input type="date" class="form-control" id="reqdate" value={reqdate} disabled onChange={(e) => {
                            setreqdate(e.target.value);
                        }} required />
                    </div>




                    <div class="col-md-6">
                        <label for="resstatus" class="form-label">Recieved Status</label>
                        <select class="custom-select mr-sm-2" id="resstatus"  value={resstatus} disabled onChange={(e) => {
                            setresstatus(e.target.value);
                        }} required>
                            <option selected>Choose...</option>
                            <option value="recieved">Recieved</option>
                            <option value="not recieved">Not Recieved</option>
                        </select>
                    </div>


                    <br></br>
                    <button type="submit" class="btn btn-danger">Remove  <i class="fa fa-trash-o fa-lg"></i></button>
                    <a href="/health/viewstock" type="button" class="btn btn-secondary" style={{ marginLeft: "40px" }}>back <i class="fa fa-reply"></i></a>
                </form>
            </div>
        </div>
    )
}