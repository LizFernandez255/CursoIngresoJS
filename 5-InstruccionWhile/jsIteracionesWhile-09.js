/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/* function mostrar() {
	// deck¿laro variable
	let banderaDelPrimero;
	let numMax;
	let numMin;
	let respuesta;
	let numero;

	// inicializo
	banderaDelPrimero = true;
	respuesta = "si";

	// MIENTRAS LA RESPUESTA SEA SÍ, ENTRO AL BLOQUE
	while (respuesta == "si") {
		numero = parseInt(prompt("Ingrese número"));

		//MIENTRAS LO INGRESADO NO SEA UN NUMERO ENTRO AL BLOQUE
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error. Ingrese un número:"));
		}
		//GUARDO EL PRIMERO NUMERO INGRESADO (SI FALG ES IGUAL A TRUE ENTRO)
		if (banderaDelPrimero == true) {
			//LOS NUMEROS INGRESADOS SE GGUARDAN EN LAS VARIABLES
			numMax = numero;
			numMin = numero;
			//SALGO DE LA BANDERA
			banderaDelPrimero = false;
		}
		//SINO SI NUMERO MAXIMO ES MENOR AL NUMERO INGRESADO { EL NUMERO SE GUARDA DENTRO DE LA VARIABLE NUMMAX}
		else if (numMax < numero) {
			numMax = numero;
		}
		// SINO SI NUMERO MINIMO ES MAYOR AL NUMERO INGRESADO { EL NUMERO SE GUARDA DENTRO DE LA VAUABLE NUMMIN}
		else if (numMin > numero) { //numero ingresado < al minimo
			numMin = numero;
		}

		respuesta = prompt("Desea continuar? si/no");
	}

	document.getElementById("txtIdMinimo").value = numMin;
	document.getElementById("txtIdMaximo").value = numMax; 
}*/
// }----------------------------------------------------------------------------------------------------------------------------------------------
/* While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
El menor de los pares y el mayor de los negativos ...(solo si hay) */
function mostrar() {
	//DECLARO VARIABLES
	let banderaDelPrimero;
	let banderaDelPar;
	let banderaDelNegativo;
	let numMax;
	let numMin;
	let respuesta;
	let numero;
	let numNegativo;
	let numPar;

	// INICIALIZO
	banderaDelPrimero = true;
	banderaDelNegativo = true;
	banderaDelPar = true;
	respuesta = "s";

	//MIENTRAS LA RESPUESTA SEA S, SE PIDE NUMERO
	while (respuesta == "s") {
		numero = parseInt(prompt("Ingrese número"));

		//MIENTRAS NO SEA UN NUMERO ESTARA ERRADO
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error. Ingrese un número:"));
		}
		// SI LA BANDERA ES TRUE, ADENTRO
		if (banderaDelPrimero == true) {
			numMax = numero;
			numMin = numero;
			// los primeros numeros estan aca
			banderaDelPrimero = false;
		}
		//SINO SI EL NUMERO MAX ES MENOR AL INGRESADO, SE GUARDA
		else if (numMax < numero) {
			numMax = numero;
		}
		//SINO SI EL NUMERO MIN ES MAYOR AL INGRESADO, SE GUARDA
		else if (numMin > numero) { //numero ingresado < al minimo
			numMin = numero;
		}
		//SI EL NUMERO ES PAR INGRESA
		if (numero % 2 == 0) {

			//SI LA BANDERA ES TRUE O EL NUMERO PAR YA INGRESADO ES MENOR AL NUEVO, SE GUARDA EL NUEVO EN LA VARIABLE
			if (banderaDelPar == true || numPar < numero) {
				numPar = numero;
				banderaDelPar = false;
			}
		}
		//SI EL NUMERO ES NEGATIVO, ENTRA
		if (numero < 0) {

			//SI LA BANDERA ES TRUE O EL NUMERO NEGATIVO YA INGRESADO ES MENOR A NUMERO NUEVO, SE GUARDA EL NUEVO EN LA VARIABLE
			if (banderaDelNegativo == true || numNegativo < numero) {
				numNegativo = numero;
				banderaDelNegativo = false;
			}
		}

		respuesta = prompt("Desea continuar? s/n");

	}

	document.write("El número máximo es: " + numMax + "</br>");
	document.write("El número mayor negativo es: " + numNegativo + "</br>");
	document.write("El número mínimo es: " + numMin + "</br>");
	document.write("El número menor par es: " + numPar + "</br>");
}