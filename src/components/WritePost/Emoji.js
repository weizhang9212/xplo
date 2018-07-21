import React , {Component} from 'react';
import { Divider } from '@material-ui/core';
import { Route, Switch, Link } from 'react-router-dom';
import './Emoji.css'

export default class Emoji extends Component{
  
    state = {
            emojis: [0x1F600, 0x1F604, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,
              0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 0x1F5FA, 0x23F0, 0x1F579, 0x1F4DA,
              0x1F431, 0x1F42A, 0x1F439, 0x1F424,0x1F600, 0x1F601, 0x1F602,0x1F923,0x1F603,
              0x1F604,0x1F605,0x1F606,0x1F609,0x1F60A,0x1F60B,0x1F60E, 0x1F618,0x1F970,0x1F617
              ,0x1F619, 0x1F61A,0x1F642,0x1F917,0x1F929,0x1F914,0x1F928,0x1F610,0x1F611,0x1F636,
              0x1F644,0x1F60F,0x1F623,0x1F625,0x1F62E,0x1F910,0x1F62F],
    }

    render(){
        console.log(this.props);
        return (
            <div style={{width:'100%', height:'100vh'}}>
            	<div className = "Header">
	            	<i onClick = {this.props.toWrite} style={{fontSize: '50px', color: 'black'}} className="material-icons ">keyboard_arrow_left</i>	            		
           			<span id = "Title" style={{paddingLeft: '31%'}}><b>Emoji</b></span>
            	</div>
              <div className = "Gallery">
                  {this.state.emojis.map(emoji=>(
                  <span id = "Emojis" onClick = {() => this.props.choseEmoji(emoji)}>
                    {String.fromCodePoint(emoji)} 
                  </span>     
                  ))}       
              </div>
               
            </div>
        );
    }
}
