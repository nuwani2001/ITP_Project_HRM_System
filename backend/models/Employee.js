const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchemea = new Schema({

    emp_id:{
        type: String,
        required: true
    },
    imgname: {
        type: String
        // required: true
    },
    /*pref_name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },*/
    HR_active: {
        type: String,
        required: true
    },
    payrollStatus: {
        type: String,
        //required: true
    },
    designation: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    maiden_name: {
        type: String,
        required: true
    },
    initials: {
        type: String,
        required: true
    },
    names_initials: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    other_names: {
        type: String,
        //required: true
    }, 
    gender: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    nic_issue_date: {
        type: String,
        //required: true
    },
    nic_issue_place: {
        type: String,
        //required: true
    },
    date_of_birth: {
        type: String,
        required: true
    },
    place_of_birth: {
        type: String,
        //required: true
    },
    age: {
        type: Number,
        //required: true
    },
    nationality: {
        type: String,
        required: true
    },
    race: {
        type: String,
        //required: true
    },
    religion: {
        type: String,
        //required: true
    },
    blood_group: {
        type: String,
        //required: true
    },
    marital_status: {
        type: String,
        required: true
    },
    married_date: {
        type: String,
        //required: true
    },
    divorced_date: {
        type: String,
        //required: true
    },
    personal_grade: {
        type: String,
        //required: true
    },
    corporate_title: { 
        type: String,
        //required: true
    },
    cost_centre: {
        type: String,
        //required: true
    },
    date_joined_group: {
        type: String,
        //required: true
    },
    date_joined: {
        type: String,
        //required: true
    },
    date_left: {
        type: String
        //required: true
    },
    next_increment_date: {
        type: String,
        //required: true
    },
    work_hours_per_day: {
        type: Number,
        //required: true
    },
    radio_one: {
        type: String,
        //required: true
    },
    /*wages_board: {
        type: Number,
        //required: true
    },
    shop_and_office: {
        type: Number,
        //required: true
    },*/
    employment_type: {
        type: String,
        //required: true
    },
    start_date: {
        type: String,
        //required: true
    },
    end_date: {
        type: String,
        //required: true
    },
    statutory_classification: {
        type: String,
        //required: true
    },
    employment_category: {
        type: String,
        //required: true
    },
    employment_group: {
        type: String,
        //required: true
    },
    barcode_no: {
        type: String,
        //required: true
    },
    payroll_no: {
        type: String,
        //required: true
    },
    vehicle_type: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        //required: true
    },
    category: {
        type: String,
        //required: true
    },
    skill: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    mobile_no: {
        type: String,
        required: true
    },

    resident_tel_no: {
        type: String,
        //required: true
    },

    resident_address: {
        type: String,
        required: true
    },

    permanent_address: {
        type: String,
        //required: true
    }
});

const Employee = mongoose.model("Employee", employeeSchemea);//table name(employee), schemea name


module.exports = Employee;//***

//vehicle type uppercase bus van