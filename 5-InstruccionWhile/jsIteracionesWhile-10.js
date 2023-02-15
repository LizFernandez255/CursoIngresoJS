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
function mostrar()
{
	//declarar contadores y variables 
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
	document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN