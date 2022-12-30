const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const pregSchema = new Schema({
    eid : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    deliverydate : {
        type : String,
        required : true
    },
    prechild : {
        type : Number,
        required : true
    },
    age : {
        type : Number,
        required  :true
    },
    phone : {
        type : String,
        required : true
    },
    relative : {
        type : String,
        required : true
        
    },
    token : {
        type : String,
        
    },
    frock : {
        type : String,
        
    },
    cliniccard : {
        type : String,
        
    },
    recdate : {
        type : String,
        
    },
    pressure : {
        type : String,
        
    },
})

const PregEmployee = mongoose.model("Pregemployee",pregSchema);

module.exports = PregEmployee;