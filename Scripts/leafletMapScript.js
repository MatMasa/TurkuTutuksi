var mymap = L.map('mapId').setView([60.447954, 22.253156], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoibm9ib2R5b3kiLCJhIjoiY2pvZTdjcWxtMDA0bDNxbWhqZWRteDFnYiJ9.R0rDGEePrfhPYpTf7WoQVQ', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);

		
		var pyörät = L.layerGroup();
		var museot = L.layerGroup();
		var kirkot = L.layerGroup();
		var veistokset = L.layerGroup();
		
		var poiLayers = L.layerGroup([
			L.geoJson(churches, geojsonOpts_4).addTo(kirkot),
			L.geoJson(bikes, geojsonOpts_3).addTo(pyörät),
			L.geoJson(museums, geojsonOpts_2).addTo(museot),
			L.geoJson(sculptures, geojsonOpts).addTo(veistokset),
		]).addTo(mymap);
		
		var overlays = {
	 	"Pyörät": pyörät,
		"Museot": museot,
		"Kirkot": kirkot,
		"Veistokset": veistokset
		};
	
		L.control.search({
		layer: poiLayers,
		initial: false,
		propertyName: 'name',
		buildTip: function(text, val) {
			var type = val.layer.feature.properties.amenity;
			return '<a href="#" class="'+type+'">'+text+'<b>'+type+'</b></a>';
		}
	})
	.addTo(mymap);