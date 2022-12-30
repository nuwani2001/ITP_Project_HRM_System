const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const leaveSchema = new Schema({

 
    //coloumn names of the leave
    empID: {
        type:String,
        required:true

    },
    name: {
        type:String, //Data type
        required:true //It is a must to have this value
    },
    reason: {
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    dateTo:{
        type:String,
        required:false

    },
    total_Days:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:false

    }
    
});

const Leave = mongoose.model("Leave",leaveSchema);

module.exports=Leave;