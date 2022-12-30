import React, { useState, useEffect } from "react";
import axios from "axios"; //to take data from db

export default function AllStock() {

    const [medicalstocks,setmedicalstocks] = useState([]);
    const [code,setCode] = useState("");

    useEffect(() => {
        function getMedicalStocks() {
            axios.get("http://localhost:8070/Medicalstock/").then((res) => {
                //console.log(res.data);
                setmedicalstocks(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getMedicalStocks();
    }, [])

    return (
        <div  className="container-fluid">
            <br></br>
            <div style={{margin:"auto"}}>
                <h2>Medical Stock</h2>
                <div>
                    <div style={{marginRight:"40px", marginLeft:"auto", width:"30%"}}>
                        <input type="text" id="search" placeholder="Enter Item Code..." onChange={(e) => { setCode(e.target.value) }} />
                        <button class="btn btn-primary btnView" onClick={() => {
                            window.location.replace(`http://localhost:3000/health/searchStock/${code}`);
                        }}><i class="fa fa-search"></i></button>
                        <a href="/health/addstock" type="button" class="btn btn-secondary float-right" style={{marginRight:"60px",width:"26%"}}>Add Details <i class="fa fa-plus"></i></a>
                    </div>
                    
                    <table className="table table-borderless">
                        <tr>
                            <th>Item Code</th>
                            <th>Name</th>
                            <th>In Stock</th>
                            <th>Stock Request</th>
                            <th>Requested Date</th>
                            <th>Recieved Status</th>
                            <th></th>
                            <th></th>
                        </tr>

                        <tbody>
                            {
                                medicalstocks.map((medicalstock) => (
                                    <tr>
                                        <td>{medicalstock.code}</td>
                                        <td>{medicalstock.name}</td>
                                        <td>{medicalstock.instock}</td>
                                        <td>{medicalstock.stockreq}</td>
                                        <td>{medicalstock.reqdate}</td>
                                        <td>{medicalstock.resstatus}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/health/updateStock/${medicalstock._id}`)
                                            }}>Update <i class="fa fa-pencil"></i></button>
                                        </td>

                                        <td>
                                            <button className="btn btn-danger" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/health/deleteStock/${medicalstock._id}`)
                                            }}>Delete <i class="fa fa-trash-o fa-lg"></i></button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                        <div>
                        <a href="/health" type="button" class="btn btn-secondary float-right" style={{marginTop:"170%", width:"100px"}}>back <i class="fa fa-reply"></i></a>

                        </div>

                    </table>

                </div>
            </div>



        </div>
    )
}