/* al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA" */
function mostrar() {
	let cantRepeticiones;

	cantRepeticiones = parseInt(prompt("Cantidad de veces a repetir el mensaje: "));

	while (isNaN(cantRepeticiones)) {
		cantRepeticiones = parseInt(prompt("Error. Ingrese un número:"));
	}

	for (i = 0; i < cantRepeticiones; i++) {

		document.write("Hola UTN FRA" + "<br>");

	}

}//FIN DE LA FUNCIÓN