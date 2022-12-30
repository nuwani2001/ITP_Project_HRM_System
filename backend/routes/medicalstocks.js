const router = require('express').Router();
const {deleteMany} = require('../models/MedicalStock');
let MedicalStock = require('../models/MedicalStock');

//add details
router.route("/add").post((req,res)=>{
    const code  = req.body.code;
    const name = req.body.name;
    const instock = req.body.instock;
    const stockreq =  req.body.stockreq;
    const reqdate = req.body.reqdate;
    const resstatus = req.body.resstatus;

    const newStock = new MedicalStock({
        code,
        name,
        instock,
        stockreq,
        reqdate,
        resstatus
    })

    newStock.save().then(()=>{
        res.json("Medical stock details added! " )
    }).catch((err)=>{
        console.log(err);
    })
})


//read details
router.route("/").get((req,res)=>{
    MedicalStock.find().then((medicalstocks)=>{
        res.json(medicalstocks)
    }).catch((err)=>{
        console.log(err)
    })
})


//update details
router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;

    const{code,name,instock,stockreq,reqdate,resstatus} = req.body;

    const updateStock = {
        code,
        name,
        instock,
        stockreq,
        reqdate,
        resstatus
    }

    const update = await MedicalStock.findByIdAndUpdate(userId,updateStock)
    .then(()=>{
        res.status(200).send({status:"Data is updated"});
    }).catch((err)=>{
         res.status(500).send({status:"Error with updating data"});
    })
})



//delete details
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await MedicalStock.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"Delete details"});
    }).catch((err)=>{
        res.status(500).send({status:"Error with deleting data"});
    })
})


//get details of single user
router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;

    await MedicalStock.findById(userId)
    .then((MedicalStock)=>{
        res.status(200).send({status:"user fetched",MedicalStock})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with user", error : err.message});
    })
})

//get details of single user by code
router.route("/getStock/:code").get((req,res)=>{
    let codeS = req.params.code;

    MedicalStock.find({"code" : codeS})
    .then((MedicalStock)=>{
        res.status(200).send({status:"user fetched",MedicalStock})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with user", error : err.message});
    })
})

module.exports = router;