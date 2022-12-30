const router = require("express").Router();
let Transport = require("../models/Transport");

router.route("/add").post((req, res)=>{
    const vehicle_no = req.body.vehicle_no.toUpperCase();
    const vehicle_type = req.body.vehicle_type.toUpperCase();
    const driver_name = req.body.driver_name;
    const driver_contact_no = req.body.driver_contact_no;
    const company = req.body.company;
    const nic = req.body.nic;
    const license_no = req.body.license_no;
    const lead_name = req.body.lead_name;
    const lead_contact_no = req.body.lead_contact_no;
    const no_of_seats = Number(req.body.no_of_seats);
    const route = req.body.route;
    const distance = Number(req.body.distance);
    const starting_time = req.body.starting_time;
    const arrival_time = req.body.arrival_time;

    const newTransport = new Transport({
        vehicle_no,
        vehicle_type,
        driver_name,
        driver_contact_no,
        company,
        nic,
        license_no,
        lead_name,
        lead_contact_no,
        no_of_seats,
        route,
        distance,
        starting_time,
        arrival_time
    })

    newTransport.save().then(()=>{
        res.json("Transport Service Added.");
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req, res)=>{
    Transport.find().then((transport)=>{
        res.json(transport);
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req, res)=>{
    let transportId = req.params.id;
    const {driver_name, driver_contact_no, company, nic, license_no, lead_name, lead_contact_no, no_of_seats, route, distance, starting_time, arrival_time} = req.body;
    const vehicle_no = req.body.vehicle_no.toUpperCase();
    const vehicle_type = req.body.vehicle_type.toUpperCase();
    const updateTransport = {
        vehicle_no,
        vehicle_type,
        driver_name,
        driver_contact_no,
        company,
        nic,
        license_no,
        lead_name,
        lead_contact_no,
        no_of_seats,
        route,
        distance,
        starting_time,
        arrival_time
    }

    const update = await Transport.findByIdAndUpdate(transportId, updateTransport).then(()=>{
        res.status(200).send({status: "Transport Service Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating the transport service", error: err.message});
    })
})

router.route("/delete/:id").delete(async(req, res)=>{
    let transportId = req.params.id;

    await Transport.findByIdAndDelete(transportId).then(()=>{
        res.status(200).send({status: "Transport Service Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete the transport service", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let transportId = req.params.id;
    const transportService = await Transport.findById(transportId).then((transport)=>{
        res.status(200).send({status: "Transport Service fetched", transport})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get the transport service", error: err.message});
    })
})

router.route("/find/num/:keyword").get(async(req, res)=>{
    let keyword = req.params.keyword;
    await Transport.find({"vehicle_no": `${keyword}`}).then((transport)=>{
        res.json(transport);
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get the transport", error: err.message});
    })
})

router.route("/find/type/:keyword").get(async(req, res)=>{
    let keyword = req.params.keyword;
    await Transport.find({"vehicle_type": `${keyword}`}).then((transport)=>{
        res.json(transport);
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get the transport", error: err.message});
    })
})

module.exports = router;