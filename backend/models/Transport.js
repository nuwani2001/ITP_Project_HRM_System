const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transportSchema = new Schema({

    vehicle_no : {
        type : String,
        required: true
    },
    vehicle_type : {
        type : String,
        required: true
    },
    driver_name : {
        type : String,
        required: true
    },
    driver_contact_no : {
        type : String,
        required: true
    },
    company : {
        type : String,
        required: true
    },
    nic : {
        type : String,
        required: true
    },
    license_no : {
        type : String,
        required: true
    },
    lead_name : {
        type : String,
        required: true
    },
    lead_contact_no : {
        type : String,
        required: true
    },
    no_of_seats : {
        type : Number,
        required: true
    },
    route : {
        type : String,
        required: true
    },
    distance : {
        type : Number,
        required: true
    },
    starting_time : {
        type : String,
        required: true
    },
    arrival_time : {
        type : String,
        required: true
    }

})

const Transport = mongoose.model("Transport", transportSchema);

module.exports = Transport;