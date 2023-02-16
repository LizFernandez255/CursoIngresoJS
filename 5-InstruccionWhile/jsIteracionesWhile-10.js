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
	let respuesta;
	let numero;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivos;
	let contadorNegativos;
	let contador0;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	contadorPositivos = 0;
	contadorNegativos = 0;
	contador0 = 0;
	contadorPares = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;
	respuesta = "s";

	while (respuesta == "s") {
		// pedir y parsear numero
		numero = parseInt(prompt("Ingrese número"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error. Ingrese un número:"));
		}

		if( numero < 0){
			sumaNegativos = sumaPositivos + numero;
			contadorNegativos = contadorNegativos + 1;

		}else if(numero > 0){
			sumaPositivos = sumaPositivos + numero;
			contadorPositivos = contadorPositivos + 1;
		}else {
			contador0 = contador0 + 1;
		}
		if (numero % 2 == 0){
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
	document.write("La cantidad de ceros es : " + contador0 + "</br>");
	document.write("El promedio de los numeros positivos es : " + promedioPositivos + "</br>");
	document.write("El promedio de los numeros negativos es : " + promedioNegativos + "</br>");
	document.write("La diferencia entre los numeros positivos y los negativos es : " + diferencia + "</br>");
	document.write("La cantidad de numeros pares es : " + contadorPares + "</br>");


} 
