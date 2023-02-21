/* al presionar el botón pedir un número.
mostrar los numeros divisores desde el 1 al número ingresado,
	y mostrar la cantidad de numeros divisores encontrados.*/
function mostrar() { 

	let contaDivisor = 0;
	let numero;

	numero = parseInt(prompt("Ingrese números:"));

	for (let i = 1; i <= numero; i++) {

		if (numero % i == 0) {
			contaDivisor = contaDivisor + 1;
			console.log(i);
		}
	}
	console.log("Divisores: " + contaDivisor);


}//FIN DE LA FUNCIÓN