var tiempo = document.querySelector("#tiempo");
var segundos =0;

/*=====================================
=            set interval (interval de tiempo)   
         =
         setInterval(function, tiempo)
=====================================*/
var intervalo = setInterval(function(){
	segundos++;

	tiempo.innerHTML = segundos;
},1000);

/*=====================================
=            set timeout (retardo de tiempo)   
         =
         setTimeout(function, tiempo)
=====================================*/
setTimeout(function(){
	//alert("Se cumplió el tiempo");
	clearInterval(intervalo);
},5000);


