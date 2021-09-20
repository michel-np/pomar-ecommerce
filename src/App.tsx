import './App.css';
import React from 'react';
import {  BrowserRouter as Router,  Switch,  Route} from 'react-router-dom';
import AuthState from './contexts/AuthState';
import ShoppingCartState from './contexts/ShoppingState';
import PrivateRoute from './components/PrivateRoute';
import Page from './components/Page';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import FruitDetailPage from './components/home/FruitDetailPage'
import GlobalStyle from './styles/globalStyles';
import PurchaseSuccess from './components/shopping-cart/PurchaseSuccess'
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthState>
      <ShoppingCartState>      
      <Router>
        <GlobalStyle/>
        <Switch>     
          <PrivateRoute path="/purchase-success" component={PurchaseSuccess} />  
          <Route path="/shopping-cart">
            <Page component={ShoppingCart}/>
          </Route>
          <Route path="/login">
            <Page noHeader component={Login} />
          </Route>          
          <Route exact path="/">
            <Page component={Home} />
          </Route>
          <Route path="/:id">
            <Page component={FruitDetailPage} />
          </Route>

          
        </Switch>
      </Router>
      </ShoppingCartState>
   </AuthState>
    </ThemeProvider>
  );
}

export default App;
