/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. */
function mostrar() {
	let numero;
	let acumulador;
	let promedio;
	let contador;

	// contador numerico
	contador = 0;
	acumulador = 0;

	//    variable      condicion    aumento/decremento
	for (let i = 0; i < 5; i++) {

		numero = parseInt(prompt("Ingrese número"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error. Ingrese un número:"));
		}

		contador = contador + 1;
		acumulador = acumulador + numero;

	}
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}







/* function mostrar() {
	let numero;
	let i;
	let acumulador;
	let promedio;

	acumulador = 0;
	i = 0;

	//condicion 
	while (i < 5) {
		numero = parseInt(prompt("Ingrese número"));

		acumulador = acumulador + numero;
		// cuento las veces que entra al while
		i = i + 1;
	}
	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio; */
//FIN DE LA FUNCIÓN

/* function mostrar() {
	let numero;
	let i;
	let acumulador;
	let promedio;
	let contador;

	// contador numerico
	contador = 0;
	acumulador = 0;
	// contador de while
	i = 0;

	//condicion 
	while (i < 5) {

		numero = parseInt(prompt("Ingrese número"));
		while (isNaN(numero)) {
			numero = prompt("Error. Ingrese un número:")
		}
		// cuento las veces que entra al while
		i = i + 1;
		contador = contador + 1;
		acumulador = acumulador + numero;

	}
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
} */
