var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numero=0;
/*==========================================
=            Numeros aleatorios            =
Math.random
Math.floor redondea a entero menor
Math.ceil redondea entro mayor
Math.round redonde a su numero entero mas proximo
==========================================*/
numero=Math.round(Math.random()*10);
numeroAleatorio.innerHTML = numero;
