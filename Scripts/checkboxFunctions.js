function kirkkoFunction() {
if (document.getElementById('kirkkoRadio').checked) {
				mymap.addLayer(kirkot)
					mymap.removeLayer(pyörät);
					mymap.removeLayer(museot);
					mymap.removeLayer(veistokset);
}
} 
function museoFunction() {
if(document.getElementById('museoRadio').checked) {
				mymap.addLayer(museot)
					mymap.removeLayer(pyörät);
					mymap.removeLayer(kirkot);
					mymap.removeLayer(veistokset);
}
}
function pyörätFunction() {
if(document.getElementById('pyörätRadio').checked) {
				mymap.addLayer(pyörät)
					mymap.removeLayer(museot);
					mymap.removeLayer(kirkot);
					mymap.removeLayer(veistokset);
}
}
function patsaatFunction() {
if(document.getElementById('patsaatRadio').checked) {
				mymap.addLayer(veistokset)
					mymap.removeLayer(pyörät);
					mymap.removeLayer(kirkot);
					mymap.removeLayer(museot);
}
}
function kaikkiFunction() {
if(document.getElementById('kaikkiRadio').checked) {
				mymap.addLayer(museot)
				mymap.addLayer(kirkot)
				mymap.addLayer(pyörät)
				mymap.addLayer(veistokset)
				
}
}

