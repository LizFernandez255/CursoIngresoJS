/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. */
function mostrar() {
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
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN