import React, { Component } from 'react';
import { GoogleApiWrapper} from 'google-maps-react' 
import MapDrawer from '../../../components/MapDrawer/MapDrawer'


export class MapList extends Component {

    componentWillMount(){
        console.log(1);
      this.setState({locations : this.props.locations})
    }
    state = {
        zoom : 15,
        locations: [
            
          ],
        dreamLocations:[

        ],
    }
    
    routeToProfile(id){
        this.props.history.push('/profile/' + id);
    }

    routeToPost(id){
      this.props.history.push('/post/' + id);
    }
  render() {
    console.log(this.props);
    const style = {
      width: '100%',
      height: '5%'
    }
    return (
      <MapDrawer google={this.props.google} 
                    locations = {this.state.locations}
                    dream = {this.state.dreamLocations}
                    toProfile = {this.routeToProfile.bind(this)}
                    toPost = {this.routeToPost.bind(this)}
                    person = {true}
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