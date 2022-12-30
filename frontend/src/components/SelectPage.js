import React from "react";


function SelectPage() {
    return (
        <center>
            <br></br>
            <div className="container">

                <table className="table table-borderless">
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td><p className="font-weight-bold" style={{ fontSize: "25px" }}>Medical Treatment</p></td>
                       
                        <td>
                            <a href="/health/viewtreat" type="button" className="btn btn-outline-info btn-lg" >View Details <i class="fa fa-eye"></i></a>
                        </td>
                    </tr>

                    <tr>
                        <td><p className="font-weight-bold" style={{ fontSize: "25px" }}>Doctor Channeling</p></td>
                        
                        <td>
                            <a href="/health/viewchannel" type="button" className="btn btn-outline-info btn-lg" >View Details <i class="fa fa-eye"></i></a>
                        </td>
                    </tr>

                    <tr>
                        <td><p className="font-weight-bold" style={{ fontSize: "25px" }}>Medical Stock</p></td>
                        
                        <td>
                            <a href="/health/viewstock" type="button" className="btn btn-outline-info btn-lg" >View Details <i class="fa fa-eye"></i></a>
                        </td>
                    </tr>

                    <tr>
                        <td><p className="font-weight-bold" style={{ fontSize: "25px" }}>Pregnant Employees</p></td>
                        
                        <td>
                            <a href="/health/viewpregnant" type="button" className="btn btn-outline-info btn-lg" >View Details <i class="fa fa-eye"></i></a>
                        </td>
                    </tr>
                </table>
            </div>
        </center>



    );
}

export default SelectPage;