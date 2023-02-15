/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	// deck¿laro variable
	let banderaDelPrimero;
	let numMax;
	let numMin;
	let respuesta;
	let numero;

	// inicializo
	banderaDelPrimero = true;
	respuesta = "si";

	while (respuesta == "si") {
		numero = parseInt(prompt("Ingrese número"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error. Ingrese un número:"));
		}
		if (banderaDelPrimero == true) {
			numMax = numero;
			numMin = numero;
			// los primeros numeros estan aca
			banderaDelPrimero = false;
		}
		else if (numMax < numero) {
			numMax = numero;
		}
		else if (numMin > numero) { //numero ingresado < al minimo
			numMin = numero;
		}

		respuesta = prompt("Desea continuar? si/no");
	}

	document.getElementById("txtIdMinimo").value = numMin;
	document.getElementById("txtIdMaximo").value = numMax;

}