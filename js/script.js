function drag(event) {
    console.log(event);
    event.dataTransfer.setData("text/plain", event.target.id);
}
function allowDrop(event) {
    event.preventDefault();
}
function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain").split(',');
    event.target.appendChild(document.getElementById(data));
}

///////////////////////////
var r = 70;
var cf = 2 * Math.PI * r; //377
var semi_cf = cf / 2; //189
document.querySelector('#outline_curves')
		    .setAttribute('stroke-dasharray', semi_cf + ',' + cf);
document.querySelector('#low')
		    .setAttribute('stroke-dasharray', semi_cf + ',' + cf);
document.querySelector('#mask')
		    .setAttribute('stroke-dasharray', semi_cf + ',' + cf);

		    
document.querySelector('#outline_curves_hum')
		    .setAttribute('stroke-dasharray', semi_cf + ',' + cf);
document.querySelector('#low_hum')
		    .setAttribute('stroke-dasharray', semi_cf + ',' + cf);
document.querySelector('#mask_hum')
		    .setAttribute('stroke-dasharray', semi_cf + ',' + cf);

var mask = document.querySelector('#mask');
var tempValue = document.querySelector('#tempValue');
function slide() {
	var percent = 60;
	var meter_value = semi_cf - ((percent * semi_cf) / 100);
	mask.setAttribute('stroke-dasharray', meter_value + ',' + cf);
	tempValue.innerHTML  = percent+"&#176; C";
}