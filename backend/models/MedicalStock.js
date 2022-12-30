const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const stockSchema = new Schema({
    code : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    instock : {
        type : String,
        required : true
    },
    stockreq : {
        type  :String,
        required : true
    },
    reqdate : { 
        type : String,
        required : true
    },
    resstatus : {
        type : String,
        required : true
    }
})

const MedicalStock = mongoose.model("Medicalstock", stockSchema)

module.exports = MedicalStock;