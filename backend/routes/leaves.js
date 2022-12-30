const router=require("express").Router();
const {request}=require("express");
let Leave=require("../models/Leave");


//Data insertion
router.route("/add").post((req,res)=>{

const empID=req.body.empID;
const name = req.body.name;
const reason= req.body.reason;
const date = req.body.date;
const dateTo = req.body.dateTo;
const total_Days= Number(req.body.total_Days);
const status = req.body.status;

const newLeave = new Leave({
    empID,name,reason,date,dateTo,total_Days,status
})

newLeave.save().then(()=>{
    res.json("Request Added")
}).catch((err)=>{
    console.log(err);
    })
})

//Read all the values of student from the database
router.route("/").get((req,res)=>{
    Leave.find().then((leave)=>{
        res.json(leave)
    }).catch((err)=>{
        console.log(err)
    })
})

//Read values of one specific leave details
router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    const user=await Leave.findById(userId).then((leave)=>{
        res.status(200).send({status:"userFetch",leave})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error in getting leave request",error: err.message});
    })
})



//Getting valued of one employee (search)
router.route("/find/:empID").get(async(req,res)=>{
    let empID=req.params.empID;
    await Leave.find({"empID":`${empID}`}).then((leave)=>{
        res.status(200).send({status:"userFetch",leave})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error in getting leave request",error: err.message});
     })
})

//getting the leaves by reason --> bar chart
router.route("/reason/:type").get(async(req,res)=>{
    let type=req.params.type;
    await Leave.find({"reason":`${type}`}).then((leave)=>{
        res.status(200).send({status:"userFetch",leave})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error in getting leave request",error: err.message});
     })
})



//Update

router.route("/update/:id").put(async(req,res)=>{
    let userId=req.params.id;
    const {empID,name,reason,date,dateTo,total_Days,status}=req.body;
    const updateleave={
        empID,
        name,
        reason,
        date,
        dateTo,
        total_Days,
        status
    }
const update=await Leave.findByIdAndUpdate(userId,updateleave).then(()=>{
    res.status(200).send({status:"Leave details updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});

    })
})
//Delete
router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;

    await Leave.findByIdAndDelete (userId).then(()=>{
        res.status(200).send({status:"Leave request deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({Status:"Error with leave request delete",error:err.message});
    })
})

module.exports=router;


