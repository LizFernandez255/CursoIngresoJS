/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	// declaro variable
	let numero;
	let respuesta;
	let numMax;
	let numMin;
	let contador

	// las inicializo
	respuesta = "si";
	numMax = 0;
	numMin = 0;

	// mientras la respuesta es si, se ingresa al bucle a:
	while (respuesta == "si") {
		// pedir y parsear numero
		numero = parseInt(prompt("Ingrese numero"));

		numMax = numero;
		numMin = numero;

		while ( numero < numMin){
			
		}

		



		
		/* if (numMin < numero) {
			numMin = numero;

			
		} else if (numMax > numero) {
			numMax = numero;
		} */
		respuesta = prompt("¿Quiere ingresar otro número?");
	}

	

	// expongo los resultados
	document.getElementById("txtIdMinimo").value = numMin;
	document.getElementById("txtIdMaximo").value = numMax;
}//FIN DE LA FUNCIÓN