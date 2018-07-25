import React , {Component} from 'react';
import { Divider } from '@material-ui/core';
import { Route, Switch, Link } from 'react-router-dom';
import GeolocationExample from './GeolocationExample'
import MapList from './MapList';
import './Address.css'

export default class Address extends Component{


    render(){
        console.log(this.props);

        return (
            <div style={{width:'100%', height:'100vh'}}>
            	<div className = "Header">
	            	<i onClick = {this.props.toWrite} style={{fontSize: '50px', color: 'black'}} className="material-icons ">keyboard_arrow_left</i>	            		
           			<span id = "Title" style={{paddingLeft: '31%'}}><b>Address</b></span>
            	</div>
              <div className = "SubContent">
           			<MapList/>
              </div>
            </div>
        );
    }
}