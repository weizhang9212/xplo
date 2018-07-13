import React, { Component } from 'react';
import MarkerClusterer from '@google/markerclusterer'
import './MarkersHandler.css'

const MarkersHandler = (props) =>{
    const dream = [

    ];

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
        if(cluster === null) return;
        
        cluster.actionMade();
    }
    var Popup;
    Popup = function (position, content) {
            this.position = position;
            if (!content){
                content = document.createElement('div');
                content.innerHTML = 'LoadContent Error!';
            }
            content.classList.add('popup-bubble-content');
            var pixelOffset = document.createElement('div');
            pixelOffset.classList.add('popup-bubble-anchor');
            pixelOffset.appendChild(content);

            this.anchor = document.createElement('div');
            this.anchor.classList.add('popup-tip-anchor');
            this.anchor.appendChild(pixelOffset);

            // Optionally stop clicks, etc., from bubbling up to the map.
            this.stopEventPropagation();
            };
          // NOTE: google.maps.OverlayView is only defined once the Maps API has
          // loaded. That is why Popup is defined inside initMap().
          Popup.prototype = Object.create(google.maps.OverlayView.prototype);

          /** Called when the popup is added to the map. */
          Popup.prototype.onAdd = function() {
            this.getPanes().floatPane.appendChild(this.anchor);
          };

          /** Called when the popup is removed from the map. */
          Popup.prototype.onRemove = function() {
            if (this.anchor.parentElement) {
              this.anchor.parentElement.removeChild(this.anchor);
            }
          };
          /** Called when the popup needs to draw itself. */
          Popup.prototype.draw = function() {

            var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
            //Hide the popup when it is far out of view.
            var display =
                Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
                'block' :
                'none';

            if (display === 'block') {
              this.anchor.style.left = divPosition.x + 'px';
              this.anchor.style.top = divPosition.y + 'px';
            }
            if (this.anchor.style.display !== display) {
              this.anchor.style.display = display;
            }
          };
          Popup.prototype.getPosition = function() {
            return this.postion; 
        };

        Popup.prototype.hide = function() {
          if (this.anchor) {
            // The visibility property must be a string enclosed in quotes.
            this.anchor.style.visibility = 'hidden';
          }
        };

        Popup.prototype.show = function() {
          if (this.anchor) {
            this.anchor.style.visibility = 'visible';
          }
        };
          /** Stops clicks/drags from bubbling up to the map. */
          Popup.prototype.stopEventPropagation = function() {
            var anchor = this.anchor;
            anchor.style.cursor = 'auto';

            ['click', 'dblclick', 'contextmenu', 'wheel', 'mousedown', 'touchstart',
             'pointerdown']
                .forEach(function(event) {
                  anchor.addEventListener(event, function(e) {
                    e.stopPropagation();
                  });
                });
          };
    if(props.map !== null){
        props.locations.forEach( location => {
          
        var popup;

        var contentString = document.createElement('div');
        contentString.innerHTML = location.photo_title;
        contentString.className = 'contentString'
        // var close = document.createElement('BUTTON');
        // var t = document.createTextNode("Close");
        // close.appendChild(t); 
        // close.addEventListener("click",popup.hide());
        var postImg = this.img = document.createElement('img');
        postImg.className = 'postImg'
        postImg.src = location.photo_file_url;
        postImg.width = 80;
        postImg.height = 100;
        contentString.appendChild(postImg);
        //contentString.appendChild(close);


        popup = new Popup(new google.maps.LatLng(location.latitude,location.longitude), contentString);//
        //
            // let infowindow = new google.maps.InfoWindow({
            //     content: `<h3>${location.photo_title}</h3>
            //     <img height = 100 px width = 80 px src = "${location.photo_file_url}"/>`
         //});

         //  custom marker
        let marker = new google.maps.OverlayView();
        let myPos = new google.maps.LatLng(location.latitude,location.longitude);
        marker.likes = Math.ceil(Math.random()*10);  
        marker.latlng = myPos;
        marker.map = props.map;
        marker.args = {};
        
        // custom marker  shown as html
        marker.popup = popup;
        popup.setMap(props.map);
        popup.hide();
        // folded.foldUp(); 
        // popup.show();

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
                div.appendChild(img);
                
                if (typeof(self.args.marker_id) !== 'undefined') {
                    div.dataset.marker_id = self.args.marker_id;
                }
                
                // show info click
                google.maps.event.addDomListener(div, "click", function(event) {
                    if(preMark !== null ){
                    preMark.popup.hide();
                    //folded.foldUp();
                    }
                    //folded.fracture(-3).unfold();
                    popup.show();
                
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

