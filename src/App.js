import React, { Component } from 'react';
import PageWrapper from './containers/PageWrapper/PageWrapper'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import User from './containers/User/User'
class App extends Component {
  state = {
    id: 132434
  }

  render() {
    console.log("rerender" + ":" + this.props.login);
    return (
      <BrowserRouter>
        <div className="App">
          {this.props.login ?
            <PageWrapper /> :
            <User />
          }
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.logIn
  };
}

export default connect(mapStateToProps)(App);