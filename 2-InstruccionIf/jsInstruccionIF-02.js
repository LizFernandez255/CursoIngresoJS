/* Al ingresar una edad debemos informar solo si la persona es mayor de edad */
function mostrar() {
	//DECLARO VARIABLES
	let edad;
	let mensaje;

	//GUARDO LA EDAD INGRESADA EN LA CAJA EN LA VARIABLE
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//SI LA EDAD ingresada ES MAYOR A 17 AÑOS: SE MUESTRA EL MENSAJE
	if (edad > 17) {

		mensaje = "Es mayor de edad.";

	}

	alert(mensaje);

}


//FIN DE LA FUNCIÓN