const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const channelSchema = new Schema({
    eid : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required  :true
    },
    disease : {
        type : String,
        required : true
    },
    prescription : {
        type : String,
        required : true
    }
})

const DoctorChannel = mongoose.model("Doctorchannel", channelSchema);

module.exports = DoctorChannel;