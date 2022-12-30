import axios from "axios";
import { useEffect, useState } from "react";

function TransportSearchBox(){

    const [srchby, setSrchby] = useState("num");
    const [keyword, setKeyword] = useState("");

    
    function search(e){
        e.preventDefault();
        window.location.replace(`http://localhost:3000/transport/find/${srchby}/${keyword}`);
    }

    return(
        <div style={{width:"90%", margin:"auto"}}>

            <br></br>
            <a href="/transport" className="btn btn-secondary">Back <i class="fa fa-reply"></i></a>

            <div style={{width:"50%", margin:"auto"}}>
                <center>
                <form role="search" onSubmit={search}>
                    

                    <div className="row">

                        <div className="col-8">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
                                setKeyword(e.target.value);
                            }}/>
                        </div>

                        <div className="col-0">
                            <button class="btn btn-outline-secondary" type="submit" style={{height:"40px",width:"70px"}}><i class="fa fa-search"></i></button>
                        </div>

                    </div>
                    <br></br>
                    <div className="row">

                        <div className="col-2">
                            <b>Search By</b>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="searchBy" id="flexRadioDefault1" value="num" onClick={(e)=>{
                                setSrchby(e.target.value);
                            }} required/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Vehicle No
                            </label>
                        </div>

                        &nbsp;&nbsp;&nbsp;

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="searchBy" id="flexRadioDefault2" value="type" onClick={(e)=>{
                                setSrchby(e.target.value);
                            }} required/>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Vehicle Type
                            </label>
                        </div>
                    </div>
                    
                </form>
                </center>
            </div>

            <br></br>
            
        </div>
    )

}

export default TransportSearchBox;
