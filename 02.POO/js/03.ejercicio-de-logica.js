/*=============================
=            caso1            =
a, b, c,d
b
c
d
a
=============================*/
var a = {
	A:0,
	B:0,
	C:0,
	D:0,
	resultado: function(){
		if(a.C > a.B && 
			a.D > a.B && 
			a.D > a.C &&
			a.D < a.A){
			return true;
		}
		return false;
	},
	intervalo: setInterval(function(){
		a.A=Math.ceil(Math.random()*4);
		a.B=Math.ceil(Math.random()*4);
		a.C=Math.ceil(Math.random()*4);
		a.D=Math.ceil(Math.random()*4);
		if( a.resultado()){
			clearInterval(a.resultado());
			console.log("atleta A", a.A);
			console.log("atleta B", a.B);
			console.log("atleta C", a.C);
			console.log("atleta D", a.D);
		}
	},10)
}
/*==========================================
=            ejerciico caballos            =
Mac | e: viejo(2) | v: rapido(1) |t: oscuro(2)
Smith| e: | v: |t: claro(1)
Jack| e: joven(1)| v: lento(2)|t: 
Willy| e: | v: |t: 

galgo V(1)
dogo V(4)
alano v(2)
podenco v(3)

Alejandro !c !a
Benito !c !a
Andres a 
Carlos
Dario
Tomas

angela t(1)
rosa t(2)
celia t(3)


==========================================*/
