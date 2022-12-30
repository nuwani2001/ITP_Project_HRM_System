const router = require("express").Router();
const {deleteMany} = require("../models/PregEmployee");
let PregEmployee = require("../models/PregEmployee");

//add details
router.route("/add").post((req,res)=>{
    const eid = req.body.eid;
    const name = req.body.name;
    const deliverydate = req.body.deliverydate;
    const prechild = Number(req.body.prechild);
    const age = Number(req.body.age);
    const phone = req.body.phone;
    const relative = req.body.relative;
    const token = req.body.token;
    const frock = req.body.frock;
    const cliniccard = req.body.cliniccard;
    const recdate = req.body.recdate;
    const pressure = req.body.pressure;

    const newPregEmp = new PregEmployee({
        eid,
        name,
        deliverydate,
        prechild,
        age,
        phone,
        relative,
        token,
        frock,
        cliniccard,
        recdate,
        pressure
    }) 

    newPregEmp.save().then(()=>{
        res.json("Pregnant employee details added!");
    }).catch((err)=>{
        console.log(err);
    })
})


//read details
router.route("/").get((req,res)=>{
    PregEmployee.find().then((pregemployees)=>{
        res.json(pregemployees)
    }).catch((err)=>{
        console.log(err)
    })
})

//update details
router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;

    const {eid,name,deliverydate,prechild,age,phone,relative,token,frock,cliniccard,recdate,pressure} = req.body;

    const updatePreg ={
        eid,
        name,
        deliverydate,
        prechild,
        age,
        phone,
        relative,
        token,
        frock,
        cliniccard,
        recdate,
        pressure
    }

    const update = await PregEmployee.findByIdAndUpdate(userId,updatePreg)
    .then(()=>{
        res.status(200).send({status:"Data is updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data"});
    })

})


//delete details
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await PregEmployee.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"Delete details"});
    }).catch((err)=>{
        res.status(500).send({status:"Error with deleting data"});
        console.log(500);
    })
})


//get the details of single user
router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;

    await PregEmployee.findById(userId)
    .then((PregEmployee)=>{
        res.status(200).send({status : "User fetched",PregEmployee})
    }).catch((err)=>{
        res.status(500).send({status:"Error with user",error : err.message});
    })
})


//get the details of single user by employee id
router.route("/getPregnant/:eid").get(async(req,res)=>{
    let Eid = req.params.eid;

    await PregEmployee.find({"eid":Eid})
    .then((PregEmployee)=>{
        res.status(200).send({status : "User fetched",PregEmployee})
    }).catch((err)=>{
        res.status(500).send({status:"Error with user",error : err.message});
    })
})

module.exports = router;