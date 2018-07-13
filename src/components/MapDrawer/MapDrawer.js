import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import MarkersHandler from '../MarkersHandler/MarkersHandler'

export default class MapDrawer extends Component {
    state = {
      locations: [
      ],
      preMark: null,
      google: null,
      map : null,
      postShow : false,
      loadDone :false,
      click : false
    }
    preMark = null;
    componentWillMount(){
      console.log("will Mount");
      //this.setState({locations : this.props.locations});
      this.setState({google:this.props});
      
    }
    componentDidMount() {
      console.log("did mount")
      this.loadMap(); // call loadMap function to load the google map
    }
    
    zoomOut(){
      this.map.setZoom(11)
      setTimeout(()=>{this.map.setZoom(8)}, 1000);
    }
  
    zoomIn(){
      this.map.setZoom(11)
      setTimeout(()=>{this.map.setZoom(14)}, 1000);
    }
  
    getGeo(map){
      const {google} = this.props;
      const geocoder = new google.maps.Geocoder();
      var result =  {};
      geocoder.geocode( { 'address': 'China'}, (results, status)=> {
        
        let nextZoom = this.getBoundsZoomLevel(results[0].geometry.viewport, map);
  
          if (status == google.maps.GeocoderStatus.OK) {
            result.center =  results[0].geometry.location;
            result.zoom = nextZoom;
            this.map.setCenter(results[0].geometry.location);
            this.map.setZoom(nextZoom);
            this.map.fitBounds(results[0].geometry.viewport);
          }
      });
    }
    zoomMove(){
      this.getGeo(this.map);
    }

    changeState(){
      this.setState({click:true});
    }

    // calculate correct zoom using bound and mapDim
    // getGeo --> bound
    // DOM attribute -- > mapDim
    getBoundsZoomLevel(bounds, mapDim) {
          var WORLD_DIM = { height: 256, width: 256 };
          var ZOOM_MAX = 21;
      
          function latRad(lat) {
              var sin = Math.sin(lat * Math.PI / 180);
              var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
              return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
          }     
          function zoom(mapPx, worldPx, fraction) {
              return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
          }      
          var ne = bounds.getNorthEast();
          var sw = bounds.getSouthWest();
      
          var latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;          
          var lngDiff = ne.lng() - sw.lng();
          var lngFraction = ((lngDiff < 0) ? (lngDiff + 360) : lngDiff) / 360;
          var latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
          var lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);
          return Math.min(latZoom, lngZoom, ZOOM_MAX);
      }
    
    zoomChange(curZoom, nextZoom){
      this.map.setZoom(curZoom);
      if(nextZoom - curZoom >= 2){
        setTimeout(()=>{
          this.zoomChange(curZoom +2, nextZoom);
        },450);
      }else{
        this.map.setZoom(nextZoom);
      }
    }
  
    loadMap() {
      
      if (this.props && this.props.google) { // checks to make sure that props have been passed
        const {google} = this.props; // sets props equal to google
        const maps = google.maps; // sets maps to google maps props
        const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
        const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node
        const mapConfig = Object.assign({}, {
          center: {lat: 40.7485722, lng: -74.0068633}, // sets center of google map to NYC.
          zoom: 10, // sets zoom. Lower numbers are zoomed further out.
          mapTypeId: 'roadmap',
          gestureHandling: 'greedy' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
        })
        this.map = new maps.Map(node, mapConfig); 
        this.setState({map : this.map});
        this.setState({loadDone : true});
      }
  
    }
  
    render() {
      const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
        width: '100%', // 90vw basically means take up 90% of the width screen. px also works.
        height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
      }
  
      return ( // in our return function you must return a div with ref='map' and style.
      <div id = "map">
        { this.state.loadDone ?
        <MarkersHandler map = {this.state.map} 
        locations = {this.props.locations} 
        google = {this.props.google} 
        dream = {this.props.dream} 
        postShow = {this.change} 
        click = {this.state.click}/>
          : null
        }
        <div ref="map" style={style}>
          loading map...
        </div>
        <button onClick = {this.zoomOut.bind(this)}> zoomOut</button>
        <button onClick = {this.zoomIn.bind(this)}> zoomIn</button>
        <button onClick = {this.zoomMove.bind(this)}> move</button>
        <button onClick = {this.zoomChange.bind(this,0,21)}> zoomChange</button>
        <button onClick = {this.changeState.bind(this)}>test</button>
      </div>
      )
    }
  }