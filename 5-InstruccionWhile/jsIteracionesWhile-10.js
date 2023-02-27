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
	//DECLARO VARIABLES
	let respuesta;
	let numero;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCero;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	//INICIALIZO VARIABLES
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCero = 0;
	contadorPares = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;
	respuesta = "s";

	//MIENTRAS LA RESPUESTA SEA S {GUARDO EL NUMERO EN LA VARIABLE}
	while (respuesta == "s") {

		// pedir y parsear numero
		numero = parseInt(prompt("Ingrese número"));

		//MIENTRAS NO SE INGRESE UN NUMERO SE NOTIFICA EL ERROR
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error. Ingrese un número:"));
		}

		//SI EL NUMERO ES MENOR A NEGATIVO: SUMARLO Y CONTARLO
		if (numero < 0) {
			// 1-Suma de los negativos.
			sumaNegativos = sumaNegativos + numero;
			// 4-Cantidad de negativos.
			contadorNegativos = contadorNegativos + 1;

			//SINO SI ES POSITIVO, SUAMRLO Y CONTARLO
		} else if (numero > 0) {
			// 2-Suma de los positivos.
			sumaPositivos = sumaPositivos + numero;
			// 3-Cantidad de positivos.
			contadorPositivos = contadorPositivos + 1;

			//SINO: CONTAR LOS 0
		} else {
			// 5-Cantidad de ceros.
			contadorCero = contadorCero + 1;
		}
		//SI EL NUMERO DA 0, ES PAR
		if (numero % 2 == 0) {
			// 6-Cantidad de números pares.
			contadorPares = contadorPares + 1;

		}

		respuesta = prompt("desea continuar? s/n");
	}
	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioNegativos = sumaNegativos / contadorNegativos;
	diferencia = sumaPositivos - sumaNegativos;

	document.write("La suma de los numeros negativos es : " + sumaNegativos + "</br>");
	document.write("La suma de los numeros positivos es : " + sumaPositivos + "</br>");
	document.write("La cantidad de numeros positivos es : " + contadorPositivos + "</br>");
	document.write("La cantidad de numeros negativos es : " + contadorNegativos + "</br>");
	document.write("La cantidad de ceros es : " + contadorCero + "</br>");
	document.write("La cantidad de numeros pares es : " + contadorPares + "</br>");
	document.write("El promedio de los numeros positivos es : " + promedioPositivos + "</br>");
	document.write("El promedio de los numeros negativos es : " + promedioNegativos + "</br>");
	document.write("La diferencia entre los numeros positivos y los negativos es : " + diferencia + "</br>");


} 