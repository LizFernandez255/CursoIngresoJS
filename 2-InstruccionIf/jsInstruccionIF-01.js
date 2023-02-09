/*function mostrar() {

	let edad;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad == 15) {

		mensaje = "Niña bonita";

	}

	alert(mensaje);
}*/

// --------------------------------1 BIS----------------------------------LIZ CAROLINA FERNANDEZ
function mostrar() {

	let distancia;
	let tiempo;
	let velocidad;
	let mensaje;

	distancia = parseInt(prompt("Ingrese la distancia recorrida:"));
	tiempo = parseInt(prompt("Ingrese el tiempo transcurrido"));

	velocidad = distancia / tiempo;

	if (velocidad <= 60) {
		mensaje = "Muy lento.";

	} else if (velocidad <= 80) {
		mensaje = "Lento.";

	} else if (velocidad <= 100) {
		mensaje = "Buen ritmo.";

	} else if (velocidad <= 120) {
		mensaje = "Ahí de la ley.";

	} else {
		mensaje = "Eso no se hace.";
	}

	document.getElementById("txtIdEdad").value = mensaje;

}

// -------------------------------2 BIS-----------------------------------------

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


