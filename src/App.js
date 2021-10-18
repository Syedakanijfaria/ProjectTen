import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize.js';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import Service from './Components/Service/Service.js';
import Register from './Components/Register/Register.js';
import Login from './Components/Login/Login.js';
import About from './Components/About/About.js';
import NotFound from './Components/NotFound/NotFound.js';
import Footer from './Components/Footer/Footer.js';



initializeAuthentication();

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

