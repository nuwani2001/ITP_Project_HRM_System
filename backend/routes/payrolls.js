const router = require("express").Router(); //importing Router() function of express package

let Employee = require("../models/Payroll"); //importing Payroll model //the path indicates that it is going out of routes folder and going into models folder
let Yohan = require("../models/Employee");

//http://localhost:8070/payroll/add //backend url
//this is the route for create/adding a payroll
router.route("/add").post((req, res) => { //.post is an http method //this method takes the request from the front end as 
    //body of arrow function
    const eid = req.body.emp_id; //when we enter something in the front end and press submit button, the front end sends a request to the backend saying save this data to the database, this data is sent as the body of the request, so in the backend we make variables to store the data that is being passed
    const name = req.body.name; //in this case we are filtering out the "name" data sent in the body of the request and allocationg it to a const variable
    const department = req.body.department; 
    const bankDetails = req.body.bankDetails; 
    // const noOfLeaves = Number(req.body.noOfLeaves); //casting String to Number because age is Number
    // const otHours = Number(req.body.otHours); //casting String to Number because age is Number
    const workedHours = Number(req.body.workedHours);
    const etf = req.body.etf;
    const epf = req.body.epf;
    const bobinateAllowance = req.body.bobinateAllowance;
    const shiftAllowance = req.body.shiftAllowance;
    const deductions = Number(req.body.deductions);
    const salary = Number(req.body.salary);
   
    const newEmployee = new Employee({ //creating object from Student model and assigning it to const variable
        eid, //including the variables from above
        name, 
        department,
        bankDetails,
        // noOfLeaves,
        // otHours,
        workedHours,
        etf,
        epf,
        bobinateAllowance,
        shiftAllowance,
        deductions,
        salary        
    }) //now we have an object called newEmployee

    //sending newEmployee object to database, this is done by the .save() function  
    newEmployee.save().then(()=>{ //passes the data values of above 3 properties to mongodb through Student.js model as a document, this can either be true or false(it may happen or not happen)
        res.json("Payroll added") //response in json format is sent if above condition true(if object is passed) //this response is an alert
    }).catch((err) => { //if unsuccess
        console.log(err); //catches error and display what the error is
        res.status(500).send({status : "Error with payroll user", error: err.message});
    })
})

//READ function - fetch data of all students
//http://localhost:8070/student/
router.route("/").get((req, res) =>{ //.get is used to retrieve data from database
    Employee.find().then((employee) =>{ //.find() method is used to fetch details of all Payrolls in db
        res.json(employee) //if success, then a response is sent to front end(response is all students) //if this response is not there, we would not be able to see all payrolls
    }).catch((err) =>{ //if unsuccess
        console.log(err)
    })
}) 

//http://localhost:8070/testemployee/
router.route("/").get((req, res) =>{ //.get is used to retrieve data from database
    Yohan.find().then((yohan) =>{ //.find() method is used to fetch details of all Payrolls in db
        res.json(yohan) //if success, then a response is sent to front end(response is all students) //if this response is not there, we would not be able to see all payrolls
    }).catch((err) =>{ //if unsuccess
        console.log(err)
    })
}) 


//UPDATE FUNCTION
//before updating information of a certain student, you must first get that student
// http://localhost:8070/student/update/:id (id is assigned by mongodb) this id is sent from front end to backend for mongodb to know which payroll we are going to update //it is important to put : in the url before id, and instead of id we can give whatever name we want
router.route("/update/:id").put(async (req, res)=> {        //.put() fethces current data and updates with new data so put() is used to update data, post() can also be used instead of put() //async function awaits a promise //async await is used to prevent the server from crashing, check word doc for more info //by using aync function yoo dont have to wait for something to finish happening, you can carry on with something else
                                                            
    //you must take the id that is coming in the url from frontend     
    let userId = req.params.id;  //params means parameter, this statement means we are requesting the parameter "id" which is coming in line 87

    //destructure
    const{
        eid,
        name,               //these are variables that will store the data coming from front end, this data is sent as an object in the body of the request
        department,
        bankDetails,
        // noOfLeaves,
        // otHours,
        workedHours,
        etf,
        epf,
        bobinateAllowance,
        shiftAllowance,
        deductions,
        salary} = req.body; //the data from front end comes to backend in the body of the request as an object, this data is extracted from the body and put into the variables above  //another way(line 10-22) of getting the details that need to be updated, these are sent as an object from front end to back end and they come in the body of the request(req.body)
    
    //now we have the id of the payroll we have to update, and we have the updated data, now we have to do the updating, so we create an object for that
    const updateEmployee = { //creating object that has the updated data
        eid,
        name,
        department,
        bankDetails,
        // noOfLeaves,
        // otHours,
        workedHours,
        etf,
        epf,
        bobinateAllowance,
        shiftAllowance,
        deductions,
        salary
    } //the updated values go to userID in line 90

    //now we must check whether there exists a user with the fetched userId
    const update = await Employee.findByIdAndUpdate(userId, updateEmployee) //findByIdAndUpdate() finds a student by userID which is the primary key and updates that students details  //parameter 1 is the id of the user we want to update  //parameter 2 the object that has the updated data //instead of the object you can also pass the variables directly like {eid, name, department ... salary} //the async function awaits for a promise from the findByIdAndUpdate() method, 
    .then(() => {            //the status inside the curly brackets is in json format   //.then is a promise so if its a success then success message will be displayed if not error message is shown in console
        res.status(200).send({status: "User updated"}) //if condition is success, sends success message to front end, 200 status means successfull //404 status means not found //401 means not authorized
    }).catch((err) => { //incase theres an error then that will be caught and then it will be displayed in the console and also to the frontend
        console.log(err); //shows error message in console
        res.status(500).send({status : "Error with updating data", error: err.message}); //sends response to front end if above condition is not true, 500 means server error
    })
})

/************************************************************************************************************************** */
//update backend for delete 
router.route("/update/status/:id").put(async (req, res) => {

    let userId = req.params.id;

    //destructure
    const {
        payrollStatus } = req.body;

    const update = await Yohan.findOneAndUpdate({ "emp_id": `${userId}` }, { "payrollStatus": `${payrollStatus}` }).then(() => {
        console.log(payrollStatus);
        res.status(200).send({ status: "User updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    })
})
/************************************************************************************************************************** */

//DELETE FUNCTION
// http://localhost:8070/student/delete/:id - this is a backend url
router.route("/delete/:id").delete(async(req,res) =>{ //.delete is a delete request
    let userId = req.params.id; //getting the id from the request

    await Employee.findByIdAndDelete(userId).then(() => { //since you just want the id of the user inorder to find out the user, that is the only parameter you should pass(userId)  //if you wanted to identify a user using an nic or something then you must use the findByIdAndDelete() method
        res.status(200).send({status: "User deleted"});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

//Fetching data of 1 student
router.route("/get/:id").get(async (req, res) => { //.get is used to fetch data
    let userId = req.params.id;

    const user = await Employee.findById(userId).then((employee) => {  //findOne is used if you are finding a student from their name or email or nic something that is not the default primary key(the id allocated by mongodb)
        res.status(200).send({status: "User fetched", employee})/*user: user <- this was inside curly brackets after "," in the video*/
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message}) //status is not a keyword, it can be anything
    })
})

//SEARCH Payroll function route
router.route("/search/:id").get(async (req, res) => { //since we are fetching data we use get()
    let userId = req.params.id;

    const user = await Employee.find({"eid":`${userId}`}).then((employee) => {  //findOne is used if you are finding a student from their name or email or nic something that is not the default primary key(the id allocated by mongodb)
        res.json(employee);
        // res.status(200).send({status: "User fetched", employee}) 
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message})
    })
})

//SEARCH by department for report
router.route("/search/department/:id").get(async (req, res) => { //since we are fetching data we use get()
    let dep = req.params.id;

    const user = await Employee.find({"department":`${dep}`}).then((employee) => {  //findOne is used if you are finding a student from their name or email or nic something that is not the default primary key(the id allocated by mongodb)
        res.json(employee);
        // res.status(200).send({status: "User fetched", employee}) 
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message})
    })
})

module.exports = router;