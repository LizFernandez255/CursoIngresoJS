function mostrar() {

	let edad;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad > 17) {

		mensaje = "Es adulto.";

	} else {

		if (edad < 13) {

			mensaje = "Es niño.";

		} else {

			mensaje = "Es adolescente.";

		}

	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN