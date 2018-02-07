/*===============================
=            objetos            =
coleccion de propiedades
===============================*/

var object ={
	//propiedades
	nombre:"Juan",
	edad:31,
	//el método
	descripcion: function(){
		
		console.log("Su nombre es "+object.nombre+" y tiene "+object.edad+" años.");
	},
	saludar: function(saludo){
		console.log(saludo+" "+object.nombre);
	}
}
console.log("nombre",object.nombre);
console.log("edad", object.edad);
object.descripcion();
object.saludar("Hola");

/*===============================
=            objetos  primitivos
===============================*/

var d = new Date();
console.log("d", d);
var y =d.getFullYear();
console.log("y", y);