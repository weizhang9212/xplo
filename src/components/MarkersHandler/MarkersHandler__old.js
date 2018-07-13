import React, { Component } from 'react';
import MarkerClusterer from '@google/markerclusterer'
import PostShow from '../PostShow/PostShow'

const MarkersHandler = (props) =>{
    const newPost = {"photo_id": 292943, "photo_title": "Aekingerzand", "photo_url": "http://www.panoramio.com/photo/292943", "photo_file_url": "http://mw2.google.com/mw-panoramio/photos/medium/292943.jpg", "longitude": -73.935242, "latitude": 40.73061, "width": 500, "height": 333, "upload_date": "03 January 2007", "owner_id": 62613, "owner_name": "erik van den Ham", "owner_url": "http://www.panoramio.com/user/62613"};
    const dream = [

    ];
    let postShowDiv = <PostShow post = {newPost} google = {props.google} map = {props.map}/>
    let show = true;
    if(show === false){
        postShowDiv = null;
    }
    // round counter 
    let roundIndex = 0;
    // markers we have
    let markers = [];
    const google = props.google;
    let preMark = null;
    //'mousemove click mouseup mousedown keydown keypress keyup submit change mouseenter scroll resize dblclick'
    document.getElementsByClassName("App")[0].addEventListener('touchmove', actionMade);
    document.getElementsByClassName("App")[0].addEventListener('click', actionMade);
    let cluster = null;

    

    function actionMade(){
        show= !show;
        if(cluster === null) return;
        
        cluster.actionMade();
    }

    if(props.map !== null){
        props.locations.forEach( location => {
            let infowindow = new google.maps.InfoWindow({
                content: `<h3>${location.photo_title}</h3>
                <img height = 100 px width = 80 px src = "${location.photo_file_url}"/>`
         });

         //  custom marker
        let marker = new google.maps.OverlayView();
        let myLatlng = new google.maps.LatLng(location.latitude,location.longitude);
        marker.likes = Math.ceil(Math.random()*10);  
        marker.latlng = myLatlng;
        marker.map = props.map;
        marker.args = {};
        
        // custom marker  shown as html

        marker.infowindow = infowindow;
        let like = marker.likes;
        marker.draw = function() {

            
            var self = this;
            
            var div = this.div;
            
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
                    if(preMark !== null ){
                    preMark.infowindow.close();
                    }
                    infowindow.open(props.map, marker);
                    preMark = marker;		
                    google.maps.event.trigger(self, "click");
                });

                // long press function

                // start to press marker
                let pressTimer;
                google.maps.event.addDomListener(div, "touchstart", function(event){
                    pressTimer = setTimeout(()=>{
                        if(cluster){
                            cluster.clearTimer();
                        }
                        props.map.getBounds().extend();
                    },2000);
                });
                
                // press end
                google.maps.event.addDomListener(div, "touchend", function(event){
                    clearTimeout(pressTimer);
                    if(cluster){
                        cluster.activeTimer();
                    }
                    console.log(cluster);
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
        marker.setMap(props.map);

        /*    end of custom marker        */



        markers.push(marker);
        })


        let markerClusterer = new MarkerClusterer(props.map, markers, {
            maxZoom: 15,
            gridSize: 20,
            style:10,
            optimized:false,
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
          });
          cluster = markerClusterer;

        var myoverlay = new google.maps.OverlayView();
        myoverlay.draw = function () {
            this.getPanes().markerLayer.id='markerLayer';
        };
        myoverlay.setMap(props.map);


        
    }
    return (
        <div>{show? postShowDiv: null}</div>
    )
}

export default MarkersHandler;