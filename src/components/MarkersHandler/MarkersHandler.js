import React, { Component } from 'react';
import MarkerClusterer from '@google/markerclusterer'

const MarkersHandler = (props) =>{
    function stopBubble(e) {
        if ( e && e.stopPropagation )
            e.stopPropagation();
        else
            window.event.cancelBubble = true;
    }
    // round counter 
    let roundIndex = 0;
    // markers we have
    let markers = [];
    const google = props.google;
    let preMark = null;
    //'mousemove click mouseup mousedown keydown keypress keyup submit change mouseenter scroll resize dblclick'
    document.getElementsByClassName("App")[0].addEventListener('mousedown', actionMade);
    let cluster = null;

    function actionMade(){
        if(cluster === null) return;
        
        cluster.actionMade();
    }

    if(props.map !== null){
        props.locations.forEach( location => {
            let infowindow = new google.maps.InfoWindow({
                content: `<h3>${location.photo_title}</h3>
                <img height = 100 px width = 80 px src = "${location.photo_file_url}"/>`
         });
         // image
         var image = {
            url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(20, 32),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32)
          };
         //
        
        let marker = new google.maps.OverlayView();
        let myLatlng = new google.maps.LatLng(location.latitude,location.longitude);
        marker.likes = Math.ceil(Math.random()*10);  
        marker.latlng = myLatlng;
        marker.map = props.map;
        marker.args = {};


        //  const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
        //     position: {lat: location.latitude, lng: location.longitude}, // sets position of marker to specified location
        //     map: props.map, // sets markers to appear on the map we just created on line 35
        //     title: location.photo_title,
        //     icon: image,
        //     url:"sdfasdf",
        //     className: "test class"
        // });
        
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
                
                google.maps.event.addDomListener(div, "click", function(event) {
                    if(preMark !== null ){
                    preMark.infowindow.close();
                    }
                    infowindow.open(props.map, marker);
                    preMark = marker;		
                    google.maps.event.trigger(self, "click");
                });
                let pressTimer;
                google.maps.event.addDomListener(div, "mouseup", function(event){
                    console.log("mouseUp");
                });

                google.maps.event.addDomListener(div, "mousedown", function(event){
                    console.log("mouseDown");
                });
                
                var panes = this.getPanes();
                panes.overlayImage.appendChild(div);
            }
            
            var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
            
            if (point) {
                div.style.left = (point.x - 10) + 'px';
                div.style.top = (point.y - 20) + 'px';
            }
            marker.div = div;
        };
        
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


        // marker.addListener('click', ()=> { 

        //     if(preMark !== null ){
        //       preMark.infowindow.close();
        //     }
        //     infowindow.open(props.map, marker);
        //     window.setTimeout(function() {
        //       marker.setAnimation(null);
        //     }, 700);
        //     marker.setAnimation(google.maps.Animation.BOUNCE); 
        //     preMark = marker;
        //     console.log(this);
        //   });
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
        <div></div>
    )
}

export default MarkersHandler;