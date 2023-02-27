/* 
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.
function mostrar() {
	let i;
	let mensaje;

	mensaje = "";
	i = 10;

	//MIENTRAS EL CONTADOR SEA MAYOR A 0 ENTRO, Y LE RESTO 1
	while (i > 0) {
		mensaje = mensaje + i + " ";

		i = i - 1;
	}

	alert(mensaje);
} */
// BIS 2---------------------------------------------------------------------------------------------------
/* while 2 bis: Ingresar 5 números, y determinar la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos)*/
/* function mostrar() {
	//DECLARO VARIABLES 
	let numero;
	let numMayor;
	let numMenor;
	let contadorMay;
	let contadorMenor;

	//INICIALIZO VARIABLE
	numMenor = 10;
	numMayor = 20;
	contadorMay = 0;
	contadorMenor = 0;

	//DECLARO E INICIALIZO i EN 0; i DEBE SER MENOR A 6; SE SUMA 1 CADA VEZ QUE ENTRE A LA CONDI
	for (let i = 0; i < 5; i++) {
		numero = prompt("Ingrese un número:");
		
		//MIENTRAS NO SE INGRESE UN NUMERO ESTARA ERRADO
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error. Ingrese un número:"));
		}
		//SI 20 ES MAYOR AL NUMERO SE LO GUARDA EN MENORES A 20
		if (numMayor > numero) {
			contadorMenor = contadorMenor + 1;
		} 
		//SI 10 ES MENOR AL NUMERO SE LO GUARDA EN MAYORES A 10
		if (numMenor < numero) {
			contadorMay = contadorMay + 1;
		}
	}

	document.write("La cantidad de números menores a 20 son " + contadorMenor + "</br>");
	document.write("La cantidad de números mayores a 10 son " + contadorMay + "</br>");

}
 */
// BIS 2 2--------------------------------------------------------------------------------------------------------
/* While 2 bis bis: Ingresar numeros hasta que el usuario quiera. Determinar la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos). 
También el promedio de los números que cumplen la condición anterior. */

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

