import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react'
import MapDrawer from '../MapDrawer/MapDrawer2'


export class MapList extends Component {


  state = {
    zoom: 15,
    locations: [
    { "photo_id": 27932, "photo_title": "Atardecer en Embalse", "photo_url": "https://www.panoramio.com/photo/27932", "photo_file_url": "https://mw2.google.com/mw-panoramio/photos/medium/27932.jpg", "longitude": -64.404945, "latitude": -32.202924, "width": 500, "height": 375, "upload_date": "25 June 2006", "owner_id": 4483, "owner_name": "Miguel Coranti", "owner_url": "https://www.panoramio.com/user/4483" }

    ],
  }

  render() {
    console.log(this.props);
    const style = {
      width: '100%',
      height: '5%'
    }
    return (
      <MapDrawer google={this.props.google}
        locations={this.state.locations}
      >
      </MapDrawer>

    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
  apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
  libraries: ['visualization']
})(MapList)