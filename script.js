function executa() {

var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
var xXx = data.getDay() +1;

var pass = ano * mes* dia * xXx;

document.getElementById('txt').innerHTML = pass; 
}