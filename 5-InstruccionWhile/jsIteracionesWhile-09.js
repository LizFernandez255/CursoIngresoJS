/* While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
El menor de los pares y el mayor de los negativos ...(solo si hay) */
function mostrar() {
	let banderaDelPrimero;
	let banderaDelPar;
	let banderaDelNegativo;
	let numMax;
	let numMin;
	let respuesta;
	let numero;
	let numNegativo;
	let numPar;

	// inicializo
	banderaDelPrimero = true;
	banderaDelNegativo = true;
	banderaDelPar = true;
	respuesta = "s";

	while (respuesta == "s") {
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
		if (numero % 2 == 0){
			if(banderaDelPar == true || numPar > numero){
				numPar = numero;

			}
		}

		if (numero < 0){
			if (banderaDelNegativo == true || numero > numNegativo){
				numNegativo = numero
			}
		}
		respuesta = prompt("Desea continuar? s/n");
	}
	document.write("El número máximo es: " + numMax + "</br>");
	document.write("El número mayor negativo es: " + numNegativo + "</br>");
	document.write("El número mínimo es: " + numMin + "</br>");
	document.write("El número menor par es: " + numPar + "</br>");
}
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
// function mostrar() {
// 	// deck¿laro variable
// 	let banderaDelPrimero;
// 	let numMax;
// 	let numMin;
// 	let respuesta;
// 	let numero;

// 	// inicializo
// 	banderaDelPrimero = true;
// 	respuesta = "si";

// 	while (respuesta == "si") {
// 		numero = parseInt(prompt("Ingrese número"));
// 		while (isNaN(numero)) {
// 			numero = parseInt(prompt("Error. Ingrese un número:"));
// 		}
// 		if (banderaDelPrimero == true) {
// 			numMax = numero;
// 			numMin = numero;
// 			// los primeros numeros estan aca
// 			banderaDelPrimero = false;
// 		}
// 		else if (numMax < numero) {
// 			numMax = numero;
// 		}
// 		else if (numMin > numero) { //numero ingresado < al minimo
// 			numMin = numero;
// 		}

// 		respuesta = prompt("Desea continuar? si/no");
// 	}

// 	document.getElementById("txtIdMinimo").value = numMin;
// 	document.getElementById("txtIdMaximo").value = numMax;

// }----------------------------------------------------------------------------------------------------------------------------------------------