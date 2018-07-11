function CustomMarker(latlng, map, args) {
    args.google.maps.OverlayView.apply(this, arguments);
	this.latlng = latlng;	
    this.args = args;	
    this.google = args.google;
    //this.setMap(map);	
    console.log(this);
}

//CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {
    
	
	var self = this;
	
	var div = this.div;
	
	if (!div) {
	
		div = this.div = document.createElement('div');
		
		div.className = 'marker';
		
		div.style.position = 'absoslute';
		div.style.cursor = 'pointer';
		div.style.width = '20px';
		div.style.height = '20px';
		div.style.background = 'blue';
		
		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}
		
		this.google.maps.event.addDomListener(div, "click", function(event) {			
			this.google.maps.event.trigger(self, "click");
		});
		
		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
	}
	
	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
	
	if (point) {
		div.style.left = point.x + 'px';
		div.style.top = point.y + 'px';
	}
};

CustomMarker.prototype.remove = function() {
	if (this.div) {
		this.div.parentNode.removeChild(this.div);
		this.div = null;
	}	
};

CustomMarker.prototype.getPosition = function() {
	return this.latlng;	
};

module.exports = CustomMarker;