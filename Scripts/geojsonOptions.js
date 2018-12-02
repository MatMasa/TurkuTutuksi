geojsonOpts = {
			pointToLayer: function(feature, latlng) {
			return L.marker(latlng,{icon:statueIcon}).bindPopup(feature.properties.popupContent)}
		}
		
		geojsonOpts_2 = {
			pointToLayer: function(feature, latlng) {
			return L.marker(latlng,{icon:museumIcon}).bindPopup(feature.properties.popupContent)}
		}
		
		geojsonOpts_3 = {
			pointToLayer: function(feature, latlng) {
			return L.marker(latlng,{icon:bikeIcon}).bindPopup(feature.properties.popupContent)}
		}
		
		geojsonOpts_4 = {
			pointToLayer: function(feature, latlng) {
			return L.marker(latlng,{icon:churchIcon}).bindPopup(feature.properties.popupContent)}
		}