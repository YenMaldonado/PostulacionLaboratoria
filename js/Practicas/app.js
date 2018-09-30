//unidad02-ejercicios-1
function coinConvert(usDollars) {
  var arr = [];
  var peruvianSoles=usDollars*3.25;
  var mexicanPesos=usDollars*18;
  var chileanPesos=usDollars*660;
  arr.push(peruvianSoles);
  arr.push(mexicanPesos);
  arr.push(chileanPesos);
 console.log(peruvianSoles, mexicanPesos, chileanPesos);
  return arr;
}
function ejecutaCoinConvert()
{
  var to50 = coinConvert(50);
  var to100 = coinConvert(100);
  var to85 = coinConvert(85);
  var mensaje = "Debería regresar " +to50+ " para 50 <br>";
  mensaje += "Debería regresar "+to100+" para 100 <br>";
  mensaje += "Debería regresar "+to85+" para 85";

var elementoresultado= document.getElementById("Resultado");
elementoresultado.innerHTML= mensaje;
}
//unidad02-ejercicios-2
function restaurantBill(bill){
  var tax = bill*0.10;
  var total = bill+tax;
  return '$'+ total/5;
}
function ejecuta_restaurantBill() {
  var total50 = restaurantBill(50);
  var total100 = restaurantBill(100);
  var total85 = restaurantBill(85);
  var mensaje = "Debería regresar "+total50+" para 50 <br>";
  mensaje += "Debería regresar " +total100+ " para 100 <br>";
  mensaje += "Debería regresar " +total85+" para 85";

  var mostrarmensaje=document.getElementById("Resultado2");
  mostrarmensaje.innerHTML = mensaje;
}
//unidad02-Ejercicios Guiados
//ejercicio1
function ejercicio1() {
  var age= parseInt(prompt("¿Cuál es tu edad?"));
  var ageInSeconds= age*365*24*60*60;
  console.log(ageInSeconds)
  alert(" Tu edad es " +age + " años " + " Y en segundos sería "+ ageInSeconds);
}
function simulador_oculto(id) {
var obtener_dato=document.getElementById(id);
console.log(obtener_dato);
//console.log(document.getElementById(id).style.display);
//document.getElementById(id).style.display="block";
if(obtener_dato.style.display=="none"){
  obtener_dato.style.display="block";
} else {
  obtener_dato.style.display="none";
}

}

//ejercicio2
function ejercicio2() {
  var temperature= parseInt(prompt("¿Cuál es la Temperatura en celsius?"));
  var convertToFarenheit= (temperature*1.8)+32;

  console.log("La Temperatura en Farenheit es "+convertToFarenheit);
  alert("La Temperatura en Farenheit es "+convertToFarenheit);
}

//ejercicio3
function ejercicio3(){

var income= prompt("¿Cuánto es tu ingreso?");//400

  var costs= prompt("¿Cuánto es el costo?");//65

  var taxPercent= prompt("¿Cuánto es el porcentaje (%) de impuestos?");//18

  var grossProfit= income-costs;//335

  var tax= grossProfit* taxPercent/100;//60.3

  var netIncome= grossProfit-tax;

  alert("Tu ganancia neta es de $ "+ netIncome);
}

//ejercicio4
function ejercicio4() {

var name= prompt("¿Cuál es tu nombre y apellido?");
var firstInitial= name.slice(0,1);
var secondInitialPosition= name.indexOf(" ")+1;
var secondInitial= name.slice(secondInitialPosition, secondInitialPosition+1);

console.log("firstInitial+secondInitial");
alert("tus iniciales son: "+ firstInitial.toUpperCase() +" "+secondInitial.toUpperCase());
}
