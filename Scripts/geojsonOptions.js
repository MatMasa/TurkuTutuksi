geojsonOpts = {
			pointToLayer: function(feature, latlng) {
			return L.marker(latlng,{icon:statueIcon}).bindPopup(feature.properties.popupContent +
              	"</strong><br/>" + "<img src=" + feature.properties.imgUrl + "" + " class=popupImage " + "/>" +
								"</strong><br/>" + "<a href='" + feature.properties.Link  + "'target=\'_blank\'>" + "Tietoja kohteesta" + "</a>")}
		}

		geojsonOpts_2 = {
			pointToLayer: function(feature, latlng) {
			return L.marker(latlng,{icon:museumIcon}).bindPopup(feature.properties.popupContent +
              	"</strong><br/>" + "<img src=" + feature.properties.imgUrl + "" + " class=popupImage " + "/>" +
								"</strong><br/>" + "<a href='" + feature.properties.Link  + "'target=\'_blank\'>" + "Tietoja kohteesta" + "</a>")}
		}

		geojsonOpts_3 = {
			pointToLayer: function(feature, latlng) {
			return L.marker(latlng,{icon:bikeIcon}).bindPopup(feature.properties.popupContent)}
		}

		geojsonOpts_4 = {
			pointToLayer: function(feature, latlng) {
			return L.marker(latlng,{icon:churchIcon}).bindPopup(feature.properties.popupContent +
              	"</strong><br/>" + "<img src=" + feature.properties.imgUrl + "" + "class=popupImage" + "/>" +
								"</strong><br/>" + "<a href='" + feature.properties.Link  + "'target=\'_blank\'>" + "Tietoja kohteesta" + "</a>")}
		}
