const router = require("express").Router();
const { response } = require("express");
let Employee = require("../models/Employee");

//add
router.route("/add").post((req, res) => {


    /*const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;*/

    const { emp_id, imgname, HR_active, department, payrollStatus, /* pref_name, surname, , ,*/ maiden_name, initials, names_initials, full_name, other_names, gender, nic, nic_issue_date, nic_issue_place, date_of_birth, place_of_birth, age, nationality, race, religion, blood_group, marital_status, married_date, divorced_date, personal_grade, corporate_title, designation, cost_centre, date_joined_group, date_joined, date_left, next_increment_date, work_hours_per_day, radio_one, /*shop_and_office, wages_board,*/ employment_type, start_date, end_date, statutory_classification, employment_category, employment_group, barcode_no, payroll_no, vehicle_type, score, category, skill, email, mobile_no, resident_tel_no, resident_address, permanent_address } = req.body;
    const newEmployee = new Employee({
        emp_id,
        imgname,
        /* pref_name, 
         surname,*/ 
        department, 
        HR_active,
        payrollStatus,
        maiden_name,
        initials,
        names_initials,
        full_name,
        other_names,
        gender,
        nic,
        nic_issue_date,
        nic_issue_place,
        date_of_birth,
        place_of_birth,
        age,
        nationality,
        race,
        religion,
        blood_group,
        marital_status,
        married_date,
        divorced_date,
        personal_grade,
        corporate_title,
        designation,
        cost_centre,
        date_joined_group,
        date_joined,
        date_left,
        next_increment_date,
        work_hours_per_day,
        radio_one,
        /*wages_board,
        shop_and_office,*/
        employment_type,
        start_date,
        end_date,
        statutory_classification,
        employment_category,
        employment_group,
        barcode_no,
        payroll_no,
        vehicle_type,
        score,
        category,
        skill,
        email, 
        mobile_no, 
        resident_tel_no, 
        resident_address, 
        permanent_address
    })

    //JS Promise
    newEmployee.save().then(() => {
        res.json("Employee Added")
    }).catch((err) => {
        console.log(err);
    })
})
//read
router.route("/").get((req, res) => {

    Employee.find().then((employees) => {
        res.json(employees)
    }).catch((err) => {
        console.log(err)
    })
})

/*************** */
router.route("/delete/:id").delete(async(req,res) =>{ //.delete is a delete request
    let userId = req.params.id; //getting the id from the request

    await Employee.findByIdAndDelete(userId).then(() => { //since you just want the id of the user inorder to find out the user, that is the only parameter you should pass(userId)  //if you wanted to identify a user using an nic or something then you must use the findByIdAndDelete() method
        res.status(200).send({status: "User deleted"});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

/************* */

//update
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    //const name = req.body.name;
    //d-structure
    const { emp_id, imgname, HR_active, department, payrollStatus,/*pref_name, surname,*/ maiden_name, initials, names_initials, full_name, other_names, gender, nic, nic_issue_date, nic_issue_place, date_of_birth, place_of_birth, age, nationality, race, religion, blood_group, marital_status, married_date, divorced_date, personal_grade, corporate_title, designation, cost_centre, date_joined_group, date_joined, date_left, next_increment_date, work_hours_per_day, radio_one, /*wages_board, shop_and_office,*/ employment_type, start_date, end_date, statutory_classification, employment_category, employment_group, barcode_no, payroll_no, vehicle_type, score, category, skill, email, mobile_no, resident_tel_no, resident_address, permanent_address } = req.body;

    const updateEmployee = {
        emp_id,
        imgname,
        /*pref_name, 
        surname,*/
         HR_active,
        department, 
        payrollStatus,
        maiden_name,
        initials,
        names_initials,
        full_name,
        other_names,
        gender,
        nic,
        nic_issue_date,
        nic_issue_place,
        date_of_birth,
        place_of_birth,
        age,
        nationality,
        race,
        religion,
        blood_group,
        marital_status,
        married_date,
        divorced_date,
        personal_grade,
        corporate_title,
        designation,
        cost_centre,
        date_joined_group,
        date_joined,
        date_left,
        next_increment_date,
        work_hours_per_day,
        radio_one,
        /*wages_board,
        shop_and_office,*/
        employment_type,
        start_date,
        end_date,
        statutory_classification,
        employment_category,
        employment_group,
        barcode_no,
        payroll_no,
        vehicle_type,
        score,
        category,
        skill,
        email, 
        mobile_no, 
        resident_tel_no, 
        resident_address, 
        permanent_address
    }

    const update = await Employee.findByIdAndUpdate(userId, updateEmployee).then(() => {
        res.status(200).send({ status: "User updated" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", errror: err.message });
    });
})



//
router.route("/updateEmp/:empNo").put(async (req, res) => {
    let empNo = req.params.empNo;
    //fetch all the pther daya in the URL body as well
    const { skill, score, category } = req.body; //De-structure
    const updateEmployee = {
        empNo,
        skill,
        score,
        category
    }
    //waits until the previous is finished. Waits for the promise
    const update = await Employee.findOneAndUpdate({ "emp_id": empNo }, updateEmployee).then(() => {
        res.status(200).send({ status: "CheckList updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating the data", error: err.message }); // send the response status and the error msg to the front end
    })
})

//get one user
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const user = await Employee.findById(userId).then((employees) => {
        res.status(200).send({ status: "User fetched", employees })
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get user", error: err.message })
    })
})

//search
router.route("/search/num/:keyword").get(async (req, res) => {
    let keyword = req.params.keyword;
    await Employee.find({ "emp_id": `${keyword}` }).then((employees) => {
        res.json(employees);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get the employee", error: err.message });
    })
})

router.route("/search/designation/:keyword").get(async (req, res) => {
    let keyword = req.params.keyword;
    await Employee.find({ "designation": `${keyword}` }).then((employees) => {
        res.json(employees);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get the employee", error: err.message });
    })
})

router.route("/search/HR_active/:keyword").get(async (req, res) => {
    let keyword = req.params.keyword;
    await Employee.find({ "HR_active": `${keyword}` }).then((employees) => {
        res.json(employees);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get the employee", error: err.message });
    })
})

router.route("/search/employment_type/:keyword").get(async (req, res) => {
    let keyword = req.params.keyword;
    await Employee.find({ "employment_type": `${keyword}` }).then((employees) => {
        res.json(employees);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get the employee", error: err.message });
    })
})


// ------------------READ using the employee Category---------------------------
router.route("/getEmployeeByCat/:category").get((req, res) => {
    let category = req.params.category;
    Employee.find({"category": category}).then((empcat) => {
        res.json(empcat)
    }).catch((err) => {
        console.log(err);
    })
})
// ------------------READ using the employee ID---------------------------
router.route("/getEmployeeByempNo/:empNo").get((req, res) => {
    let empNo = req.params.empNo;
    Employee.find({"emp_id": empNo}).then((empNum) => {
        res.json(empNum)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/findTransport/:type").get(async(req, res)=>{
    let type = req.params.type;
    await Employee.find({"vehicle_type": `${type}`}).then((employee)=>{
        res.json(employee);
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get the employee list", error: err.message});
    })
})

//Getting employee name when given employeeID
//Getting valued of one employee
router.route("/find/names_initials/:emp_id").get(async(req,res)=>{
    let emp_id=req.params.emp_id;
    await Employee.find({"emp_id":`${emp_id}`}).then((employees)=>{
        res.status(200).send({status:"userFetch",employees})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error in getting employee request",error: err.message});
     })
})


module.exports = router;
