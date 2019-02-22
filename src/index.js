import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

// your code goes here
class Home extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Navbar/>
          <Route exact path="/" />
          <Route path ="/components/Happy" component={Happy} />
          <Route path ="/components/Guilty" component={Guilty} />
          <Route path ="/components/Sleepy" component={Sleepy} />
        </Switch>
      </BrowserRouter>
    
    )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
