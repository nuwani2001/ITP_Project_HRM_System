import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';


export default function PayrollStats() {

    const [hrSal, setHrSal] = useState(0);
    const [itSal, setItSal] = useState(0);
    const [engSal, setEngSal] = useState(0);
    const [financeSal, setFinanceSal] = useState(0);
    const [productionSal, setProductionSal] = useState(0);
    const [shippingSal, setShippingSal] = useState(0);
    const [hrlen, setHrLen] = useState(0);
    const [itlen, setItLen] = useState(0);
    const [englen, setEngLen] = useState(0);
    const [financelen, setFinanceLen] = useState(0);
    const [productionlen, setProductionLen] = useState(0);
    const [shippinglen, setShippingLen] = useState(0);


    const getData = () => {
        let urls = [
            'http://localhost:8070/payroll/search/department/HR',
            'http://localhost:8070/payroll/search/department/IT',
            'http://localhost:8070/payroll/search/department/Engineering',
            'http://localhost:8070/payroll/search/department/Finance',
            'http://localhost:8070/payroll/search/department/Shipping',
            'http://localhost:8070/payroll/search/department/Production'
        ];

        Promise.all(urls.map((urls) => axios.get(urls))).then(([{ data: hrSal }, { data: itSal }, { data: engSal }, { data: financeSal }, { data: productionSal }, { data: shippingSal }]) => {
            setHrLen(hrSal.length);
            let total = 0;
            hrSal.map((hr) => (
                total = total + hr.salary
            ))
            setHrSal(total);

            setItLen(itSal.length);
            total = 0;
            itSal.map((it) => (
                total = total + it.salary
            ))
            setItSal(total);

            setEngLen(engSal.length);
            total = 0;
            engSal.map((eng) => (
                total = total + eng.salary
            ))
            setEngSal(total);

            setFinanceLen(financeSal.length);
            total = 0;
            financeSal.map((finance) => (
                total = total + finance.salary
            ))
            setFinanceSal(total);

            setProductionLen(productionSal.length);
            total = 0;
            productionSal.map((production) => (
                total = total + production.salary
            ))
            setProductionSal(total);

            setShippingLen(shippingSal.length);
            total = 0;
            shippingSal.map((shipping) => (
                total = total + shipping.salary
            ))
            setShippingSal(total);
        });
    }
    useEffect(() => {
        getData();
    }, []);


    return (

        <div className='container' style={{ flex: "auto" }}>
            <br /><h1>Payroll Stats</h1>
            <br />
            <div style={{ flex: "auto" }}> {/*Bar chart */}

                <div className='col' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Plot
                        data={[
                            { type: 'bar', x: ['HR', 'IT', 'Engineering', 'Finance', 'Production', 'Shipping'], y: [hrSal, itSal, engSal, financeSal, productionSal, shippingSal] },
                        ]}
                        layout={{ width: 800, height: 410, title: 'Total Salary Made By Each Department', xaxis:{type:"category",title: 'Departments'},yaxis:{title: 'Salary'}}}
                    />
                </div>
                <br /><br />
            </div>
            
            <table className='table' style={{ margin: "auto", textAlign: 'center' }}>
                <thead className='table-dark'>
                    <tr>
                        <th>Department</th>
                        <th>Number of employees</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>HR</th>
                        <td>{hrlen}</td>
                    </tr>
                    <tr>
                        <th>IT</th>
                        <td>{itlen}</td>
                    </tr>
                    <tr>
                        <th>Engineering</th>
                        <td>{englen}</td>
                    </tr>
                    <tr>
                        <th>Finance</th>
                        <td>{financelen}</td>
                    </tr>
                    <tr>
                        <th>Production</th>
                        <td>{productionlen}</td>
                    </tr>
                    <tr>
                        <th>Shipping</th>
                        <td>{shippinglen}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <a href="/payroll" className="btn btn-secondary">Back <i class="fa fa-reply"></i></a>
            <br />
            <br />
        </div>
    )
}