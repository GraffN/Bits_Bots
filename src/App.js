import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './components/Homepage';
import Store from './Pages/Store';
import Login from './components/login';
import register from './components/register';
import Checkout from './Pages/Checkout';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';


function App(){
  
  return(
      <Router>
        <div className="App">
          <Switch>        
            <Route path ="/" exact component={Login}/>
            <Route path ="/register" component={register}/>
            <Route path ="/Homepage" component={Homepage}/>
            <Route path ="/Store" component={Store}/>
            <Route path ="/checkout" component={Checkout}/>

          </Switch>
        </div>
      </Router>

  )
}
export default App;