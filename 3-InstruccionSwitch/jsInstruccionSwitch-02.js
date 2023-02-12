function mostrar() {
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;


	/* CON IF ELSE*/
	if (mes == "Septiembre" || mes == "Octubre" || mes == "Noviembre" || mes == "Diciembre") {
		mensaje = "Ya pasamos el frío, ahora el calor";
	} else if (mes == "Julio" || mes == "Agosto") {
		mensaje = "Abrigate";
	} else {
		mensaje = "Falta para el invierno.";
	}

	// switch (mes) {
	// 	case "Septiembre":
	// 	case "Octubre":
	// 	case "Noviembre":
	// 	case "Diciembre":
	// 		mensaje = "Ya pasamos el frío, ahora el calor";
	// 		break;
	// 	case "Julio":
	// 	case "Agosto":
	// 		mensaje = "Abrigate que hace frío.";
	// 		break;
	// 	default:
	// 		mensaje = "Falta para el invierno";
	// 		break;

	// }

	alert(mensaje);

}//FIN DE LA FUNCIÓN