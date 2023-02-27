/* Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita". */
function mostrar() {
	//DECLARO VARIALES
	let edad;
	let mensaje;

	//GUARDO LA EDAD INGRESADA EN LA CAJA, EN LA VARIABLE "EDAD"
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//"SI LA EDAD INGRESADA ES IGUAL A 15: SE MUESTRA EL MENSAJE"
	if (edad == 15) {

		mensaje = "Niña bonita";

	}

	alert(mensaje);
}

// --------------------------------1 BIS----------------------------------LIZ CAROLINA FERNANDEZ
/* Ejercicio 1bis: 
/con if
pedir a una persona que fue de vaciones , 
la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento 
hata 80km/h= lento 
hasta 100= buen ritmo
hasta 120= ahi de la ley 
mas = eso no se hace/  */

// function mostrar() {

// 	let distancia;
// 	let tiempo;
// 	let velocidad;
// 	let mensaje;

// 	distancia = parseInt(prompt("Ingrese la distancia recorrida:"));
// 	tiempo = parseInt(prompt("Ingrese el tiempo transcurrido"));

// 	velocidad = distancia / tiempo;

// 	if (velocidad <= 60) {
// 		mensaje = "Muy lento.";

// 	} else if (velocidad <= 80) {
// 		mensaje = "Lento.";

// 	} else if (velocidad <= 100) {
// 		mensaje = "Buen ritmo.";

// 	} else if (velocidad <= 120) {
// 		mensaje = "Ahí de la ley.";

// 	} else {
// 		mensaje = "Eso no se hace.";
// 	}

// 	document.getElementById("txtIdEdad").value = mensaje;

// }

// -------------------------------2 BIS-----------------------------------------
/* Ejercicio 1 bis bis:
con if
ingresar el nombre y los datos requeridos para calcular el IMC , 
e informar a la persona si es:
Bajo peso <18.5
Peso normal 18,5-24.9
Preobesidad 25-26.9
Obesidad I 27-29.9
Obesidad II 30-34.9
Obesidad III >40 */
function mostrar() {

	let altura;
	let peso;
	let nombre;
	let IMC;
	let mensaje;

	nombre = prompt("Ingrese su nombre:");
	peso = parseFloat(prompt("Ingrese su peso:"));
	altura = parseFloat(prompt("Ingrese su altura:"));

	IMC = peso / (altura * altura);

	if (IMC < 18.5) {
		mensaje = nombre + ": Bajo peso.";

	} else if (IMC >= 18.5 && IMC <= 24.9) {
		mensaje = nombre + ": Peso normal.";

	} else if (IMC >= 25 && IMC <= 26.9) {
		mensaje = nombre + ": Preobesidad.";

	} else if (IMC >= 27 && IMC <= 29.9) {
		mensaje = nombre + ": Obesidad I.";

	} else if (IMC >= 30 && IMC <= 34.9) {
		mensaje = nombre + ": Obesidad II.";

	} else {
		mensaje = nombre + ": Obesidad III";
	}

	document.getElementById("txtIdEdad").value = mensaje;

}


