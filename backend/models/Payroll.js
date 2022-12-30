const mongoose = require('mongoose'); //importing mongoose package which is needed to connect with mongodb

const Schema = mongoose.Schema; //attributes of payroll is given in the schema, schema is like a template to make 1 entry in the table

const payrollSchema = new Schema({ //this is similar to object creation in java, we create an object called studentSchema that has properties name, age and gender
    //mongodb automatically creates an object id to uniquely identify different payrolls, this is usefull when updating payroll info //this id is like a primary key
    //attirbutes that a student can have
    eid : {
        //datatype
        type : String,
        required : true //meaning the attribute name must have a value, this is a backend validation
    },
    name : {
        type : String,
        require : true
    },
    department:{
        type : String,
        require : true
    },
    bankDetails:{
        type : String,
        require : true
    },
    // noOfLeaves:{
    //     type : Number, //noOfLeaves is stored in db as a Number
    //     require : true
    // },
    // otHours:{
    //     type : Number,
    //     require : false
    // },
    workedHours:{
        type : Number,
        require : true
    },
    etf:{
        type : String,
        require : true
    },
    epf:{
        type : String,
        require : true
    },
    bobinateAllowance:{
        type : String,
        require : true
    },
    shiftAllowance:{
        type : String,
        require : true
    },
    deductions:{
        type : Number,
        require : true
    }/*,
    bonus:{
        type : Number,
        require : true
    },
    expenses:{
        type : String,
        require : true
    }*/,
    salary:{
        type : Number,
        require : true
    }
})

//data that comes through routes goes to database through model, this should be sent to a table
const Payroll = mongoose.model("Payroll", payrollSchema); //when document is created in the db, even though we pass the name as "Payroll", it becomes "payrolls"
                                //first parameter is the name of the document we are passing our schema to, document is like a table
//exporting module
module.exports = Payroll; //if we dont export, we cant use this payroll model in routes