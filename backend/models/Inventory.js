//we import the mongoose package using the 'require' keyword.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    ItemCode :{
        type : String,
        required : true
    },

    Description:{
        type : String,
        required : true
    },

    InvoiceNo : {
        type : String,
        required : true
    },

    Quantity : {
        type : Number,
        required : true
    },

    Supplier : {
        type : String,
        required : true
    },
    OrderDate : {
        type : String,
        required : true
    }
})

//From the model the data goes to the DB.
//tHE MONGOOSE PACAKAGE HAS A FUNCTON CALLED "model"
//Pass 2 parameters in this function.   Parameter1 --> The document/table to which data is passed.
//Parameter2 --> The reference of the schema you created.(inventorySchema)
//"Inventory"  ---> changes to "students" in MongoDB
const Inventory = mongoose.model("Inventory",inventorySchema);

//Very important -> export the model created.
module.exports = Inventory;