/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	let respuesta;
	let cantPositivos;
	let cantNegativos;
	let negativo;
	let positivo;
	let numero;
	let promPositivo;
	let promNegativo;
	let parPositivo;
	let parNegativo;
	let resto;
	let cero;
	let diferencia;
	let parTotal;

	respuesta = "si";
	cantPositivos = 0;
	cantNegativos = 0;
	negativo = 0;
	positivo = 0;
	numero = 0;
	promPositivo = 0;
	promNegativo = 0;
	resto = 0;
	cero = 0;

	// mientras la respuesta es si, se ingresa al bucle a:
	while (respuesta == "si") {
		// pedir y parsear numero
		numero = parseInt(prompt("Ingrese número"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error. Ingrese un número:"));
		}
		// si numero es menor a 0, los multiplico
		if (numero > 0) {

			positivo = positivo + numero;

			cantPositivos = cantPositivos + 1;

			resto = numero % 2;

		}
		else if (resto == 0) {
			parPositivo = parPositivo + 1;
		}

		if (numero < 0) {
			negativo = negativo + numero;

			cantNegativos = cantNegativos + 1;

			resto = numero % 2;

			if (resto == 0) {
				parNegativo = parNegativo + 1;
			}
		}

		else {
			cero = cero + 1;

		}

		respuesta = prompt("Desea continuar? si/no");

	} while (respuesta == "si");

	diferencia = positivo - negativo;

	promPositivo = positivo / cantPositivos;

	promNegativo = negativo / cantNegativos;

	parTotal = positivo + negativo;

	document.write("La suma de los numeros positivos es : " + positivo + "</br>");
	document.write("La suma de los numeros negativos es : " + negativo + "</br>");
	document.write("La cantidad de numeros positivos es : " + cantPositivos + "</br>");
	document.write("La cantidad de numeros negativos es : " + cantNegativos + "</br>");
	document.write("La cantidad de ceros es : " + cero + "</br>");
	document.write("El promedio de los numeros positivos es : " + promPositivo + "</br>");
	document.write("El promedio de los numeros negativos es : " + promNegativo + "</br>");
	document.write("La diferencia entre los numeros positivos y los negativos es : " + diferencia + "</br>");
	document.write("La cantidad de numeros pares es : " + parTotal + "</br>");

}