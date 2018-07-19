import React , {Component} from 'react';
import { Divider } from '@material-ui/core';
import { Route, Switch, Link } from 'react-router-dom';
import fakeData from './fakeData.js';

export default class PostImage extends Component{
    render(){
        console.log(this.props);

        return (
            <div style={{width:'100%', height:'100vh', backgroundColor: 'black'}}>
            	<Link to= {"/post/:id"}>  
           			<i style={{fontSize: '36px', color: 'white'}}class="material-icons ">close</i>
           		</Link>
				<div>
					<img style= {{display: 'flex', width: '100%', marginTop: '30%'}} src= {fakeData.photo_file_url}/>
				</div>
            </div>
        );
    }
}

