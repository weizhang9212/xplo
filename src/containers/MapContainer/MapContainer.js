import React, { Component } from 'react';
import { GoogleApiWrapper, Map , Marker} from 'google-maps-react' 
import { Divider } from '@material-ui/core';
import MapDrawer from '../../components/MapDrawer/MapDrawer'
import data from '../../data'

export class MapContainer extends Component {

    componentWillMount(){
      console.log(data);
      this.setState({locations : data.photos.slice(0,100)})
      this.setState({dreamLocations : data.photos.slice(200,220)});
    }
    state = {
        zoom : 15,
        locations: [
            
          ],
        dreamLocations:[

        ],
    }
    
  render() {
    const style = {
      width: '100%',
      height: '90%'
    }
    return (
      <MapDrawer google={this.props.google} 
                    locations = {this.state.locations}
                    dream = {this.state.dreamLocations}>

      </MapDrawer>
                    
    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
    apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
    libraries: ['visualization']
})(MapContainer)