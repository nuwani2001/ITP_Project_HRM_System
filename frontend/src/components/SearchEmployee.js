import axios from "axios";
import { useEffect, useState } from "react";

function SearchEmployee() {

    const [searchby, setSearchBy] = useState("num");
    const [keyword, setKeyword] = useState("");


    function search(e) {
        e.preventDefault();
        window.location.replace(`http://localhost:3000/employees/search/${searchby}/${keyword}`);
    }

    return (
        <div style={{ width: "90%", margin: "auto" }}>

            <br></br>
            <a href="/" className="btn btn-secondary">Back <i class="fa fa-reply"/></a>

            <div style={{ width: "50%", margin: "auto" }}>
                <center>
                    <form role="search" onSubmit={search}>
                        <div className="row">
                            <div className="col-8">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => {
                                    setKeyword(e.target.value);
                                }} required/>
                            </div>
                            <div className="col-0">
                                <button class="btn btn-outline-secondary" type="submit">Search <i class="fa fa-search"/></button>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-2">
                                <b>Search By</b>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="searchby" id="flexRadioDefault1" value="num" onClick={(e) => {
                                    setSearchBy(e.target.value);
                                }} required />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Employee ID
                                </label>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="searchby" id="flexRadioDefault2" value="designation" onClick={(e) => {
                                    setSearchBy(e.target.value);
                                }} required />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Employee Designation
                                </label>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="searchby" id="flexRadioDefault3" value="HR_active" onClick={(e) => {
                                    setSearchBy(e.target.value);
                                }} required />
                                <label class="form-check-label" for="flexRadioDefault3">
                                    HR Active
                                </label>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="searchby" id="flexRadioDefault4" value="employment_type" onClick={(e) => {
                                    setSearchBy(e.target.value);
                                }} required />
                                <label class="form-check-label" for="flexRadioDefault3">
                                    Employment Type
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

export default SearchEmployee;