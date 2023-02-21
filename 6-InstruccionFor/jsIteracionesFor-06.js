/* al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados. */
function mostrar() {

	let contadorPar = 0;
	let numero;

	numero = parseInt(prompt("Ingrese números:"));

	for (let i = 1; i <= numero; i++) {

		if (i % 2 == 0) {
			contadorPar = contadorPar + 1;
			console.log(i);
		}
	}
	console.log("Pares" + contadorPar);


}//FIN DE LA FUNCIÓN