const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDB Connection Success!");
});



const sickempRouter = require("./routes/sickemployees.js");
const doctorchannelRouter = require("./routes/doctorchannels.js");
const medistockRouter = require("./routes/medicalstocks");
const pregemployeeRouter = require("./routes/pregemployees.js");

app.use("/Sickemployee",sickempRouter);
app.use("/Doctorchannel",doctorchannelRouter);
app.use("/Medicalstock",medistockRouter);
app.use("/Pregemployee",pregemployeeRouter);

const attendanceRouter = require("./routes/empAttendanceDetails.js");
app.use("/attendance", attendanceRouter);

const checkListRouter = require("./routes/checkLists.js");
app.use("/checkList", checkListRouter);

const employeeRouter = require("./routes/employees.js");
app.use("/employees", employeeRouter);

const transportRouter = require("./routes/transports.js");
app.use("/transport", transportRouter);

const leaveRouter=require("./routes/leaves.js");
app.use("/leave",leaveRouter);

const inventoryRouter = require("./routes/inventories.js");
app.use("/inventory",inventoryRouter);

const payrollRouter = require("./routes/payrolls.js"); 
app.use("/payroll", payrollRouter);




// --------------PYTHON --------------------
app.get('/script', (req, res)=>{
    let spawn = require("child_process").spawn;

    console.log("HMMMMMMMMMHHHH");
    let data1;

    const pythonOne = spawn('python', ['./app.py'])
    pythonOne.stdout.on('data', function(data){
        console.log("SPAWNED");
        // data1 = data.toString();
        if(res.send(data.toString())){
            console.log("NICEE");
        }
        // else{
        //     console.log("ERRORRRRR");
        // }
    })

    pythonOne.on('close', (code)=>{
        console.log("Code: ", code)
        res.send(data1);
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is up and running on PORT : ${PORT}`);
});
