import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SearchStock(){
    const {code} = useParams();
    const  [stocks,setstocks] = useState([]);

    useEffect(()=>{
        /*     const getStock = async () => {
        const {data :res } =await axios.get(`http://localhost:8070/Medicalstock/getStock/${code}`);
            console.log(res);
            setmedicalstocks(res);
            console.log(medicalstocks);
            console.log("hiiiiiiiiiiii");
            
    }
    getStock();
},[]) 
 */
function getStock() {
    axios.get(`http://localhost:8070/Medicalstock/getStock/${code}`).then((res) => {
        console.log(res.data);
        setstocks(res.data.MedicalStock);
        console.log("aaaaaaaaaa")
        console.log(stocks);
    }).catch((err) => {
        alert(err.message)
    })
}
getStock();
}, [])

    return (
        <div>
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
                                stocks.map((stock) => (
                                    <tr>
                                        <td>{stock.code}</td>
                                        <td>{stock.name}</td>
                                        <td>{stock.instock}</td>
                                        <td>{stock.stockreq}</td>
                                        <td>{stock.reqdate}</td>
                                        <td>{stock.resstatus}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/health/updateStock/${stock._id}`)
                                            }}>Update</button>
                                        </td>

                                        <td>
                                            <button className="btn btn-danger" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/health/deleteStock/${stock._id}`)
                                            }}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>

                    <a href="/health" type="button" class="btn btn-secondary float-right" style={{marginRight:"40px", width:"8%"}}>back</a>
        </div>
    )
}