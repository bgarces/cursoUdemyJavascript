/*==============================
=            clases            =
Funciones constructoras
==============================*/

//clases primitivas
// clase String
var string = new String("Esto es un string");
console.log("string", string);

//Clase Number
var number = new Number(12);
console.log("number", number);

//Clase boleana
var boolean = new Boolean(false);
console.log("boolean", boolean);

/*==============================
=            clases  compuestas
==============================*/
//Clase Array
var array = new Array("rojo", "amarillo","verde");
console.log("array", array);

//clases Object
var object = new Object({nombre:"Pedro",
						edad:30});
console.log("object", object);

/*==============================
=            clases  creadas por el programador
==============================*/
//Creamos el prototipo

function Persona(){
	//Propiedades publicas
	this.nombre;
	this.edad;

}

 var yo = new Persona();
 yo.nombre="Juan";
 yo.edad="21";
 console.log("yo", yo);

 //Clases con parámetros
 function Animales(nombre, raza){
 	this.nombre=nombre;
 	this.raza=raza;
 }

 var mascota = new Animales("perro","pitbul");
 console.log("mascota", mascota);
