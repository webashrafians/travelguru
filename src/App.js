import React, { createContext, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Booking from './components/Booking/Booking';
import Contact from './components/Contact/Contact';
import Destination from './components/Destination/Destination';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import News from './components/News/News';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RoomDetails from './components/RoomDetails/RoomDetails';

export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/booking/:bookingName">
            <Booking></Booking>
          </Route>
          <PrivateRoute path="/roomdetails">
            <RoomDetails></RoomDetails>
          </PrivateRoute>
          <Route path="/news">
            <News></News>
          </Route>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>           
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
