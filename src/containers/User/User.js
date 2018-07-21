import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { Button } from '../../../node_modules/@material-ui/core';
import { connect } from 'react-redux'
import LogIn from '../../components/LogIn/Login'
import SignIn from '../../components/SignIn/SignIn'

class User extends Component {
    state = {
        hasCount: true
    }

    toLogin = () => {
        this.setState({ hasCount: true });
    }

    toSignup = () => {
        this.setState({ hasCount: false })
    }


    componentDidMount(){
    }

    
    render() {
        let showPage = <SignIn
            logIn = {this.props.login}
            toLogin={this.toLogin.bind(this)} />;
        if (this.state.hasCount) {
            showPage = <LogIn 
            logIn = {this.props.login}
            toSignup={this.toSignup.bind(this)} />
        }
        return (
            <div>
                {showPage}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      logIn: state.logIn
    };
  }
  
  const mapDispatchToProps = dispatch =>{
      return {
        login: ()=>{
          dispatch({ type : 'LOGIN'});
        }
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(User);