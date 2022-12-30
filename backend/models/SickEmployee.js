const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    eid : {
        type : String,
        required : true
    },
    shift : {
        type : String,
        //required : true
    },
    date : {
        type : String,
        required : true
    },
    intime : {
        type : String,
        required : true
    },
    outtime : {
        type : String,
        required : true
    },
    treatment : {
        type : String,
        required : true
    },
    remark : {
        type : String,
        required : true
    },
    name : {
        type : String,
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
    emergency : {
        type : String,
        
    },
    sentTo : {
        type : String,
    
    },
    reason : {
        type : String,
        
    },
    
})

const SickEmployee = mongoose.model("Sickemployee",employeeSchema);

module.exports = SickEmployee;