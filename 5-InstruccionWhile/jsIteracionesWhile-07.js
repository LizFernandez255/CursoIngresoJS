/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	// declaro variable
	let numero;
	let i;
	let acumulador;
	let promedio;
	let respuesta;

	// las inicializo
	acumulador = 0;
	i = 0;
	respuesta = "si";

	// mientras la respuesta es si, se ingresa al bucle a: 
	while (respuesta == "si") {
		// pedir y parsear numero
		numero = parseInt(prompt("Ingrese numero"));
		// acumular y contar
		acumulador = acumulador + numero;
		i = i + 1;
		// pregunto si se quiere ingresar mas n, para reingresar o salir del bucle
		respuesta = prompt("¿Quiere ingresar otro número?");
	}
	// saco el promedio del acumulador que es la suma de todos lo n
	promedio = acumulador / i;

	// expongo los resultados
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN