import React , {Component} from 'react';
import { Divider } from '@material-ui/core';
import { Route, Switch, Link } from 'react-router-dom';
import './Privacy.css'

export default class Privacy extends Component{
    render(){
        console.log(this.props);

        return (
            <div style={{width:'100%', height:'100vh'}}>
            	<div className = "Header">
	            	<i onClick = {this.props.toWrite} style={{fontSize: '50px', color: 'black'}} className="material-icons ">keyboard_arrow_left</i>	            		
           			<span id = "Title"><b>Privacy</b></span>
            	</div>
               	<div className = "SubContent">
               		<div className = "Privacy" onClick = {this.props.setPublic}>
               			<span style={{fontFamily: 'Proxima Nova Alt Light', fontSize: 16, marginLeft: '6%', marginTop: '3%'}} > Public </span>               			
               		</div>
               		<Divider/>
               		<div className = "Emoji" onClick = {this.props.setPrivate}>
               			<span style={{fontFamily: 'Proxima Nova Alt Light', fontSize: 16, marginLeft: '6%', marginTop: '3%'}} > Private <br/></span> 
               		</div>
               		<Divider/>
               	</div>

            </div>
        );
    }
}