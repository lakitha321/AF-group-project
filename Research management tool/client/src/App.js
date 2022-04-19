import './App.css';
import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import StudentRegister from './components/StudentRegister';
import Header from './components/Header';
import Add from './components/Add'
import All from './components/All'
import Landing from './components/Landing'
import Update from './components/Update'
import UploadArea from './components/UploadArea';
import FilesList from './components/AllFiles';
import StudentUpdate from './components/StudentUpdate';
import StudentFilesList from './components/StudentFiles';
import StudentSubmissions from './components/StudentSubmission';
import StudentSubArea from './components/StudentSubArea';
import CreateGroup from './components/CreateGroup';
import StudentGroup from './components/ViewStudentGroup';
import AdminLog from './components/AdminLog';
import AdminHome from './components/AdminHome';
import AdminUpdate from './components/AdminUpdate';
import AllStudents from './components/StudentAll';
import AllStaff from './components/StaffAll';
import StaffUpdate from './components/StaffUpdate';
import StaffRegister from './components/StaffRegister';
import AllSubmissions from './components/SubmissionAll';
import CreateSubmission from './components/SubmissionCreate';
import UpdateSubmission from './components/SubmissionUpdate';

//id, name, email, age, gender, nic, address, mobile, password

import { initialState, reducer } from '../src/reducer/UseReducer';

export const UserContext = createContext();

const Routing = () => {

  return(
    <Routes>
      <Route path='/log' element={<Login />} />
      <Route path='/sreg' element={<StudentRegister />} />
      <Route path='/supd' element={<StudentUpdate />} />
      <Route path='/allstudents' element={<AllStudents />} />
      <Route path='/studentfiles' element={<StudentFilesList />} />
      <Route path='/studentsubmissions' element={<StudentSubmissions />} />
      <Route path='/studentsubarea/:id/:name/:grpid' element={<StudentSubArea />} />
      <Route path='/creategroup' element={<CreateGroup />} />
      <Route path='/viewgroup' element={<StudentGroup />} />
      <Route path='/allstaff' element={<AllStaff />} />
      <Route path='/staffreg' element={<StaffRegister />} />
      <Route path='/updatestaff/:id/:name/:email/:age/:gender/:nic/:address/:mobile/:password' element={<StaffUpdate />} />
      <Route path='/add' element={<Add />} />
      <Route path='/update' element={<Update />} />
      <Route path='/submit' element={<UploadArea />} />
      <Route path='/adminlog' element={<AdminLog />} />
      <Route path='/adminhome' element={<AdminHome />} />
      <Route path='/adminupdate' element={<AdminUpdate />} />
      <Route path='/allsubmissions' element={<AllSubmissions />} />
      <Route path='/createsubmission' element={<CreateSubmission />} />
      <Route exact path='/updatesubmission/:id/:name/:desc/:deadline' element={<UpdateSubmission />} />
      <Route path='/submissions' element={<FilesList />} />
      <Route path='/home' element={<All />} />
      <Route path='/' element={<Landing />} />
    </Routes>
  )
}
///:id/:name/:email/:age/:gender/:nic/:address/:mobile/:password
function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Router>
        <UserContext.Provider value={{state, dispatch}}>
        <Header />
          <br/>
          <br/>
          <Routing />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
