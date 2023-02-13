function mostrar() {
	let estacion;
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				mensaje = "Se viaja";
			} else {
				mensaje = "No se viaja";
			}
			break;
		case "Verano":
			if (destino == "Cataratas" || destino == "Mar del plata") {
				mensaje = "Se viaja";
			} else {
				mensaje = "No se viaja";
			}
			break;
		case "Primavera":
			if (destino == "Bariloche") {
				mensaje = "No se viaja";
			} else {
				mensaje = "Se viaja";
			}
			break;
		default:
			mensaje = "Se viaja";
	}
	alert(mensaje);
}