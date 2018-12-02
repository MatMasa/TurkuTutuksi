geojsonOpts = {
			pointToLayer: function(feature, latlng) {
			return L.marker(latlng,{icon:statueIcon}).bindPopup(feature.properties.popupContent +
                    "</strong><br/>" + "<a href='" + feature.properties.Link + "'>" + "Tietoja kohteesta" + "</a>" +
						        "</strong><br/>" + "<img src=" + feature.properties.imgUrl + "'" + " class=popupImage " + "/>")}
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
