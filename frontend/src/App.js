//We have to import the Countercalss in the App.js file
//import Counterclass from './components/Counterclass'; ----> was removed
//import CounterFunction from './components/CounterFunction'; ---> was removed
import Header from './components/Header';
import background from './images/bgImage.jpg';
import AddInventory from './components/AddInventory';

import AllInventory from './components/AllInventory';
//import SearchInventory from './components/SearchInventory';
import UpdateInventory from './components/UpdateInventory';

import DeleteInventory from './components/DeleteInventory';

import './App.css';
import 'react-calendar/dist/Calendar.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";


import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployees from './components/ViewEmployees';
import DeleteEmployee from './components/DeleteEmployee';
import SearchEmployee from './components/SearchEmployee';
import GetEmployee from './components/GetEmployee';
import EmployeeActiveInactive from './components/EmployeeActiveInactive';
import SearchEmployeeResult from './components/SearchEmployeeResult';
//skill
import ViewNineGrid from './components/ViewNineGrid';
import ViewCheckList from "./components/ViewCheckList";
import AddCheckList from './components/AddCheckList';
import UpdateCheckList from './components/UpdateCheckList';
import DeleteCheckList from './components/DeleteCheckList';
import ViewEmployeesInCategory from './components/ViewEmployeesInCategory';
import UpdateSkills from './components/UpdateSkills';
import ViewSingleEmployee from './components/ViewSingleEmployee';
import ViewNineGridReport from './components/ViewNineGridReport';
//health
import SelectPage from './components/SelectPage';
import AllSickEmployee from './components/AllSickEmployee';
import AddChannel from './components/AddChannel';
import AddStock from './components/AddStock';
import AddPregnant from './components/AddPregnant';
import AllStock from './components/AllStock';
import AddSickEmployee from './components/AddSickEmployee';
import AllChannel from './components/AllChannel';
import AllPregnant from './components/AllPregnant';
import UpdatePregnant from './components/UpdatePregnant';
import UpdateChannel from './components/UpdateChannel';
import UpdateSickEmployee from './components/UpdateSickEmployee';
import UpdateStock from './components/UpdateStock';
import DeleteChannel from './components/DeleteChannel';
import DeleteStock from './components/DeleteStock';
import DeletePregnant from './components/DeletePregnant';
import DeleteSickEmployee from './components/DeleteSickEmployee';
import SearchTreatment from './components/SearchTreatment';
import SearchStock from './components/SearchStock';
import SearchPregnant from './components/SearchPregnant';
import SearchChannel from './components/SearchChannel';
import TotalServicesReport from './components/TotalServicesReport';
//attendance
import RunPython from './components/RunPython';
import ViewDailyAttendance from './components/ViewDailyAttendance';
import UpdateAttendance from './components/UpdateAttendance';
import DeleteAttendance from './components/DeleteAttendance';
import ViewSingleEmployeeAtt from './components/ViewSingleEmployeeAtt';
import MonthlyAttChart from './components/MonthlyAttChart';





import AddLeaveRequests from './components/AddLeaveRequests';
import ViewAllLeaveRequests from './components/ViewAllLeaveRequests';

import UpdateLeaveRequests from './components/UpdateLeaveRequests';
import DeleteLeaveRequests from './components/DeleteLeaveRequests';
import LeaveRequestReport from './components/LeaveRequestReport';
import SearchLeaveRequestFunction from './components/SearchLeaveRequestFunction';
import searchLeaveRequests from './components/searchLeaveRequests';
import SearchLeaveByReason from './components/SearchLeaveByReason';
import TransportAdd from './components/TransportAdd';
import TransportAll from './components/TransportAll';
import TransportUpdate from './components/TransportUpdate';
import TransportDelete from './components/TransportDelete';
import TransportSearchBox from './components/TransportSearchBox';
import TransportSearchResults from './components/TransportSearchResults';
import TransportReport from './components/TransportReport';




import AllPayrolls from './components/AllPayrolls';
import AddPayroll from './components/AddPayroll';
import DeletePayroll from './components/DeletePayroll';
import UpdatePayroll from './components/UpdatePayroll';
import PayrollSearch from './components/PayrollSearch';
import OnePayroll from './components/OnePayroll';
import PendingPayrolls from './components/PendingPayrolls';
import SearchInventory from './components/SearchInventory';
import InvSearched from './components/InvSearched';
import Report from './components/InventoryReport';
import InvRequest from './components/InventoryRequest';
import InvRepSumm from './components/InvRepSumm';
import PayrollStats from './components/PayrollStats';
import PayrollReport from './components/PayrollReport';
function App() {
  return (
    <Router>
    <div style={{backgroundImage:`url(${background})`,height:"1350px"}}>

        <Header/>


      <Route path = "/employees/add" exact component = {AddEmployee}/>
      <Route path = "/employees/update/:id" exact component = {UpdateEmployee}/>
      <Route path = "/employees/delete/:id" exact component = {DeleteEmployee}/>
      <Route path = "/employees/get/:id" exact component = {GetEmployee}/>
      <Route path = "/employees/search/" component = {SearchEmployee}/>
      <Route path = "/employees/search/:searchby/:keyword" exact component={SearchEmployeeResult}/>
      <Route path = "/" exact component = {ViewEmployees}/>
      <Route path="/employees/report/" exact component={EmployeeActiveInactive} />
      <Route path="/skillmetric" exact component = {ViewNineGrid} />
      <Route path="/skillmetric/viewNineGridReport" exact component = {ViewNineGridReport} />
      <Route path="/skillmetric/viewCheckList" exact component = {ViewCheckList} />
      <Route path="/skillmetric/addCheckList" exact component = {AddCheckList} />
      <Route path="/skillmetric/updateCheckList/:id" exact component = {UpdateCheckList} />
      <Route path="/skillmetric/deleteCheckList/:id" exact component = {DeleteCheckList} />
      <Route path="/skillmetric/ViewEmployeesInCategory/:category" exact component = {ViewEmployeesInCategory} />
      <Route path="/skillmetric/updateSkills/:id" exact component = {UpdateSkills} />
      <Route path="/skillmetric/viewSingleEmployee/:empNo" exact component = {ViewSingleEmployee} />

      {/* health */}
      <Route path="/health" exact component={SelectPage}/>
      <Route path="/health/addtreat" exact component={AddSickEmployee}/>
      <Route path="/health/addchannel" exact component={AddChannel}/>
      <Route path="/health/addstock" exact component={AddStock}/>
      <Route path="/health/addpregnant" exact component={AddPregnant}/>
      <Route path="/health/viewtreat" exact component={AllSickEmployee}/>
      <Route path="/health/viewstock" exact component={AllStock}/>
      <Route path="/health/viewchannel" exact component={AllChannel}/>
      <Route path="/health/viewpregnant" exact component={AllPregnant}/>
      <Route path="/health/updatePregnant/:id" exact component={UpdatePregnant}/>
      <Route path="/health/updateDocChannel/:id" exact component={UpdateChannel}/>
      <Route path="/health/updateSickEmployee/:id" exact component={UpdateSickEmployee}/>
      <Route path="/health/updateStock/:id" exact component={UpdateStock}/>
      <Route path="/health/deleteStock/:id" exact component={DeleteStock}/>
      <Route path="/health/deleteDocChannel/:id" exact component={DeleteChannel}/>
      <Route path="/health/deletePregnant/:id" exact component={DeletePregnant}/>
      <Route path="/health/deleteSickEmployee/:id" exact component={DeleteSickEmployee}/>
      <Route path="/health/searchSick/:eid" exact component={SearchTreatment}/>
      <Route path="/health/searchStock/:code" exact component={SearchStock}/>
      <Route path="/health/searchPregnant/:eid" exact component={SearchPregnant}/>
      <Route path="/health/searchChannel/:eid" exact component={SearchChannel}/>
      <Route path="/health/totalServicesReport" exact component={TotalServicesReport}/>

      <Route path="/attendence" exact component = {RunPython} />
      <Route path="/attendence/viewDailyAtt" exact component = {ViewDailyAttendance} />
      <Route path="/attendence/updateAttendance/:id" exact component = {UpdateAttendance} />
      <Route path="/attendence/deleteAttendance/:id" exact component = {DeleteAttendance} />
      <Route path="/attendence/viewSingleEmployeeAtt/:empNo" exact component = {ViewSingleEmployeeAtt} />
      <Route path="/attendence/viewBarChart" exact component = {MonthlyAttChart} />



        {/* Leave */} 
        <Route path="/leave/add" exact component={AddLeaveRequests}/>
        <Route path="/leave" exact component ={ViewAllLeaveRequests}/>
        <Route path="/leave/update/:id" exact component={UpdateLeaveRequests}/>
        <Route path="/leave/delete/:id" exact component={DeleteLeaveRequests}/>
        <Route path="/leave/find" component={searchLeaveRequests}/> 
        <Route path="/Report"exact component={LeaveRequestReport}/>
        <Route path="/leave/find/:empID" exact component={SearchLeaveRequestFunction}/>
        <Route path="/leave/reason/:reason" exact component={SearchLeaveByReason}/>

        {/* Transport */}
        <Route path="/transport/add" exact component={TransportAdd}/>
        <Route path="/transport/update/:id" exact component={TransportUpdate}/>
        <Route path="/transport/delete/:id" exact component={TransportDelete}/>
        <Route path="/transport/find" component={TransportSearchBox}/>
        <Route path="/transport/find/:srchby/:keyword" exact component={TransportSearchResults}/>
        <Route path="/transport/report" exact component={TransportReport}/>
        <Route path="/transport/" exact component={TransportAll}/>

        
    
        {/* Payroll */}
        <Route path="/payroll" exact component={PayrollSearch} /> {/*localhost:3000/payroll */}
        <Route path="/payroll/add" exact component={AddPayroll} /> {/*localhost:3000/add */}
        <Route path="/payroll/add/:id" exact component={AddPayroll} />
        <Route path="/payroll" exact component={AllPayrolls} /> {/*localhost:3000/payroll */}
        <Route path="/payroll/update/:id" exact component={UpdatePayroll} />
        <Route path="/payroll/delete/:id" exact component={DeletePayroll} />
        <Route path="/payroll/search/:id" component={OnePayroll} />
        <Route path="/payroll/stats" exact component={PayrollStats}/>
        <Route path="/payroll/report/:id" exact component={PayrollReport}/>
        <Route path="/payroll/pending" exact component={PendingPayrolls}/>
        {/* Inventory */}
        <Route path="/inventory/add/" exact component={AddInventory}></Route>
        <Route path="/inventory/update/:id" exact component={UpdateInventory}></Route>
        <Route path="/inventory/delete/:id" exact component={DeleteInventory}></Route>
        <Route path="/inventory" exact component={AllInventory}></Route>
        <Route path = "/inventory/search" exact component = {SearchInventory}></Route>
        <Route path = "/inventory/search/:code" exact component = {InvSearched}></Route>
        <Route path = "/inventory/report" exact component = {Report}></Route>
        <Route path = "/inventory/request" exact component = {InvRequest}></Route>
        <Route path = "/inventory/report" exact component = {InvRepSumm}></Route>
      </div>
    </Router>
  );

  
}

// const add = (a, b)=>{
//   a+b
// }

export default App;
// module.exports = {
//   App, add
// }