import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { Button } from '../../../node_modules/@material-ui/core';

import LogIn from '../../components/LogIn/Login'
import SignIn from '../../components/SignIn/SignIn'

class User extends Component{
    state = {
        hasCount : true
    }
    render(){
        let showPage = <SignIn/>;
        if(this.state.hasCount){
            showPage = <LogIn/>
        }
        console.log(this.props)
        return(
            <div>
                {showPage}
            </div>
        );
    }
}

export default User;