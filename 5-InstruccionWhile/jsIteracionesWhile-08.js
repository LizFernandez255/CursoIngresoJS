/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	// declaro variable
	let numero;
	let respuesta;
	let numNegativo;
	let numPostivo;

	// las inicializo
	respuesta = "si";
	numNegativo = 1;
	numPostivo = 0;

	// mientras la respuesta es si, se ingresa al bucle a:
	while (respuesta == "si") {
		// pedir y parsear numero
		numero = parseInt(prompt("Ingrese numero"));

		// si numero es menor a 0, los multiplico
		if (numero < 0) {
			numNegativo = numNegativo * numero;

			// sino los sumo
		} else {
			numPostivo = numPostivo + numero;
		}
		respuesta = prompt("¿Quiere ingresar otro número?");
	}
	// expongo los resultados
	document.getElementById("txtIdSuma").value = numPostivo;
	document.getElementById("txtIdProducto").value = numNegativo;
}//FIN DE LA FUNCIÓN