import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateInventory() {
    const [ItemCode, setItemCode] = useState("");
    const [Description, setDescription] = useState("");
    const [InvoiceNo, setInvoiceNo] = useState("");


    const [Quantity, setQuantity] = useState();
    const [Supplier, setSupplier] = useState("");
    const [OrderDate, setOrderDate] = useState("");

    const { update, id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8070/inventory/get/${id}`).then((res) => {
            console.log(res.data.inventory);
            setItemCode(res.data.inventory.ItemCode);
            setDescription(res.data.inventory.Description);
            setInvoiceNo(res.data.inventory.InvoiceNo);
            setQuantity(res.data.inventory.Quantity);
            setSupplier(res.data.inventory.Supplier);
            setOrderDate(res.data.inventory.OrderDate);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    function updateData(e) {
        e.preventDefault();

        const newInventory = { ItemCode, Description, InvoiceNo, Quantity, Supplier, OrderDate }
        axios.put(`http://localhost:8070/inventory/update/${id}`, newInventory).then(() => {
            alert("Inventory  Updated");
            //window.location --> helps the user to navigate(frontend --> so port is 3000)
            //axios --> navigation between frontend and backend --> so port is 8070.
            window.location.replace("http://localhost:3000/inventory/");

        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div className="container">
            <h1>Update Inventory</h1>
            <form onSubmit={updateData}>
                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="name">Item Code</label>
                    </div>

                    <div class="col-sm-10">
                    <input type="text" className="form-control" id="code" required pattern ="[S][T][0-9]{3}" value={ItemCode} placeholder="Enter Item Code" onChange={(e) => {
                        setItemCode(e.target.value);
                    }} />
                    </div>
                </div>
                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="name">Description</label>
                    </div>


                    {/* using the value --> we can display the values that was previously entered by the user.*/}
                    <div class="col-sm-10">
                    <input type="text" className="form-control" id="description" required  value={Description} placeholder="Enter Description" onChange={(e) => {
                        setDescription(e.target.value);
                    }} />
                    </div>
                </div>
                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="gender">InvoiceNo</label>
                    </div>

                    <div class="col-sm-10">
                    <input type="text" className="form-control" id="invoiceNo" required pattern ="[I][N][V][0-9]{3}" value={InvoiceNo} placeholder="Enter Invoice No" onChange={(e) => {
                        setInvoiceNo(e.target.value);
                    }} />
                    </div>
                </div>

                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="gender">Quantity</label>
                    </div>

                    <div class="col-sm-10">
                    <input type="number" className="form-control" id="quantity" required value={Quantity} placeholder="Enter quantity" onChange={(e) => {
                        setQuantity(e.target.value);

                    }} />
                    </div>
                </div>

                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="gender">Supplier</label>
                    </div>

                    <div class="col-sm-10">
                    <input type="text" className="form-control" id="supplier" required value={Supplier} placeholder="Enter supplier" onChange={(e) => {
                        setSupplier(e.target.value);
                    }} />
                    </div>
                </div>

                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="gender">Order Date</label>
                    </div>

                    <div class="col-sm-10">
                    <input type="date" className="form-control" id="date" required value={OrderDate} placeholder="Enter Order Date" onChange={(e) => {
                        setOrderDate(e.target.value);
                    }} />
                    </div>
                </div>
                <a  type="button" href = "/inventory" class="btn btn-secondary">Back <i class="fa fa-reply"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit" class="btn btn-success">Update <i class="fa fa-pencil"></i></button>
            </form>
        </div>
    )
}

export default UpdateInventory;