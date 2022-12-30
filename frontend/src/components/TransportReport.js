import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

export default function TransportReport(){

  const [vans, setVans] = useState([]);
  const [buses, setBuses] = useState([]);
  const [noOfVans, setNoOfVans] = useState(0);
  const [noOfBuses, setNoOfBuses] = useState(0);
  const [busEmployees, setBusEmployees] = useState([]);
  const [vanEmployees, setVanEmployees] = useState([]);
  const [noOfBusEmployees, setNoOfBusEmployees] = useState(0);
  const [noOfVanEmployees, setNoOfVanEmployees] = useState(0);
  const [graphTotal, setGraphTotal] = useState(0);
  const [graphVan, setGraphVan] = useState(0);
  const [graphBus, setGraphBus] = useState(0);

  const getData = () => {
    let urls = [
      'http://localhost:8070/transport/find/type/VAN',
      'http://localhost:8070/transport/find/type/BUS',
      'http://localhost:8070/employees',
      'http://localhost:8070/employees/findTransport/VAN',
      'http://localhost:8070/employees/findTransport/BUS'
    ];
    Promise.all(urls.map((urls)=>axios.get(urls))).then(([{data: vans}, {data: buses}, {data: employees}, {data: vanEmployees}, {data: busEmployees}])=>{
      setVans(vans);
      setBuses(buses);
      setVanEmployees(vanEmployees);
      setBusEmployees(busEmployees);
      setNoOfVans(vans.length);
      setNoOfBuses(buses.length);
      setNoOfVanEmployees(vanEmployees.length);
      setNoOfBusEmployees(busEmployees.length);
      setGraphTotal(employees.length);
      });
    }
  useEffect(()=>{
    getData();
  },[]);

  
  return(
    <div className='container'>
      <br/>
      <a href="/transport" className="btn btn-secondary">Back <i class="fa fa-reply"></i></a>
      <br/><br/>
      
      <div className='row'>

        <div className='col'>
          <Plot
            data={[
              {type: 'bar', x: ['Bus', 'Van'], y: [noOfBuses, noOfVans]},
            ]}
            layout={ {width: 520, height: 400, title: 'Available Vehicles', xaxis:{title: 'Vehicle Type'}, yaxis:{title: 'Number of Vehicles'}} }
          />

        </div>

        <div className='col'>
          <Plot
            data = {[{
              values: [noOfBusEmployees * 100.0 / graphTotal, noOfVanEmployees * 100.0 / graphTotal],
              labels: ['Bus', 'Van'],
              type: 'pie'
            }]}
              
            layout = {{
            height: 400,
            width: 500, 
            title: "Number of employees allocated for each vehicle"
            }}
          />

        </div>
        
      </div>

      <table className='table'>
            <thead className='table-dark'>
              <tr>
                <th></th>
                <th>Bus</th>
                <th>Van</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
            <tr>
                <th>Vehicle Count</th>
                <td>{noOfBuses}</td>
                <td>{noOfVans}</td>
                <th>{noOfBuses+noOfVans}</th>
              </tr>
              <tr>
                <th>Employee Count</th>
                <td>{noOfBusEmployees}</td>
                <td>{noOfVanEmployees}</td>
                <th>{noOfBusEmployees+noOfVanEmployees}</th>
              </tr>
              <tr>
                <th>Percentage (Employees)</th>
                <td>{Math.round(noOfBusEmployees * 100.0 / graphTotal*100)/100}%</td>
                <td>{Math.round(noOfVanEmployees * 100.0 / graphTotal*100)/100}%</td>
              </tr>
            </tbody>
          </table>
      
      
      <br/>
      <br/>
      <br/>
      <br/>

      

      
      

    </div>
    )    
}