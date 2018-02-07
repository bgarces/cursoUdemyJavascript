/*=============================================
=            funciones sin parametros            =
=============================================*/
var globales =10;
console.log("globales", globales);
// declaramos la funciones
function saludo(){
	// tarea de la funciones
	console.log("hola");
}

// Ejecutamos la funciones
saludo();

/*=============================================
=            funciones con parametros            =
=============================================*/
function operacion(digito1, digito2){
	var resultado = digito1 + digito2;
	globales=resultado
	console.log("globales", globales);
	console.log("resultado", resultado);
}
operacion(5,7);

/*=============================================
=            Funciones con retorno sin parametros          =
=============================================*/

function retorno1(){
	var numero =5;
	return numero;
}
console.log(retorno1());

/*=============================================
=            Funciones con retorno con parametros          =
=============================================*/
function retorno2(numero){
	return numero;

}
console.log(retorno2(10));
