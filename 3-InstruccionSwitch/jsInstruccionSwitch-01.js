function mostrar() {

	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;


	// if (mes == "Enero") {
	// 		mensaje = "que comiences bien el año!!!.";
	// 	} else if (mes == "Marzo") {
	// 		mensaje = "a clases!!!.";                                
	// 	} else if (mes == "Julio") {
	// 		mensaje = "se vienen las vacaciones!!!.";
	// 	} else if (mes == "Diciembre") {
	// 		mensaje = "Felices Fiestas!!!";
	// 	} else {
	// 		mensaje = "Sos aburrido.";
	// 	}

	switch (mes) {
		case "Enero":
			mensaje = "que comiences bien el año!!!.";
			break;
		case "Marzo":
			mensaje = "a clases!!!.";
			break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!!.";
			break;
		case "Octubre":
		case "Noviembre":
			mensaje = "Epoca de finales";
			break;
		case "Diciembre":
			mensaje = "Felices Fiestas!!!";
			break;
		default:
			mensaje = "Sos aburrido.";
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN