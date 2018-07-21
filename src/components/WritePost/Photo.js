import React , {Component} from 'react';
import { Divider } from '@material-ui/core';
import { Route, Switch, Link } from 'react-router-dom';

import './Photo.css'

export default class Photo extends Component{
  
    state = {
          locations: [
              { "photo_id": 27932, "photo_title": "Atardecer en Embalse", "photo_url": "http://www.panoramio.com/photo/27932", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/27932.jpg", "longitude": -64.404945, "latitude": -32.202924, "width": 500, "height": 375, "upload_date": "25 June 2006", "owner_id": 4483, "owner_name": "Miguel Coranti", "owner_url": "http://www.panoramio.com/user/4483" }
              ,
              { "photo_id": 522084, "photo_title": "In Memoriam Antoine de Saint Exupéry", "photo_url": "http://www.panoramio.com/photo/522084", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/522084.jpg", "longitude": 17.470493, "latitude": 47.867077, "width": 500, "height": 350, "upload_date": "21 January 2007", "owner_id": 109117, "owner_name": "Busa Péter", "owner_url": "http://www.panoramio.com/user/109117" }
              ,
              { "photo_id": 1578881, "photo_title": "Rosina Lamberti,Sunset,Templestowe , Victoria, Australia", "photo_url": "http://www.panoramio.com/photo/1578881", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/1578881.jpg", "longitude": 145.141754, "latitude": -37.766372, "width": 500, "height": 474, "upload_date": "01 April 2007", "owner_id": 140796, "owner_name": "rosina lamberti", "owner_url": "http://www.panoramio.com/user/140796" }
              ,
              { "photo_id": 97671, "photo_title": "kin-dza-dza", "photo_url": "http://www.panoramio.com/photo/97671", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/97671.jpg", "longitude": 30.785408, "latitude": 46.639301, "width": 500, "height": 375, "upload_date": "09 December 2006", "owner_id": 13058, "owner_name": "Kyryl", "owner_url": "http://www.panoramio.com/user/13058" }
              ,
              { "photo_id": 25514, "photo_title": "Arenal", "photo_url": "http://www.panoramio.com/photo/25514", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/25514.jpg", "longitude": -84.693432, "latitude": 10.479372, "width": 500, "height": 375, "upload_date": "17 June 2006", "owner_id": 4112, "owner_name": "Roberto Garcia", "owner_url": "http://www.panoramio.com/user/4112" }
              ,
              { "photo_id": 57823, "photo_title": "Maria Alm", "photo_url": "http://www.panoramio.com/photo/57823", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/57823.jpg", "longitude": 12.900009, "latitude": 47.409968, "width": 500, "height": 333, "upload_date": "05 October 2006", "owner_id": 8060, "owner_name": "Norbert MAIER", "owner_url": "http://www.panoramio.com/user/8060" }
              ,
              { "photo_id": 532693, "photo_title": "Wheatfield in afternoon light", "photo_url": "http://www.panoramio.com/photo/532693", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/532693.jpg", "longitude": 11.272659, "latitude": 59.637472, "width": 500, "height": 333, "upload_date": "22 January 2007", "owner_id": 39160, "owner_name": "Snemann", "owner_url": "http://www.panoramio.com/user/39160" }
              ,
              { "photo_id": 1282387, "photo_title": "Thunderstorm in Martinique", "photo_url": "http://www.panoramio.com/photo/1282387", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/1282387.jpg", "longitude": -61.013432, "latitude": 14.493688, "width": 500, "height": 400, "upload_date": "12 March 2007", "owner_id": 49870, "owner_name": "Jean-Michel Raggioli", "owner_url": "http://www.panoramio.com/user/49870" }
              ,
              { "photo_id": 945976, "photo_title": "Al tard", "photo_url": "http://www.panoramio.com/photo/945976", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/945976.jpg", "longitude": 0.490866, "latitude": 40.903783, "width": 335, "height": 500, "upload_date": "21 February 2007", "owner_id": 3022, "owner_name": "Arcadi", "owner_url": "http://www.panoramio.com/user/3022" }
              ,
          ]
        }

    render(){
        console.log(this.props);

        return (
            <div style={{width:'100%', height:'100vh'}}>
            	<div className = "Header">
	            	<i onClick = {this.props.toWrite} style={{fontSize: '50px', color: 'black'}} className="material-icons ">keyboard_arrow_left</i>	            		
           			<span id = "Title" style={{paddingLeft: '31%'}}><b>Photo</b></span>
            	</div>
              <div className = "Gallery">
                {this.state.locations.map(location=>(
                  <img onClick = {() => this.props.setPhotoUrl(location.photo_file_url)} id = "Photos" src= {location.photo_file_url}/>
                  ))}              
              </div>
            </div>
        );
    }
}


