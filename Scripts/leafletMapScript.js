var mymap = L.map('mapId').setView([60.45181, 22.26663], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoibm9ib2R5b3kiLCJhIjoiY2pvZTdjcWxtMDA0bDNxbWhqZWRteDFnYiJ9.R0rDGEePrfhPYpTf7WoQVQ', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);

		
		
		
		var poiLayers = L.layerGroup([
			kirkot = L.geoJson(churches, geojsonOpts_4),
			pyörät = L.geoJson(bikes, geojsonOpts_3),
			museot = L.geoJson(museums, geojsonOpts_2),
			veistokset = L.geoJson(sculptures, geojsonOpts),
		]).addTo(mymap);
		
		var overlays = {
	 	"Kaikki": poiLayers,
		"Pyörät": pyörät,
		"Museot": museot,
		"Kirkot": kirkot,
		"Patsaat": veistokset
		};
		
		L.control.layers(overlays).addTo(mymap);
	