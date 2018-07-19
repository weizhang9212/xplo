import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { Button } from '../../../node_modules/@material-ui/core';

class User extends Component{
    state = {
        hasCount : true
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <div>user</div>


            </div>
        );
    }
}

export default User;