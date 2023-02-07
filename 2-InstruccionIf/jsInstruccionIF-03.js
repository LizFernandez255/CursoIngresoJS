function mostrar() {
	let edad;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 18) {

		mensaje ="Es menor de edad.";

	} else {

		mensaje = "Es mayor de edad.";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN