/* una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche */

//IF Y SWITCH----------------------------------------------------------------------------------------------------------------
/* function mostrar() {
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
/* 
} */

//SWICH--------------------------------------------------------------------------------------------------------------
function mostrar() {
	let estacion;
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se vieja";
			}
			break;
		case "Verano":
			switch (destino) {
				case "Mar del Plata":
				case "Cataratas":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se viaja";
			}
			break;
		case "Primavera":
			switch (destino) {
				case "Bariloche":
					mensaje = "No se viaja";
					break;
				default:
					mensaje = "Se viaja";
			}
			break;
		default:
			mensaje = "Se viaja";
	}
	alert(mensaje);
}

//IF--------------------------------------------------------------------------------------------------------

function mostrar() {
	let estacion;
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	if (estacion == "Invierno") {
		if (destino == "Bariloche") {
			mensaje = "Se viaja";
		} else {
			mensaje = "No se viaja";
		}
	} else if (estacion == "Verano") {
		if (destino == "Cataratas" || destino == "Mar del plata") {
			mensaje = "Se viaja";
		} else {
			mensaje = "No se viaja";
		}
	} else if (estacion == "Primavera") {
		if (destino == "Bariloche") {
			mensaje = "No se viaja";
		} else {
			mensaje = "Se viaja";
		}
	}
	else {
		mensaje = "Se viaja";
	}
	alert(mensaje);
}