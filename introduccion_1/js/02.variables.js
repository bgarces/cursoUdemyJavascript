/*=============================================
=  Variables          =

=============================================*/
// variables numericas
var numero = 5;
console.log("numero", numero);

// variables de texto
var palabra = "palabras"
console.log("palabra", palabra);

// variables boleanas
var  boleana = true;
console.log("boleana", boleana);

//variables tipo arreglo
var colores = ["rojo", "amarillo"]
console.log("colores", colores[0]);

// variables tipo objeto
var jugo = {"igrediente1":"fresa",
			"igrediente2": "mandarina",
			"igrediente3": "pera"}
console.log("jugo", jugo.igrediente1);
// variables dom
var caja = document.querySelector("#caja");
console.log("caja", caja);

caja.style.width="200px";
caja.style.height="200px";
caja.style.background= "red";

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);





