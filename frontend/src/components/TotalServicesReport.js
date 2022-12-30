import React, {useState, useEffect} from "react";
import Plot from "react-plotly.js";
import axios from "axios";

export default function TotalServicesReport(){
    const [countx, setCountx] = useState(0);
    const [eid, setEid] = useState([]);
    const [sickemployees, setSickEmployees] = useState([]);
    // let [january, setJanuary] = useState(0);
    // let [february, setFebruary] = useState(0);
    // let [march, setMarch] = useState(0);
    // let [april, setApril] = useState(0);
    // let [may, setMay] = useState(0);
    // let [june, setJune] = useState(0);
    // let [july, setJuly] = useState(0);
    // let [august, setAugust] = useState(0);
    // let [september, setSeptember] = useState(0);
    // let [octomber, setOctomber] = useState(0);    
    // let [november, setNovember] = useState(0);
    // let [december, setDecember] = useState(0);
    let january = 0;
    let february = 0;
    let march = 0; 
    let april = 0
    let may = 0; 
    let june =0;
    let july = 0;
    let august = 0;
    let september =0; 
    let octomber =0;
    let november =0;
    let december =0;

    
    useEffect(() => {
       function getSickempCount(){
            axios.get("http://localhost:8070/Sickemployee/").then((res) => {
                //console.log(res.data);
                setSickEmployees(res.data);
                //setEid(res.data);
                setCountx(sickemployees.length);
                console.log(countx);
                
            }).catch((err) => {
                alert(err.message)
            })
            // console.log(count)
       }
           
       getSickempCount();           
    }, [])

    var month =Date();
    var DateObj =new Date(month);

    function findMonth(){
        sickemployees.map(sickemployee=>{
            var Mdate =new Date(sickemployee.date);
            // console.log(Mdate.getMonth()+1);

            // for(let i = 0; i  < count;i++){
                if(Mdate.getMonth()+1 == 1)
                {
                   january++;
                 console.log("jan:"+january);
                }
                 else if(Mdate.getMonth()+1 == 2)
                 {
                     february++;
                    console.log("feb:"+february)
                 }
                 else if(Mdate.getMonth()+1 == 3)
                 {
                     march++;
                     console.log("march:"+march)
                 }
                 else if(Mdate.getMonth()+1 == 4)
                 {
                     april++;
                     console.log("april:"+april)
                 }
                 else if(Mdate.getMonth()+1 == 5)
                 {
                     may++;
                     console.log("may:"+may)
                 }
                 else if(Mdate.getMonth()+1 == 6)
                 {
                     june++;
                     console.log("june:"+june)
                 }
                 else if(Mdate.getMonth()+1 == 7)
                 {
                     july++;
                      console.log("july:"+july)
                 }
                 else if(Mdate.getMonth()+1 == 8)
                 {
                     august++;
                     console.log("august:"+august)
                 }
                 else if(Mdate.getMonth()+1 == 9)
                 {
                     september++;
                     console.log("september:"+september)
                 }
                 else 
                if(Mdate.getMonth()+1 == 10)
                 {
                     octomber++;
                     console.log("octomber:"+octomber)
                 }
                 else if(Mdate.getMonth()+1 == 11)
                 {
                     november++;
                     console.log("novenmber:"+november)
                 }
                 else if(Mdate.getMonth()+1 == 12)
                 {
                     december++;
                     console.log("december:"+december)
                 }
           }
        // }
        )
    }
    findMonth();

    return(
        <div>
            <center>
                <h2 style={{paddingTop:"40px"}}>Total Services At Clinic </h2>
                <br></br>
                <p style={{textAlign:"left", marginLeft:"130px",fontWeight:"bold"}}>Total number of employees : {sickemployees.length}</p>
            <Plot
                data={[
                    {type: 'bar',
                    x: ['Jan' , 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    y: [january,february,march,april,may,june,july,august,september,octomber,november,december]}
                    // y: [23,31,9,50,17,62,47,28,19,10,17,28]}
                ]}
            />
            
            </center>
            
            <a href="/health/viewtreat" type="button" class="btn btn-secondary" style={{ marginLeft: "40px" }}>back <i class="fa fa-reply"></i></a>

        </div>
    )
}