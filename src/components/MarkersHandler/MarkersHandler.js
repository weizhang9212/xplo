import React, { Component } from 'react';
import MarkerClusterer from '@google/markerclusterer'
const MarkersHandler = (props) =>{
    let markers = [];
    const google = props.google;
    let preMark = null; 

    if(props.map !== null){
        props.locations.forEach( location => {
            let infowindow = new google.maps.InfoWindow({
                content: `<h3>${location.photo_title}</h3>
                <img height = 100 px width = 80 px src = "${location.photo_file_url}"/>`
         });

         const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
            position: {lat: location.latitude, lng: location.longitude}, // sets position of marker to specified location
            map: props.map, // sets markers to appear on the map we just created on line 35
            title: location.photo_title,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 10
            }
        });
        markers.push(marker);
        marker.infowindow = infowindow;
        marker.addListener('click', ()=> {

            if(preMark !== null ){
              //console.log(this.preMark);
              preMark.infowindow.close();
            }
            infowindow.open(props.map, marker);
            window.setTimeout(function() {
              marker.setAnimation(null);
            }, 700);
            marker.setAnimation(google.maps.Animation.BOUNCE); 
            preMark = marker;
            //console.log(this);
          });
        })
        let markerClusterer = new MarkerClusterer(props.map, markers, {
            maxZoom: 15,
            gridSize: 20,
            style:10,
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
          });
    }
    return (
        <div></div>
    )
}

export default MarkersHandler;