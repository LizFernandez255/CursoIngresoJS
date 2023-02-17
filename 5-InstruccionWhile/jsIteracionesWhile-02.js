/* 
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.
function mostrar() {
	let i;
	let mensaje;

	mensaje = "";
	i = 10;

	while (i > 0) {
		mensaje = mensaje + i + " ";

		i = i - 1;
	}

	alert(mensaje);
} */
// BIS 2---------------------------------------------------------------------------------------------------

// function mostrar() {
// 	let numero;
// 	let numMayor;
// 	let numMenor;
// 	let contadorMay;
// 	let contadorMenor;


// 	numMenor = 10;
// 	numMayor = 20;
// 	contadorMay = 0;
// 	contadorMenor = 0;

// 	for (let i = 0; i < 5; i++) {
// 		numero = prompt("Ingrese un número:");
// 		while (isNaN(numero)) {
// 			numero = parseInt(prompt("Error. Ingrese un número:"));
// 		}
// 		if (numero < numMayor) {
// 			contadorMenor = contadorMenor + 1;
// 		} 

// 		if (numero > numMenor) {
// 			contadorMay = contadorMay + 1;
// 		}


// 	}

// 	document.write("La cantidad de números menores a 20 son " + contadorMenor + "</br>");
// 	document.write("La cantidad de números mayores a 10 son " + contadorMay + "</br>");

// }

// BIS 2 2--------------------------------------------------------------------------------------------------------

function mostrar() {
	let numero;
	let numMayor;
	let numMenor;
	let contadorMay;
	let contadorMenor;
	let respuesta;
	let promedioMay;
	let promedioMenor;
	let acumuladorMayor;
	let acumuladorMenor;


	numMenor = 10;
	numMayor = 20;
	contadorMay = 0;
	contadorMenor = 0;
	respuesta = "s";
	acumuladorMayor = 0;
	acumuladorMenor = 0;

	while (respuesta == "s") {
		numero = parseInt(prompt("Ingrese número"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error. Ingrese un número:"));
		}//          20
		if (numero > numMenor) {
			//
			contadorMay = contadorMay + 1;
			acumuladorMayor = acumuladorMayor + numero;
			// 10
		}

		if (numero < numMayor) {
			contadorMenor = contadorMenor + 1;
			acumuladorMenor = acumuladorMenor + numero;
		}
		
		respuesta = prompt("desea continuar? s/n");
	}

	promedioMay = acumuladorMayor / contadorMay;
	promedioMenor = acumuladorMenor / contadorMenor;

	document.write("La cantidad de números menores a 20 son: " + contadorMenor + "</br>");
	document.write("Y el promedio es: " + promedioMenor + "</br>");
	document.write("La cantidad de números mayores a 10 son: " + contadorMay + "</br>");
	document.write("Y el promedio es: " + promedioMay + "</br>");
}

