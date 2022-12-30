import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DeleteInventory() {
    const [ItemCode, setItemCode] = useState("");
    const [Description, setDescription] = useState("");
    const [InvoiceNo, setInvoiceNo] = useState("");
    const [Quantity, setQuantity] = useState();
    const [Supplier, setSupplier] = useState("");
    const [OrderDate, setOrderDate] = useState("");

    const { del, id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8070/inventory/get/${id}`).then((res) => {
            console.log(res.data);
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

    function deleteData(e) {
        e.preventDefault();
        axios.delete(`http://localhost:8070/inventory/delete/${id}`).then(() => {
            alert("Inventory deleted");

            window.location.replace("http://localhost:3000/inventory");
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div className="container">
            <h1>Delete Inventory</h1>
            <form onSubmit={deleteData}>
                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="name">Item Code</label>
                    </div>
                    <div class="col-sm-10">
                        <input type="text" className="form-control" id="name" value={ItemCode} placeholder="Enter Item Code" disabled />
                    </div>
                </div>
                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="name">Description</label>
                    </div>
                    <div class="col-sm-10">
                        {/* using the value --> we can display the values that was previously entered by the user.*/}
                        <input type="text" className="form-control" id="age" value={Description} placeholder="Enter Description" disabled />
                    </div>
                </div>
                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="gender">InvoiceNo</label>
                    </div>
                    <div class="col-sm-10">
                        <input type="text" className="form-control" id="gender" value={InvoiceNo} placeholder="Enter Invoice No" disabled />
                    </div>
                </div>

                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="gender">Quantity</label>
                    </div>
                    <div class="col-sm-10">
                        <input type="number" className="form-control" id="quantity" value={Quantity} placeholder="Enter quantity" disabled />
                    </div>
                </div>

                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="gender">Supplier</label>
                    </div>
                    <div class="col-sm-10">
                        <input type="text" className="form-control" id="supplier" value={Supplier} placeholder="Enter supplier" disabled />
                    </div>
                </div>

                <div className="form-group">
                    <div style={{ marginLeft: "0px", marginRight: "auto", width: "10%" }}>
                        <label for="gender">Order Date</label>
                    </div>

                    <div class="col-sm-10">
                        <input type="text" className="form-control" id="date" value={OrderDate} placeholder="Enter Order Date" disabled />

                    </div>
                </div>
                <a  type="button" href = "/inventory" class="btn btn-secondary">Back <i class="fa fa-reply"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit" class="btn btn-danger">Delete <i class="fa fa-trash-o fa-lg"></i></button>
            </form>
        </div>
    )
}