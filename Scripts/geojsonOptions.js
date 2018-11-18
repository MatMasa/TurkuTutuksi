geojsonOpts = {
			pointToLayer: function(feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 8,
					fillColor: "#915508",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				}).bindPopup(feature.properties.popupContent+'<br><b>'+feature.properties.name+'<b>')
			}
		};
		
		geojsonOpts_2 = {
			pointToLayer: function(feature, latlng) {
			return L.marker(latlng,{icon:museumIcon}).bindPopup(feature.properties.popupContent+'<br><b>'+feature.properties.name+'<b>')}
		}
		
		geojsonOpts_3 = {
			pointToLayer: function(feature, latlng) {
			return L.marker(latlng,{icon:bikeIcon}).bindPopup(feature.properties.popupContent+'<br><b>'+feature.properties.name+'<b>')}
		}
		
		geojsonOpts_4 = {
			pointToLayer: function(feature, latlng) {
			return L.circleMarker(latlng, {
					radius: 8,
					fillColor: "#f8f9e8",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				}).bindPopup(feature.properties.popupContent+'<br><b>'+feature.properties.name+'<b>')
			}
		};