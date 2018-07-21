import React , {Component} from 'react';
import { Divider } from '@material-ui/core';
import { Route, Switch, Link } from 'react-router-dom';
import './WritePost.css'
import fakeData from '../PostShow/fakeData.js';


export default class WritePost extends Component{
    constructor(props) {
	    super(props);
	    this.state = {
	      value: ''
    };

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

  	handleChange(event) {
    	this.setState({value: event.target.value});
  	}

 	handleSubmit(event) {
    	alert('An essay was submitted: ' + this.state.value);
    	event.preventDefault();
  	}

    render(){
        console.log(this.props);

        return (
            <div>
            	<div className = "Header">
            		<Link to= {"/"}> 
	            		<i style={{fontSize: '50px', color: 'black'}} className="material-icons ">keyboard_arrow_left</i>	            		
            		</Link>
            		<span id = "Title"><b>Preview</b></span>
            		<Link to= {"/"} style = {{textDecoration: 'none', paddingTop: '4%',}}> 
            			<span id = "Next" style = {{color:'black',}}><b>Publish</b></span>
            		</Link>
            	</div>
            	<div className = "Content">
            		<textarea id = "myTextArea" placeholder = "Describe here!" style={{border: 'none'}}
	                  value={this.state.value} onChange={this.handleChange}>
	               	</textarea>
	               	<div className = "SubContent">
	               		<div className = "Privacy" onClick = {this.props.toPrivacy}>
	               			<span style={{fontFamily: 'Proxima Nova Alt Light', fontSize: 16, marginLeft: '6%', marginTop: '3%'}} > Privacy </span> 
	               			<span style={{fontFamily: 'Proxima Nova Alt Light', fontSize: 16, marginLeft: '62%', marginTop: '3%'}} > {this.props.privacy} </span> 
	               			<i style={{paddingTop: '2.5%'}} className="material-icons">keyboard_arrow_right</i>
	               		</div>
	               		<Divider/>
	               		<div className = "Photo">
	               			<span style={{fontFamily: 'Proxima Nova Alt Light', fontSize: 16, marginLeft: '6%', marginTop: '3%'}} > ChosenPhoto <br/></span> 
	               			<img id = "ChosenImg" src= {this.props.photo_url} onClick = {this.props.toPhoto}/>
	               		</div>
	               		<Divider/>
	               		<div className = "Emoji" onClick = {this.props.toEmoji}>
	               			<span style={{fontFamily: 'Proxima Nova Alt Light', fontSize: 16, marginLeft: '6%', marginTop: '3%'}} > Emoji <br/></span> 
	               			<span style={{fontFamily: 'Proxima Nova Alt Light', fontSize: 16, marginLeft: '70%', marginTop: '2%'}} > {String.fromCodePoint(this.props.emoji)} </span> 
	               			<i style={{paddingTop: '2.5%'}} className="material-icons">keyboard_arrow_right</i>
	               		</div>
	               		<Divider/>
	               		<div className = "Address">
	               			<span style={{fontFamily: 'Proxima Nova Alt Light', fontSize: 16, marginLeft: '6%', marginTop: '3%'}} > Address <br/></span> 
	               			<i style={{paddingTop: '2.5%', marginLeft: '70%'}} className="material-icons">keyboard_arrow_right</i>
	               		</div>
	               	</div>
            	</div>
            </div>
        );
    }
}