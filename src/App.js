import React, { Component } from 'react';
import PageWrapper from './containers/PageWrapper/PageWrapper'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import User from './containers/User/User'
class App extends Component {
  state = {
    sideOpen: false,
    logIn: false,
    id: 132434
  }

  logIn = () => {
    this.setState({ logIn: true });
  }
  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        <div className="App">
          {this.props.logIn ?
            <PageWrapper logIn={this.logIn.bind(this)} /> :
            <User logIn={this.logIn.bind(this)} />
          }
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logIn: state.logIn
  };
}
export default connect(mapStateToProps)(App);