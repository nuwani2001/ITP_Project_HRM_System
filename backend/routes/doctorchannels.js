const router = require('express').Router();
const {deleteMany} = require("../models/DoctorChannel");
let DoctorChannel = require("../models/DoctorChannel");

//add details
router.route("/add").post((req,res)=>{
    const eid = req.body.eid;
    const name = req.body.name;
    const date = req.body.date;
    const age = Number(req.body.age);
    const disease = req.body.disease;
    const prescription = req.body.prescription;

    const newChannel = new DoctorChannel({
        eid,
        name,
        date,
        age,
        disease,
        prescription
    })

    newChannel.save().then(()=>{
        res.json("Doctor channeling details added!")
    }).catch((err)=>{
        console.log(err);
    })
})

//read details
router.route("/").get((req,res)=>{
    DoctorChannel.find().then((doctorchannels)=>{
        res.json(doctorchannels)
    }).catch((err)=>{
        console.log(err);
    })
})

//update details
router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id; //fetching the id
    const {eid,name,date,age,disease,prescription} = req.body;

    const updateChannel = {
        eid,
        name,
        date,
        age,
        disease,
        prescription
    }

    const update = await DoctorChannel.findByIdAndUpdate(userId,updateChannel)
    .then(()=>{
        res.status(200).send({status:"Data is updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data"});
    })
}) 

//delete details
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id; //fetching the id

    await DoctorChannel.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"Details deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting data",error:err.message});
    })
})


//get details of single user
router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id; //fetching the id

    await DoctorChannel.findById(userId)
    .then((DoctorChannel)=>{
        res.status(200).send({status:"user fetched", DoctorChannel})
    }).catch((err)=>{
        res.status(500).send({status:"Error with user",error : err.message});
    })
})



//get details of single user bu employee id
router.route("/getChannel/:eid").get(async(req,res)=>{
    let Eid = req.params.eid; //fetching the eid

    await DoctorChannel.find({"eid" :Eid})
    .then((DoctorChannel)=>{
        res.status(200).send({status:"user fetched", DoctorChannel})
    }).catch((err)=>{
        res.status(500).send({status:"Error with user",error : err.message});
    })
})

module.exports = router;