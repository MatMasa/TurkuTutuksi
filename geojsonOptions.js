geojsonOpts = {
			pointToLayer: function(feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 8,
					fillColor: "#ff7800",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				}).bindPopup(feature.properties.popupContent)
			}
		};
		
		geojsonOpts_2 = {
			pointToLayer: function(feature, latlng) {
			return L.marker(latlng,{icon:museumIcon}).bindPopup(feature.properties.popupContent)}
		}
		
		geojsonOpts_3 = {
			pointToLayer: function(feature, latlng) {
			return L.marker(latlng,{icon:bikeIcon}).bindPopup(feature.properties.popupContent)}
		}