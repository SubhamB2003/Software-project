import React from 'react'
import { Switch, Route } from "react-router-dom";
import DrawerAppBar from './Components/Appbar/DrawerAppBar';
import ForgetPwd from './Pages/Auth/ForgetPwd';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Home from './Pages/Home/Home';
import Result from './Pages/StudentProtal/Result';
import StudentCom from './Pages/StudentProtal/StudentCom';
import StudentLogin from './Pages/StudentProtal/StudentLogin';

function App() {
  return (
    <>
      <DrawerAppBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/forgetpassword">
          <ForgetPwd />
        </Route>
        <Route exact path="/studentlogin">
          <StudentLogin />
        </Route>
        <Route exact path="/studentportal">
          <StudentCom />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
      </Switch>
    </>
  )
}

export default App