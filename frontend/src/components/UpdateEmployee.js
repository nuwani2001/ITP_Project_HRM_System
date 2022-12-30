import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import moment from 'moment';

function UpdateEmployee() {
    const [emp_id, setEmpId] = useState("");
    const [HR_active, setHRActive] = useState("");
    const [department, setDepartment] = useState("");
    const [payrollStatus, setPayrollStatus] = useState("");
    const [imgname, setimgname] = useState("");
    const [maiden_name, setMaidenName] = useState("");
    const [initials, setInitials,] = useState("");
    const [names_initials, setNamesInitials] = useState("");
    const [full_name, setFullName] = useState("");
    const [other_names, setOtherNames] = useState("");
    const [gender, setGender] = useState("");
    const [nic, setNic] = useState("");
    const [nic_issue_date, setNicIssueDate] = useState("");
    const [nic_issue_place, setNicIssuePlace] = useState("");
    const [date_of_birth, setDateOfBirth] = useState("");
    const [place_of_birth, setPlaceOfBirth] = useState("");
    const [age, setAge] = useState("");
    const [nationality, setNationality] = useState("");
    const [race, setRace] = useState("");
    const [religion, setReligion] = useState("");
    const [blood_group, setBloodGroup] = useState("");
    const [marital_status, setMaritalStatus] = useState("");
    const [married_date, setMarriedDate] = useState("");
    const [divorced_date, setDivorcedDate] = useState("");
    const [designation, setDesignation] = useState("");
    // const [personal_grade, setPersonalGrade] = useState("");
    // const [corporate_title, setCorporateTitle] = useState("");
    // const [cost_centre, setCostCentre] = useState("");
    // const [date_joined_group, setDateJoinedGroup] = useState("");
    const [date_joined, setDateJoined] = useState("");
    const [date_left, setDateLeft] = useState("");
    // const [next_increment_date, setNextIncrementDate] = useState("");
    // const [work_hours_per_day, setWorkHoursPerDay] = useState("");
    // const [radio_one, setRadioOne] = useState("");
    /*const [wages_board, setWagesBoard] = useState("");
    const [shop_and_office, setShopAndOffice] = useState("");*/
    const [employment_type, setEmploymentType] = useState("");
    // const [start_date, setStartDate] = useState("");
    // const [end_date, setEndDate] = useState("");
    // const [statutory_classification, setStatutoryClassification] = useState("");
    // const [employment_category, setEmploymentCategory] = useState("");
    // const [employment_group, setEmploymentGroup] = useState("");
    const [barcode_no, setBarcodeNo] = useState("");
    const [payroll_no, setPayrollNo] = useState("");
    const [vehicle_type, setVehicleType] = useState("");
    const [score, setScore] = useState("");
    const [category, setCategory] = useState("");
    const [skill, setSkill] = useState("");
    const [email, setEmail] = useState("");
    const [mobile_no, setMobileNo] = useState("");
    const [resident_tel_no, setResidentTelNo] = useState("");
    const [resident_address, setResidentAddress] = useState("");
    const [permanent_address, setPermanentAddress] = useState("");

    const { update, id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8070/employees/get/${id}`).then((res) => {
            console.log(res.data.employees);
            setEmpId(res.data.employees.emp_id);
            setimgname(res.data.employees.imgname);
            setHRActive(res.data.employees.HR_active);
            setDesignation(res.data.employees.designation);
            setDepartment(res.data.employees.department);
            setPayrollStatus(res.data.employees.payrollStatus);
            setMaidenName(res.data.employees.initials);
            setInitials(res.data.employees.names_initials);
            setNamesInitials(res.data.employees.names_initials);
            setFullName(res.data.employees.full_name);
            setOtherNames(res.data.employees.other_names);
            setGender(res.data.employees.gender);
            setNic(res.data.employees.nic);
            setNicIssueDate(res.data.employees.nic_issue_date);
            setNicIssuePlace(res.data.employees.nic_issue_place);
            setDateOfBirth(res.data.employees.date_of_birth);
            setPlaceOfBirth(res.data.employees.place_of_birth);
            setAge(res.data.employees.age);
            setNationality(res.data.employees.nationality);
            setRace(res.data.employees.race);
            setReligion(res.data.employees.religion);
            setBloodGroup(res.data.employees.blood_group);
            setMaritalStatus(res.data.employees.marital_status);
            setMarriedDate(res.data.employees.married_date);
            setDivorcedDate(res.data.employees.divorced_date);
            setDesignation(res.data.employees.designation);
            // setPersonalGrade(res.data.employees.personal_grade);
            // setCorporateTitle(res.data.employees.corporate_title);
            // setCostCentre(res.data.employees.cost_centre);
            // setDateJoinedGroup(res.data.employees.date_joined_group);
            setDateJoined(res.data.employees.date_joined);
            setDateLeft(res.data.employees.date_left);
            // setNextIncrementDate(res.data.employees.next_increment_date);
            // setWorkHoursPerDay(res.data.employees.work_hours_per_day);
            // setRadioOne(res.data.employees.radio_one);
            setEmploymentType(res.data.employees.employment_type);
            // setStartDate(res.data.employees.start_date);
            // setEndDate(res.data.employees.end_date);
            // setStatutoryClassification(res.data.employees.statutory_classification);
            // setEmploymentCategory(res.data.employees.employment_category);
            // setEmploymentGroup(res.data.employees.employment_group);
            setBarcodeNo(res.data.employees.barcode_no);
            setPayrollNo(res.data.employees.payroll_no);
            setVehicleType(res.data.employees.vehicle_type);
            setScore(res.data.employees.score);
            setCategory(res.data.employees.category);
            setSkill(res.data.employees.skill);
            setEmail(res.data.employees.email);
            setMobileNo(res.data.employees.mobile_no);
            setResidentTelNo(res.data.employees.resident_tel_no);
            setResidentAddress(res.data.employees.resident_address);
            setPermanentAddress(res.data.employees.permanent_address);
        }).catch((err) => {
            console.log(err.response.data);
        })
    }, []);

    function updateDate(e) {
        e.preventDefault();

        const newEmployee = {
            emp_id,
            HR_active,
            department,
            payrollStatus,
            maiden_name,
            initials,
            names_initials,
            full_name,
            other_names,
            gender,
            nic,
            nic_issue_date,
            nic_issue_place,
            date_of_birth,
            place_of_birth,
            age,
            nationality,
            race,
            religion,
            blood_group,
            marital_status,
            married_date,
            divorced_date,
            // personal_grade,
            // corporate_title,
            designation,
            // cost_centre,
            // date_joined_group,
            date_joined,
            date_left,
            // next_increment_date,
            // work_hours_per_day,
            // radio_one,
            /*wages_board,
            shop_and_office,*/
            employment_type,
            // start_date,
            // end_date,
            // statutory_classification,
            // employment_category,
            // employment_group,
            barcode_no,
            payroll_no,
            vehicle_type,
            score,
            category,
            skill,
            email,
            mobile_no,
            resident_tel_no,
            resident_address,
            permanent_address
        }

        axios.put(`http://localhost:8070/employees/update/${id}`, newEmployee).then(() => {
            alert("Employee Updated")
            window.location.replace("http://localhost:3000/");
        }).catch((err) => {
            alert(err)
        })
    }

            //calculating age
            var agenow = 0;
            var dob = new Date(date_of_birth);
            console.log("DOB " + dob)
            var month_diff = Date.now() - dob.getTime();
            var age_dt = new Date(month_diff);
            var year = age_dt.getUTCFullYear();
            agenow = Math.abs(year - 1970);

    return (
        <><a style={{ marginRight: "0px", marginLeft: "25px", marginTop: "10px" }} href="/" className="btn btn-secondary">Back <i class="fa fa-reply"/> </a><form onSubmit={updateDate} className="form-horizontal">
            <center className="container">
                <div className="form-group">
                    <img src={imgname} className="imgdisplay" />
                </div>
                <div className="form-group">
                    <label for="emp_id">Employee ID</label>
                    <input type="text" className="form-control" id="emp_id" pattern="[E0-9]{6}" value={emp_id} onChange={(e) => {
                        setEmpId(e.target.value);
                    } } required readOnly />
                </div>
            </center>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label for="HR_active">HR Active</label>
                            <select className="custom-select" value={HR_active} onChange={(e) => {
                                setHRActive(e.target.value);
                            } }>
                                <option defaultValue={"Inactive"}>Inactive</option>
                                <option value="Active">Active</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <Tabs forceRenderTabPanel={true}>
                <TabList>
                    <Tab>Personal Details</Tab>
                    <Tab>Employment Details</Tab>
                    <Tab>Contact Details</Tab>
                    <Tab>Other Details</Tab>
                </TabList>
                <div className="container">
                    <TabPanel>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label for="maiden_name">Maiden Name</label>
                                    <input type="text" className="form-control" id="maiden_name" pattern="[A-Za-z .]{1,100}" value={maiden_name} onChange={(e) => {
                                        setMaidenName(e.target.value);
                                    } } required />
                                </div>
                                <div className="form-group">
                                    <label for="initials">Initials</label>
                                    <input type="text" className="form-control" id="initials" pattern="[A-Za-z .]{1,100}" value={initials} onChange={(e) => {
                                        setInitials(e.target.value);
                                    } } required />
                                </div>
                                <div className="form-group">
                                    <label for="names_initials">Names of Initials</label>
                                    <input type="text" className="form-control" id="niames_initials" pattern="[A-Za-z .]{1,100}" value={names_initials} onChange={(e) => {
                                        setNamesInitials(e.target.value);
                                    } } required />
                                </div>
                                <div className="form-group">
                                    <label for="full_name">Full Name</label>
                                    <input type="text" className="form-control" id="full_name" pattern="[A-Za-z .]{1,100}" value={full_name} onChange={(e) => {
                                        setFullName(e.target.value);
                                    } } required />
                                </div>
                                <div className="form-group">
                                    <label for="other_names">Other Names</label>
                                    <input type="text" className="form-control" id="other_names" pattern="[A-Za-z .]{1,100}" value={other_names} onChange={(e) => {
                                        setOtherNames(e.target.value);
                                    } } />
                                </div>
                                <div className="form-group">
                                    <label for="gender">Gender</label>
                                    <select className="custom-select" value={gender} onChange={(e) => {
                                        setGender(e.target.value);
                                    } } required>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label for="nic">NIC</label>
                                    <input type="text" className="form-control" id="nic" value={nic} onChange={(e) => {
                                        setNic(e.target.value);
                                    } } required />
                                </div>
                                <div className="form-group">
                                    <label for="nic_issue_date">NIC Issue Date</label>
                                    <input type="Date" className="form-control" id="nic_issue_date" value={nic_issue_date} onChange={(e) => {
                                        setNicIssueDate(e.target.value);
                                    } } />
                                </div>
                                <div className="form-group">
                                    <label for="nic_issue_place">NIC Issue Place</label>
                                    <input type="text" className="form-control" id="nic_issue_place" value={nic_issue_place} onChange={(e) => {
                                        setNicIssuePlace(e.target.value);
                                    } } />
                                </div>
                                <div className="form-group">
                                    <label for="date_of_birth">Date of Birth</label>
                                    <input type="Date" className="form-control" id="date_of_birth" value={date_of_birth} onChange={(e) => {
                                        setDateOfBirth(e.target.value);
                                    } } required />
                                </div>
                                <div className="form-group">
                                    <label for="place_of_birth">Place of Birth</label>
                                    <input type="text" className="form-control" id="place_of_birth" value={place_of_birth} onChange={(e) => {
                                        setPlaceOfBirth(e.target.value);
                                    } } />
                                </div>
                                <div className="form-group">
                                    <label for="age">Age</label>
                                    <input type="Text" className="form-control" id="age" value={agenow} onChange={(e) => {
                                        setAge(agenow);
                                    } } readOnly/>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label for="nationality">Nationality</label>
                                    <select className="custom-select" value={nationality} onChange={(e) => {
                                        setNationality(e.target.value);
                                    } } required>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="Sri Lankan">Sri Lankan</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="race">Race</label>
                                    <select className="custom-select" value={race} onChange={(e) => {
                                        setRace(e.target.value);
                                    } }>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="Sinhalese">Sinhalese</option>
                                        <option value="Tamil">Tamil</option>
                                        <option value="Burgher">Burgher</option>
                                        <option value="Muslim">Muslim</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="religon">Religion</label>
                                    <select className="custom-select" value={religion} onChange={(e) => {
                                        setReligion(e.target.value);
                                    } }>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="Buddhism">Buddhism</option>
                                        <option value="Hinduism">Hinduism</option>
                                        <option value="Christian">Christian</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Atheism">Atheism</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="blood_group">Blood Group</label>
                                    <select className="custom-select" value={blood_group} onChange={(e) => {
                                        setBloodGroup(e.target.value);
                                    } }>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="marital_status">Marital Status</label>
                                    <select className="custom-select" value={marital_status} onChange={(e) => {
                                        setMaritalStatus(e.target.value);
                                    } } required>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="married_date">Married Date</label>
                                    <input type="Date" className="form-control" id="married_date" value={married_date} onChange={(e) => {
                                        setMarriedDate(e.target.value);
                                    } } />
                                </div>
                                <div className="form-group">
                                    <label for="divorced_date">Divorced Date</label>
                                    <input type="Date" className="form-control" id="divorced_date" value={divorced_date} onChange={(e) => {
                                        setDivorcedDate(e.target.value);
                                    } } />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="row">
                            <div className="col-sm-6">
                                {/* <div className="form-group">
                                    <label for="personal_grade" >Personal Grade</label>
                                    <select className="custom-select" value={personal_grade} onChange={(e) => {
                                        setPersonalGrade(e.target.value);
                                    }}>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="corporate_title" >Corporate Title</label>
                                    <select className="custom-select" value={corporate_title} onChange={(e) => {
                                        setCorporateTitle(e.target.value);
                                    }}>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                    </select>
                                </div> */}
                                <div className="form-group">
                                    <label for="designation">Designation</label>
                                    <select className="custom-select" value={designation} onChange={(e) => {
                                        setDesignation(e.target.value);
                                    } } required>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="HR Manager">HR Manager</option>
                                        <option value="HR Super Intendent">HR Super Intendent</option>
                                        <option value="Data Process Lead">Data Process Lead</option>
                                        <option value="Data Process Coordinator">Data Process Coordinator</option>
                                        <option value="People Service Lead">People Service Lead</option>
                                        <option value="HR Clerk">HR Clerk</option>
                                        <option value="IT Manager">IT Manager</option>
                                        <option value="IT Clerk">IT Clerk</option>
                                        <option value="Engineering Manager">Engineering Manager</option>
                                        <option value="Engineering Clerk">Engineering Clerk</option>
                                        <option value="Finance Manager">Finance Manager</option>
                                        <option value="Finance Clerk">Finance Clerk</option>
                                        <option value="Production Manager">Production Manager</option>
                                        <option value="Production Clerk">Production Clerk</option>
                                        <option value="Shipping Manager">Shipping Manager</option>
                                        <option value="Shipping Clerk">Shipping Clerk</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="department">Department</label>
                                    <select className="custom-select" value={department} onChange={(e) => {
                                        setDepartment(e.target.value);
                                    } } required>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="HR">HR</option>
                                        <option value="IT">IT</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Finance">Finance</option>
                                        <option value="Poduction">Poduction</option>
                                        <option value="Shipping">Shipping</option>
                                    </select>
                                </div>
                                {/* <div className="form-group">
                                    <label for="cost_centre" >Cost Centre</label>
                                    <select className="custom-select" value={cost_centre} onChange={(e) => {
                                        setCostCentre(e.target.value);
                                    }}>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="date_joined_group" >Date Joined Group</label>
                                    <input type="Date" className="form-control" id="date_joined_group" value={date_joined_group} onChange={(e) => {
                                        setDateJoinedGroup(e.target.value);
                                    }} />
                                </div> */}
                                <div className="form-group">
                                    <label for="date_joined">Date Joined</label>
                                    <input type="Date" className="form-control" id="date_joined" value={date_joined} onChange={(e) => {
                                        setDateJoined(e.target.value);
                                    } } />
                                </div>
                                <div className="form-group">
                                    <label for="date_left">Date Left</label>
                                    <input type="Date" className="form-control" id="date_left" value={date_left} onChange={(e) => {
                                        setDateLeft(e.target.value);
                                    } } />
                                </div>
                                {/* <div className="form-group">
                                    <label for="next_increment_date" >Next Increment Date</label>
                                    <input type="Date" className="form-control" id="next_increment_date" value={next_increment_date} onChange={(e) => {
                                        setNextIncrementDate(e.target.value);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label for="work_hours_per_day" >Working Hours Per Day</label>
                                    <input type="text" className="form-control" id="work_hours_per_day" value={work_hours_per_day} onChange={(e) => {
                                        setWorkHoursPerDay(e.target.value);
                                    }} />
                                </div> */}
                                {/* <div className="form-check form-check-inline">
                                    <label for="wages_board" class="form-check-label">Wages Board</label>
                                    <input type="radio" name="radio_one" value="Wages Board" className="form-check-input" id="wages_board" onChange={(e) => {
                                        setRadioOne(e.target.value);
                                    } } />
                                    <label for="shop_and_office" class="form-check-label">Shop & Office</label>
                                    <input type="radio" name="radio_one" value="Shop & Office" className="form-check-input" id="shop_and_office" onChange={(e) => {
                                        setRadioOne(e.target.value);
                                    } } />
                                </div> */}
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="employment_type" >Employment Type</label>
                                    <select className="custom-select" value={employment_type} onChange={(e) => {
                                        setEmploymentType(e.target.value);
                                    }}>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="Manpower">Manpower</option>
                                        <option value="Company">Company</option>
                                    </select>
                                </div>
                                {/* <div className="form-group">
                                    <label for="start_date" >Start Date</label>
                                    <input type="Date" className="form-control" id="start_date" value={start_date} onChange={(e) => {
                                        setStartDate(e.target.value);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label for="end_date" >End Date</label>
                                    <input type="Date" className="form-control" id="end_date" value={end_date} onChange={(e) => {
                                        setEndDate(e.target.value);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label for="statutory_classification" >Statutory Classification</label>
                                    <select className="custom-select" value={statutory_classification} onChange={(e) => {
                                        setStatutoryClassification(e.target.value);
                                    }}>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="employment_category" >Employment Category</label>
                                    <select className="custom-select" value={employment_category} onChange={(e) => {
                                        setEmploymentCategory(e.target.value);
                                    }}>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="employment_group" >Employment Group</label>
                                    <select className="custom-select" value={employment_group} onChange={(e) => {
                                        setEmploymentGroup(e.target.value);
                                    }}>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                    </select>
                                </div> */}
                                <div className="form-group">
                                    <label for="barcode_no">Barcode No</label>
                                    <input type="text" className="form-control" id="barcode_no" value={barcode_no} onChange={(e) => {
                                        setBarcodeNo(e.target.value);
                                    } } />
                                </div>
                                <div className="form-group">
                                    <label for="payroll_no">Payrol lNo</label>
                                    <input type="text" className="form-control" id="payroll_no" value={payroll_no} onChange={(e) => {
                                        setPayrollNo(e.target.value);
                                    } } />
                                </div>
                                <div className="form-group">
                                    <label for="payrollStatus">Payroll Status</label>
                                    <select className="custom-select" value={payrollStatus} onChange={(e) => {
                                        setPayrollStatus(e.target.value);
                                    } } disabled>
                                        <option defaultValue={"Disabled"}>Disabled</option>
                                        <option value="Enabled">Enabled</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    } } required />
                                </div>
                                <div className="form-group">
                                    <label for="mobile_no">Mobile Number</label>
                                    <input type="text" className="form-control" id="mobile_no" value={mobile_no} pattern="0[0-9]{9}" onChange={(e) => {
                                        setMobileNo(e.target.value);
                                    } } required />
                                </div>
                                <div className="form-group">
                                    <label for="resident_tel_no">Resident Telephone Number</label>
                                    <input type="text" className="form-control" id="resident_tel_no" value={resident_tel_no} pattern="0[0-9]{9}" onChange={(e) => {
                                        setResidentTelNo(e.target.value);
                                    } } />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="resident_address">Resident Address</label>
                                    <input type="text" className="form-control" id="resident_address" value={resident_address} onChange={(e) => {
                                        setResidentAddress(e.target.value);
                                    } } required />
                                </div>
                                <div className="form-group">
                                    <label for="permanent_address">Permanent Address</label>
                                    <input type="text" className="form-control" id="permanent_address" value={permanent_address} onChange={(e) => {
                                        setPermanentAddress(e.target.value);
                                    } } />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="score">Score</label>
                                    <input type="text" className="form-control" id="score" value={score} onChange={(e) => {
                                        setScore(e.target.value);
                                    } } disabled />
                                </div>
                                <div className="form-group">
                                    <label for="category">Skill Category</label>
                                    <input type="text" className="form-control" id="category" value={category} onChange={(e) => {
                                        setCategory(e.target.value);
                                    } } disabled />
                                </div>
                                <div className="form-group">
                                    <label for="skill">Skills</label>
                                    <select className="custom-select" value={skill} onChange={(e) => {
                                        setSkill(e.target.value);
                                    } } required>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="OLevel">OLevel</option>
                                        <option value="ALevel">Alevel</option>
                                        <option value="NVQL1">NVQL1</option>
                                        <option value="NVQL2">NVQL2</option>
                                        <option value="NVQL3">NVQL3</option>
                                        <option value="NVQL4">NVQL4</option>
                                        <option value="NVQL5">NVQL5</option>
                                        <option value="NVQL6">NVQL6</option>
                                        <option value="NVQL7">NVQL7</option>
                                        <option value="Computer">Computer</option>
                                        <option value="English">English</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="vehicle_type">Vehicle Type</label>
                                    <select className="custom-select" value={vehicle_type} onChange={(e) => {
                                        setVehicleType(e.target.value);
                                    } } required>
                                        <option defaultValue={""}>Choose...</option>
                                        <option value="VAN">VAN</option>
                                        <option value="BUS">BUS</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <button type="submit" className="btn btn-success">Update <i class="fa fa-pencil"/></button>&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* <button type="reset" className="btn btn-secondary">Reset <i class="fa fa-refresh"/></button> */}
                     <a href="/" className="btn btn-primary">Cancel <i class="fa fa-times"/></a>
                </div>
            </Tabs>
        </form></>
    )

}

export default UpdateEmployee;