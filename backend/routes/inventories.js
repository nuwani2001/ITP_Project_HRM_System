
//The express package has a function called "Router" --> import that.
const router = require("express").Router();

//Next we have to use the model here(student.js in the model folder)
let  Inventory = require("../models/Inventory");

//INSERT ROUTE
/*There's a method called "route" in the router.
THe rout for 'CREATE' will be executed with thw cose below.
*/
router.route("/add").post((req, res) => {

    //The 3 fields of data from the frontend, after clicking on the submit button --> a request is sent to the DB asking to save it in the backend.
    //The data is sent as the body of the request.
    //In the backend, 3 variables are created to fetch the data that is passed via the request body.
    const ItemCode = req.body.ItemCode;
    const Description = req.body.Description;
    const InvoiceNo = req.body.InvoiceNo;

    //Casting is needed as the data type of Quantity is a number. The other 5 are Strings so no casting is needed when fetched.
    const Quantity = Number(req.body.Quantity);
    const Supplier = req.body.Supplier;
    const OrderDate = req.body.OrderDate;

    const newInventory = new Inventory({
        ItemCode,
        Description,
        InvoiceNo,
        Quantity,
        Supplier,
        OrderDate
    })
    //If insertion is successful --> perform the things inside the body.
    //save() --> passes the created object of the model to the  MongoDB database.The 6 values are passed like documents.
    newInventory.save().then(() => {

        //response is set in the json format to the frontend if insertion was successful.
        res.json("Inventory Added")

        //Exception handling. ---> passes the error.
    }).catch((err) => {

        //The error is displayed in the console following an insertion.
        console.log(err);
    })

})

//DISPLAY ROUTE
/*The teacher who added the details should now be able to view those students details. The route for "DISPLAY" is constructed below.
There's a method called "route" in the router.
Uses the "get" http request to obtain details from the DB.
*/
router.route("/").get((req,res) => {

    /*"Student" is the model name here --> which uses the "find" method since we want to display details of all students.
    //Can use "findbyId" method if we want to display details of just one student.(Various find methods abvailable, can choose anyone as per the need)
    "then" shows that if request is successful, the body will be implemented/executed.
    */

    Inventory.find().then((inventories) => {
        //if requuest is successful --> a response of the students details are sent to the front end in the json format.
        res.json(inventories)

        //if request fails --> exception handling is done --> the error is passed in the catch.
    }).catch((err) => {

        //the error is displayed in the console.
        console.log(err)
    })
})

//UPDATE ROUTE
/*Shows the backend URL.
The id of the person to be updated is passed via the URL ---> no one can see this since its a backend route.
":id" --> through this we can remove the id part passed in the URL, fetch it and use it.
The MongoDB generates an id for each insertion or document  by default automatically. Thus, no need to create an id attribute in the model.
"async" feature in js --> enables better responsiveness ---> avoids clashes of requests. --> each request is serviced and informed to the user asynchronously.
Can use "post" instead of "put" as well. ---> put will replace the old values with the updated values.
Then create an arrow function
*/
router.route("/update/:id").put(async(req,res) => {

    //The parameter of id passed in the URL is fetched and stored in a variable called "userId"
    //(The attribute passed after params should be as asame as the one specified in the route after "update")
    let inventoryId = req.params.id;

    /*de-structure feature in js.(Can fetch everything from the body in a single line of code)
    The things following const are the variables in the frontend that holds the updated values. These are sent as a request body to the backend.
    */
    const {ItemCode, Description, InvoiceNo,Quantity,Supplier,OrderDate} = req.body;

    //can create seperate variables for each attribute instead also.
    /*
        const name = req.body.name;
        const age = Number(req.body.age);
        const gender = req.body.gender;
    */

        //This variable is the object to update. This object will be passed to the record of the variable "userId" and the respective id is updated with these values in the object.
        const updateInventory = {
            ItemCode, 
            Description, 
            InvoiceNo,
            Quantity,
            Supplier,
            OrderDate
        }

        /*The "Student" after await is the model.
            The findByIdAndUpdate function will find the user by the id and update the necessary values.
            2 parameters are passed in this method.
            1st parameter --> the id is assigned to a variable called "userId" --> this is passed.(Shows who's record needs to be updated)
            2nd parameter --> pass the object that we created to do the update.(This object holds the values to be updated)
            Can use "findOneAndUpdate" method if we are updating records of users who's primary key is either the NIC, email or name.(can be used when id is not their pk)
            await ensures that servicing of update requests doesn't crash the system.(One update at a time, the second update request has to wait till the first one is finished)
        */
        const update = await Inventory.findByIdAndUpdate(inventoryId,updateInventory);

        //FIRST APPROACH OF ESTABLISHING SUCCESS OR FAILURE OF UPDATE

        /*If the update is successful, need to send a response to the frontend in the json format and inform user about the success.
        404 status --> web page not found
        401 status --> unauthorized
        200 status --> successful
        500 status --> server error
        As the second parameter --> can send the "update" variable to the frontend and show what's updated(all updated data values displayed)
        */
        res.status(200).send({status : "Inventory updated", inventory : update})

       
        //2nd APPROACH OF DECLARING SUCCESS OR FAILURE OF UPDATE.
       /* const update = await Student.findByIdAndUpdate(userId,updateStudent).then(() => {
            //if the update was successful --> send the response to the frontend.
            res.status(200).send({status : "user updated", user : update})

        }).catch((err) => {
            console.log(err);

            //Can send a response to the frontend by passing the code as 500.(server error)
            res.status(500).send({status : "Error with updating data."});
        })        
      */
})

//DELETE STUDENT ROUTE

/* The URL is given.
A delete request is given
An async function is given --> for asynchronous servicing of cdelete requests
Once the delete button is submitted, details of only 1 student must be deleted.  --> All students details should not be deleted.
User id is sent to the backend via the URL.
*/
router.route("/delete/:id").delete(async(req,res) => {

    //The user id from the URL, is removed and assigned to the variable called "userId"
    let inventoryId = req.params.id;

    //Just the userid is enough to delete all records of that respective student, so we pass only that.(No need to assign name,age and gender to another varaiable like in "update")
    await Inventory.findByIdAndDelete(inventoryId).then(() => {
        //If successfully deleted, then we send a response status to the front end.(status 200 --> successful)
        res.status(200).send({status : "Inventory deleted"});

        //If there's a failure upon deletion ---> handled like an exception. The error is passed in the catch clause.
    }).catch((err) =>{

        //This error message is passed in the console.
        console.log(err.message);

         //Can send a response to the frontend by passing the code as 500.(server error)
        res.status(500).send({status : "Error with delete inventory", error : err.message});
    })
    
})

//HOW TO GET DETAILS OF ONLY ONE STUDENT.

//Getting details from the DB meaning, its a "get" http request.
//The first bracket after route shows the URL pattern.
//Async function is used for better asynchronous servicing of fetching detail requests.

router.route("/get/:id").get(async(req,res) => {
    
    //The userid passed via the URL, is fetched using the req.params method and assigned to a variable called "userId"
    let inventoryId = req.params.id;

    //The details fetched regarding the student of the respective student id, is assigned to an object called "user"
    const user = await Inventory.findById(inventoryId).then((inventory) => {

        //If the fetching is successful then a response is sent to the frontend. The 200 status is sent(success status)
        //Along with that, we can also pass the "user" object that we created, and display the fetched details of the respective user to the frontend.
       //staus is not a keyword, can use the word "message" instead.
        res.status(200).send({status : "inventory fetched", inventory})
    }).catch((err) => {

        //If the fetching had errors --> this is dealt like exception handling, where the error is passed in the catch clause.
        //This error is displayed in the console.
        console.log(err.message);

        //A response staus of 500 is sent to the frontend, that shows an internal server error. The error message is also displayed using err.messagen
        res.status(500).send({status : "Error with get inventory" , error : err.message});
    })
})

//Fetching inventory details based on the item code.
router.route("/getItem/:itemCode").get(async(req,res) => {
    let itemCode = req.params.itemCode;

    await Inventory.findOne({"ItemCode" : `${itemCode}`}).then((inventory) => {
        res.status(200).send({status : "Inventory Details fetched", inventory})
    }).catch((err) => {
        console.log(err.message);

        res.status(500).send({status : "Error with fetching inventory details",error : err.message});
    })
})


//UPDATING THE QUANTITY OF A SPECIFIC ITEM CODE.

router.route("/updateQuantity/:id").put(async(req,res) => {

    //The parameter of id passed in the URL is fetched and stored in a variable called "userId"
    //(The attribute passed after params should be as same as the one specified in the route after "update")
    let inventoryId = req.params.id;

    /*de-structure feature in js.(Can fetch everything from the body in a single line of code)
    The things following const are the variables in the frontend that holds the updated values. These are sent as a request body to the backend.
    */
    //const {Quantity} = req.body;
    const Quantity = Number(req.body.Quantity);
    //can create seperate variables for each attribute instead also.
    /*
        const name = req.body.name;
        const age = Number(req.body.age);
        const gender = req.body.gender;
    */

        //This variable is the object to update. This object will be passed to the record of the variable "userId" and the respective id is updated with these values in the object.
        const updateNewQuantity = {
            Quantity
        }

        /*The "Student" after await is the model.
            The findByIdAndUpdate function will find the user by the id and update the necessary values.
            2 parameters are passed in this method.
            1st parameter --> the id is assigned to a variable called "userId" --> this is passed.(Shows who's record needs to be updated)
            2nd parameter --> pass the object that we created to do the update.(This object holds the values to be updated)
            Can use "findOneAndUpdate" method if we are updating records of users who's primary key is either the NIC, email or name.(can be used when id is not their pk)
            await ensures that servicing of update requests doesn't crash the system.(One update at a time, the second update request has to wait till the first one is finished)
        */
        const update = await Inventory.findByIdAndUpdate(inventoryId,updateNewQuantity);

        //FIRST APPROACH OF ESTABLISHING SUCCESS OR FAILURE OF UPDATE

        /*If the update is successful, need to send a response to the frontend in the json format and inform user about the success.
        404 status --> web page not found
        401 status --> unauthorized
        200 status --> successful
        500 status --> server error
        As the second parameter --> can send the "update" variable to the frontend and show what's updated(all updated data values displayed)
        */
        res.status(200).send({status : "Inventory new Quantity updated"})
    })
module.exports = router;