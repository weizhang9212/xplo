import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import { Route, Switch, Link } from 'react-router-dom';

export default class PostImage extends Component {
    render() {
        console.log(this.props);

        return (
            <div style={{ width: '100%', height: '100vh', backgroundColor: 'black' }}>
                <i onClick = {this.props.toWrite} style={{ fontSize: '36px', color: 'white' }} className="material-icons ">close</i>
                <div>
                    <img style={{ display: 'flex', width: '100%', marginTop: '30%' }} src={this.props.img} />
                </div>
            </div>
        );
    }
}