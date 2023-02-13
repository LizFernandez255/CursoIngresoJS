function mostrar() {
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace FRÍO";
			break;
		case "Cataratas":
		case "Mar del plata":
			mensaje = "Hace CALOR";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN
