const router = require("express").Router();
const { deleteMany } = require("../models/SickEmployee");
let SickEmployee = require("../models/SickEmployee");


//add details
router.route("/add").post((req,res)=>{
    const eid = req.body.eid;
    const shift = req.body.shift;
    const date = req.body.date;
    const intime = req.body.intime;
    const outtime = req.body.outtime;
    const treatment = req.body.treatment;
    const remark = req.body.remark;
    const name = req.body.name;
    const age = Number(req.body.age);
    const phone = req.body.phone;
    const emergency = req.body.emergency;
    const sentTo = req.body.sentTo;
    const reason = req.body.reason;
   

    const newSickEmp = new SickEmployee({
        eid,
        shift,
        date,
        intime,
        outtime,
        treatment,
        remark,
        name,
        age,
        phone,
        emergency,
        sentTo,
        reason
    })

    newSickEmp.save().then(()=>{
        res.json("Sick employee details added!")
    }).catch((err)=>{
        console.log(err);
    })
})


//read details
router.route("/").get((req,res)=>{
    SickEmployee.find().then((sickemployees)=>{
        res.json(sickemployees)
    }).catch((err)=>{
        console.log(err);
    })
})


//update details
router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
     const  {eid,shift,date,intime,outtime,treatment,remark,name,age,phone,emergency,sentTo,reason} = req.body;

    const updateSickEmp = {
        eid,
        shift,
        date,
        intime,
        outtime,
        treatment,
        remark,
        name,
        age,
        phone,
        emergency,
        sentTo,
        reason
    }

    const update = await SickEmployee.findByIdAndUpdate(userId,updateSickEmp)  
    .then(()=>{
        res.status(200).send({status: "Data is updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data"});
    }) 
})


//delete details
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await SickEmployee.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"Details deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting data",error:err.message});
    })
})


//get details of single user
router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;

    await SickEmployee.findById(userId)
    .then((SickEmployee)=>{
        res.status(200).send({status: "user fetched", SickEmployee})
    }).catch ((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with user", error : err.message});
    })
})


//get details of single user by employee id
router.route("/getSick/:eid").get((req,res)=>{
    let Eid = req.params.eid;

    SickEmployee.find({"eid":Eid})
    .then((SickEmployee)=>{
        res.status(200).send({status: "user fetched", SickEmployee})
    }).catch ((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with user", error : err.message});
    })
})
module.exports = router;