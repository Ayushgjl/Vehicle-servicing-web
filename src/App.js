import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import{BrowserRouter as Router,Route} from 'react-router-dom';
import  Contact  from './components/Contact';
import BikeBooking from './components/BikeBooking';
import CarBooking from './components/CarBooking';


function App() {
  return (
    <div className="App">

    <Router>
      <Route exact path='/' component={Login}/>
      <Route path='/register' component={Signup}/>
      <PrivateRoute path='/home' component={Home}/>
      <PrivateRoute path='/BikeBooking' component={BikeBooking}/>
      <PrivateRoute path='/CarBooking' component={CarBooking}/>
      <PrivateRoute path='/profile' component={Profile}/>
      <PrivateRoute path='/contact' component={Contact}/>
    
    </Router>




    </div>
  );
}

export default App;
