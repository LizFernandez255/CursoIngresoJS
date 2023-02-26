/*LIZ CAROLINA FERNANDEZ
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
// function SacarResto() {
// 	// DECLARO VARIABLE
// 	let dividendo;
// 	let divisor;
// 	let resto;
// 	let mensaje;

// 	// ASIGNO EL VALOR DE LA CAJA DE TEXTO A LA VARIABLE
// 	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
// 	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

// 	// CALCULO EL RESTO
// 	resto = dividendo % divisor;

// 	// CONCATENO EL MENSAJE
// 	mensaje = "El resto es " + resto + ".";

// 	// EXPONGO EL MENSAJE
// 	alert(mensaje);
// }

//-------------------------------------------------------------------------------------------------------

/* Ejercicio 8.bis: Ingresar dos numeros por id
Se pide:
mostrar por alert:
a) La suma de los dos numeros
b) El promedio de los numeros
c) El resto de los numeros (el primero en modulo del segundo)  */

function SacarResto() {

	// DECALRO VARIABLES
	let numUno;
	let numDos;

	// ASIGNO EL VALOR DE LA CAJA DE TEXTO A LA VARIABLE
	numUno = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	// SUMO LOS NUMEROS
	suma = numUno + numDos;

	// SACO EL PROMEDIO
	promedio = suma / 2;

	// SACO EL RESTO
	resto = numUno % numDos;

	// LOS EXPONGO POR ALERT
	alert(suma);

	alert(promedio);

	alert(resto);
}
