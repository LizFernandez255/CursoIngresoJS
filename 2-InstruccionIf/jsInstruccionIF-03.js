/* Al ingresar una edad debemos informar si la persona es mayor de edad,
 sino informar que es un menor de edad. */
function mostrar() {
	//DECLARO VARIABLES
	let edad;
	let mensaje;

	//GUARDO LA EDAD INGRESADA EN LA VARIABLE
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//SI LA EDAD ES MENOR A 18 AÑOS; MUESTRO MENSAJE. SINO: MUESTRO OTRO MENSAJE.
	if (edad < 18) {

		mensaje = "Es menor de edad.";

	} else {

		mensaje = "Es mayor de edad.";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN