import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";

import './App.css';


import Login from "./Containers/Login/Login";
import Register from "./Containers/Register/Register";
import HomePage from "./Containers/HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/login' exact component={Login}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
