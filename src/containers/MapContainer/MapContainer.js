import React, { Component } from 'react';
import { GoogleApiWrapper, Map , Marker} from 'google-maps-react' 
import { Divider } from '@material-ui/core';
import MapDrawer from '../../components/MapDrawer/MapDrawer'
import data from '../../data'
import { connect } from 'react-redux'

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
    
    routeToProfile(id){
        this.props.history.push('/profile/' + id);
    }

    routeToPost(id){
      this.props.history.push('/post/' + id);
    }
  render() {
    this.props.switch(0);
    const style = {
      width: '100%',
      height: '80vh'
    }
    return (
      <MapDrawer    className = "map"
                    style = {style}
                    google={this.props.google} 
                    locations = {this.state.locations}
                    dream = {this.state.dreamLocations}
                    toProfile = {this.routeToProfile.bind(this)}
                    toPost = {this.routeToPost.bind(this)}
                    >
      </MapDrawer>
                    
    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
const mapStateToProps = (state) => {
  return {
    page: state.currentPage
  };
}

const mapDispatchToProps = dispatch =>{
    return {
      switch: (val)=>{dispatch({ type : 'BOTBAR', choice : val});}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
  libraries: ['visualization']
})(MapContainer));

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
//     libraries: ['visualization']
// })(MapContainer)