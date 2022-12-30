import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
export default function SearchInventory() {

    const [invId, setinvId] = useState("");

    function SearchInv(e) {
        e.preventDefault();
        window.location.replace(`http://localhost:3000/inventory/search/${invId}`);
    }
    
    return (
        
            <form onSubmit={SearchInv}>
                <center>
                <h1>Search Me!</h1>
                <input onChange = {(e) => {setinvId(e.target.value)}} className="form-control mr-sm-2" type="search" class="w-25 p-3" placeholder="Search Inventory(Eg:- ST001)" required pattern ="[ST0-9]{5}" aria-label="Search"></input>&nbsp;&nbsp;
                <button className="btn btn-outline-success my-2 my-sm-0" class="w-12 p-3" type="submit">Search</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                
             <a  type="button" href = "/inventory" size="lg" className ="btn btn-secondary">Back</a>
           </center>
            </form>
             
        
    )
}

