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
       <Route path="/user" 
                    component = {() =>(
                      this.state.logIn ? (
                        <Redirect to={"/map/"+ this.state.id} />
                    ) : (
                            <User logIn = {this.logIn.bind(this)}/>
                        )
                    )} />

       <Route path='/'
                    component={() => (
                        this.state.logIn ? (
                          <PageWrapper logIn = {this.logIn.bind(this)}/>
                        ) : (
                          <Redirect to={"/user"} />
                            )
                    )}
                />
       </div>
      </BrowserRouter>
    );
  }
}

export default App;