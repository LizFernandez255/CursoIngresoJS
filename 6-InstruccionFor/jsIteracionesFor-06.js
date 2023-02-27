/* al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados. */
function mostrar() {

	let contadorPar = 0;
	let numero;

	numero = parseInt(prompt("Ingrese números:"));

	for (let i = 0; i < numero; i++) {

		if (i % 2 == 0) {
			contadorPar = contadorPar + 1;
			// mostrar los numeros pares desde el 1 al número ingresado, 
			console.log(i);
		}
	}
	// y mostrar la cantidad de numeros pares encontrados. 
	console.log("Pares" + contadorPar);


}//FIN DE LA FUNCIÓN