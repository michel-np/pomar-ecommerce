import './App.css';
import React from 'react';
import {  BrowserRouter as Router,  Switch,  Route} from 'react-router-dom';
import AuthState from './contexts/AuthState';
import PrivateRoute from './components/PrivateRoute';
import Page from './components/Page';
import Home from './components/home/Home';
import Login from './components/auth/Login';


const App = () => {
  return (
    <AuthState>
      <Router>
        <Switch>       
          <Route exact path="/">
            <Page component={<Home/>} />
          </Route>
          <Route exact path="/login">
            <Page noHeader component={<Login/>} />
          </Route>
          <PrivateRoute exact path="/shopping-cart">

          </PrivateRoute>
        </Switch>
      </Router>
   </AuthState>
  );
}

export default App;
