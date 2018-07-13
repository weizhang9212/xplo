import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Oridomi from 'oridomi'

export default class PostShow extends Component{
    render(){
        console.log("this is the postShow")
        const style = {
            width: '50%',
            height:'10%'
        };
        const text = "asdfasdf"
        console.log(text);
        return(<div className = "postShow" style = {style}>{text}</div>);
    }
}