import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import Register from './Components/Register/Register.js';
import Login from './Components/Login/Login.js';
import About from './Components/About/About.js';
import NotFound from './Components/NotFound/NotFound.js';
import Footer from './Components/Footer/Footer.js';
import AuthProvider from './Context/AuthProvider.js';
import Trainer from './Components/Trainer/Trainer.js';
import Package from './Components/Package/Package.js';
import Details from './Components/Details/Details/Details.js';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute.js';






function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path="/trainer">
              <Trainer></Trainer>
            </Route>
            <Route path="/package">
              <Package></Package>
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
      </AuthProvider>
    </div>
  );
}

export default App;

