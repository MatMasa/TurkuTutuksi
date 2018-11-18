function kirkkoFunction() {
			var checkbox = document.getElementById("myCheck");
				if(checkbox.checked == true) {
					mymap.addLayer(kirkot)
					mymap.removeLayer(pyörät);
					mymap.removeLayer(museot);
					mymap.removeLayer(veistokset);
					
				} else {
				mymap.addLayer(pyörät)
				mymap.addLayer(museot)
				mymap.addLayer(veistokset)
				}
		  
		  }
		  
		  function museoFunction() {
			var checkbox = document.getElementById("myCheck1");
				if(checkbox.checked == true) {
					mymap.addLayer(museot)
					mymap.removeLayer(pyörät);
					mymap.removeLayer(kirkot);
					mymap.removeLayer(veistokset);
				} else {
				mymap.addLayer(pyörät)
				mymap.addLayer(kirkot)
				mymap.addLayer(veistokset)
				}
		  
		  }
		  
		  function pyörätFunction() {
			var checkbox = document.getElementById("myCheck2");
				if(checkbox.checked == true) {
					mymap.addLayer(pyörät)
					mymap.removeLayer(museot);
					mymap.removeLayer(kirkot);
					mymap.removeLayer(veistokset);
				} else {
				mymap.addLayer(museot)
				mymap.addLayer(kirkot)
				mymap.addLayer(veistokset)
				}
		  
		  }