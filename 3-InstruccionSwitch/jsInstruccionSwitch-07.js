/* Al selecionar un destino ,
indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste */

function mostrar() {
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
			mensaje = "Oeste";
			break;
		case "Cataratas":
			mensaje = "Norte";
			break;
		case "Mar del plata":
			mensaje = "Este";
			break;
		case "Ushuaia":
			mensaje = "Sur";
			break;
	}
	alert(mensaje);
	// if( Destino == "Bariloche"){
	// 	mensaje = "Oeste";
	// }else if( Destino == "Cataratas"){
	// 	mensaje = "Norte";
	// }else if( Destino == "Mar del plata"){
	// 	mensaje = "Este";
	// }else{
	// 	mensaje = "Sur";
	// }



}//FIN DE LA FUNCIÓN
