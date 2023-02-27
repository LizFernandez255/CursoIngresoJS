/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
/* function mostrar() {
	// declaro variables
	let clave;
	let mensaje;

	// pido clave
	clave = prompt("ingrese el número clave.");

	// mientras la clave sea distinta de utn750, entro al bucle
	while (clave != "utn750") {
		clave = prompt("Clave incorrecta. Vuelva a ingresar:");

	}
	// creo mensaje
	mensaje = "La clave es correcta";

	alert(mensaje);

}//FIN DE LA FUNCIÓN */
function mostrar() {
	// declaro variables
	let clave;
	let mensaje;

	// pido clave
	clave = prompt("ingrese el número clave.");

	// mientras la clave sea distinta de utn750, entro al bucle
	while (!(clave == "utn750")) {
		clave = prompt("Clave incorrecta. Vuelva a ingresar:");

	}
	// creo mensaje
	mensaje = "La clave es correcta";

	alert(mensaje);

}//FIN DE LA FUNCIÓN
