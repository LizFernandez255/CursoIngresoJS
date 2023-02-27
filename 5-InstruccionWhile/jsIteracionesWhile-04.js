/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	// declaro variable
	let numero;

	// pido numero
	numero = parseInt(prompt("Ingrese un número entre 0 y 9:"));

	// Mientras no sea un numero || sea menor a -1 || o sea mayor a 10 esta mal yy entral al bucle
	while (isNaN(numero) || numero < -1 || numero > 10) {
		numero = prompt("Incorrecto. Ingrese un número dento del rango solicitado");
	}

	//expongo por caja el numero 
	document.getElementById("txtIdNumero").value = numero;
}




































/* function mostrar()
{
	let numeroIngresado;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));

	while(isNaN(edad) || edad < 0 || edad > 103){

		edad = parseInt(prompt("ERROR: ingrese un número entre 0 y 10."));
	}

	alert("Numero correcto");
	
}//FIN DE LA FUNCIÓN */