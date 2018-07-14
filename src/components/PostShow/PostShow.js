import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Oridomi from 'oridomi'
import './PostShow.css'
import fakeData from './fakeData.js'
import 'tachyons'

export default class PostShow extends Component{
    
        state ={
            title:null,
            postDetail : null,
            postReview : [],
            img : null,
            date: null,
            owner_name: null

        }

        componentDidMount(){
            
            this.setState(
                {
                title:       fakeData.photo_title,
                postDetail : fakeData.detail,
                postReview : fakeData.review,
                img :        fakeData.photo_file_url,
                date:        fakeData.upload_date,
                owner_name:  fakeData.owner_name
                }
            );
            console.log(" markers will mount " + this.state.postReview );
             //var title=fakeData.photo_title;
        }

        render(){
            //console.log("this is the postShow")
            const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
                width: '100%', // 90vw basically means take up 90% of the width screen. px also works.
                height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
            }
            return(
                <div className = "postShow" style = {style}>
                    <h2>{this.state.title}</h2>
                    <p1> By {this.state.owner_name} on {this.state.date} </p1>
                    <img id = "postImg" src = {this.state.img} />
                    <p2 id = "details">{this.state.postDetail}</p2>
                    <ul> 
                        <li> {this.state.postReview.user_id}: {this.state.postReview.user_comment}</li>
                        <li> {this.state.postReview.user_id}: {this.state.postReview.user_comment}</li>
                        <li> {this.state.postReview.user_id}: {this.state.postReview.user_comment}</li>
                        <li> {this.state.postReview.user_id}: {this.state.postReview.user_comment}</li>                        
                    </ul>
                </div>);
    }
}