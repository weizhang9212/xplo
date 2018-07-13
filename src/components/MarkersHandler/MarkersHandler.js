import React, { Component } from 'react';
import MarkerClusterer from '@google/markerclusterer'
import PostShow from '../PostShow/PostShow'
import OriDomi from 'oridomi'

export default class MarkersHandler extends Component{

    state ={
        locations:[],
        google : null,
        map : null,
        postShow : false
    }
    cluster = null;
    preMark = null;
    markers = [];

    componentDidMount(){
        console.log(" markers did mount" );
        this.loadMarkers();
    }

    componentWillUpdate(){

    }

    shouldComponentUpdate(nextProps){
        console.log("shouldCOmponentUpdate");
        //this.loadMarkers();
        return true;
    }

    componentWillMount(){
        console.log(" markers will mount" );
        this.setState({locations: this.props.locations,
            google : this.props.google,
            map : this.props.map}
        );
            
    }

    loadMarkers(){
        document.getElementsByClassName("App")[0].addEventListener('touchmove', this.actionMade);
        document.getElementsByClassName("App")[0].addEventListener('click', this.actionMade);
        const that = this;

        if(this.state.map != null){
            const google = this.props.google;
            this.state.locations.forEach( location => {
                let infowindow = new google.maps.InfoWindow({
                    content: `<div class = "post"><h3 >${location.photo_title}</h3>
                    <img height = 100 px width = 80 px src = "${location.photo_file_url}"/>
                    </div>`
                })
                // custom marker
                let marker = new google.maps.OverlayView();
                let myLatlng = new google.maps.LatLng(location.latitude,location.longitude);
                marker.likes = Math.ceil(Math.random()*10);  
                marker.latlng = myLatlng;
                marker.map = this.state.map;
                marker.args = {};

                //custom marker shown as html

                marker.infowindow = infowindow;

                marker.draw = function() {
                    var self = this;              
                    var div = this.div;
                    let like = marker.likes;
                    if (!div) {
                        var img = this.img = document.createElement('img');
                        div = this.div = document.createElement('div');
                        img.src = location.photo_file_url;
                        if(like > 5) {
                            img.classList.add("like");
                        }
                        div.className = 'marker';
                        div.classList.add("head");
                        div.style.position = 'absolute';
                        div.style.cursor = 'pointer';
                        //div.style.background = 'blue';
                        div.appendChild(img);
                        
                        if (typeof(self.args.marker_id) !== 'undefined') {
                            div.dataset.marker_id = self.args.marker_id;
                        }                
                        // show info click
                        google.maps.event.addDomListener(div, "click", function(event) {
                            if(that.preMark !== null ){
                            that.preMark.infowindow.close();
                            }

                            //
                            that.cluster.clearTimer();
                            let show = that.state.postShow;
                            that.setState({postShow : !show});
                            //

                            infowindow.open(that.state.map, marker);
                            that.preMark = marker;		
                            google.maps.event.trigger(self, "click");
                            
                            // document.getElementById('test').addEventListener('click', function() {
                            //     oriDomi.collapse(-40);
                            // });
                        });
                        // long press function
        
                        // start to press marker
                        let pressTimer;
                        google.maps.event.addDomListener(div, "touchstart", function(event){
                            pressTimer = setTimeout(()=>{
                                if(that.cluster){
                                    that.cluster.clearTimer();
                                }
                                that.state.map.getBounds().extend();
                            },2000);
                        });
                        
                        // press end
                        google.maps.event.addDomListener(div, "touchend", function(event){
                            clearTimeout(pressTimer);
                            if(that.cluster){
                                that.cluster.activeTimer();
                            }
                            console.log(that.cluster);
                        });
                        
                        var panes = this.getPanes();
                        panes.overlayImage.appendChild(div);
                    }      
                    // set the position of div
                    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
                    
                    if (point) {
                        div.style.left = (point.x - 10) + 'px';
                        div.style.top = (point.y - 20) + 'px';
                    }
                    marker.div = div;
                }

                marker.remove = function() {
                    if (this.div) {
                        this.div.parentNode.removeChild(this.div);
                        this.div = null;
                    }	
                };
                
                marker.getPosition = function() {
                    return this.latlng;	
                };
                marker.setMap(that.state.map);
                /*    end of custom marker        */

                that.markers.push(marker);
            })

            let markerClusterer = new MarkerClusterer(this.state.map, this.markers, {
                maxZoom: 15,
                gridSize: 20,
                style:10,
                optimized:false,
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
              });
            this.cluster = markerClusterer;
        }
    }
    actionMade=()=>{
        if(this.cluster === null) return;
        this.cluster.actionMade();
    }


    


    
    render(){
        
        console.log("render");
        return(
        <div>{this.state.postShow? 
          <PostShow google={this.props.google}
                    map = {this.props.map}
                    />  : 
            null}
        <button id = "test" >oridomi test</button>    
        </div>
    );
    }
}