import React, { Component } from 'react';
import PageWrapper from './containers/PageWrapper/PageWrapper'
import { BrowserRouter } from 'react-router-dom'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import User from './containers/User/User'
class App extends Component {
  state = {
    sideOpen: false,
    logIn: false,
    id : 132434
}

logIn = () =>{
    this.setState({logIn : true});
}
  render() {
    return (
      <BrowserRouter>
       <div className="App">
            {this.state.logIn ? 
            <PageWrapper logIn = {this.logIn.bind(this)}/> :
            <User logIn = {this.logIn.bind(this)}/>  
          }
       </div>
      </BrowserRouter>
    );
  }
}

export default App;