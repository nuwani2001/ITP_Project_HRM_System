
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Plot from 'react-plotly.js';

 function Report() {
 let[inventories,setInventories] = useState([]);
 let[count,setCount] = useState(0);
  useEffect(()=>{
  axios.get("http://localhost:8070/inventory/").then((res)=>{
    setInventories(res.data);
    setCount(inventories.length);
    console.log(res.data);
  }).catch((err)=>{
    console.log(err.message);
  })
  
 },[])

 function displayStock(){
  
 }

 function fetchdata(inventories){
  let plotData = [];
  let code = [];
  let quantity = [];
  
  inventories.map(each =>{
    code.push(each.ItemCode);

    quantity.push(each.Quantity);
  })

  plotData['code'] = code;
  plotData['quantity'] = quantity;

  return plotData;
 }

    return (
      <center>
      <Plot
      data={[
        {type: 'bar', 
        x: fetchdata(inventories)['code'],
        y: fetchdata(inventories)['quantity'],
        marker:{color: 'rgb(154,205,50)'}},
      ]}
      layout={{width: 520, height: 440, title: 'Available Stationery',xaxis:{type:"category",title: 'Item Code'},yaxis:{title: 'Quantity'}}}
    />
    </center>
  );
 
}

export default Report;


