/* al presionar el botón pedir un número. 
Informar si el numero es PRIMO o no. */
function mostrar() {
	let numero;
	let contadorDivisores = 0;

	numero = parseInt(prompt("Ingrese número: "));

	for (let i = 1; i <= numero; i++) {
		if (numero % i == 0) {
			contadorDivisores = contadorDivisores + 1;
		}
	}
	if (contadorDivisores == 2) {
		console.log(numero + " es primo.")
	} else {
		console.log(numero + " no es primo.")
	}

}//FIN DE LA FUNCIÓN