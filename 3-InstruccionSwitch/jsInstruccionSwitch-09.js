function mostrar() {
	let precio;
	let estacion;
	let destino;
	let precioFinal;
	let porcentaje;

	porcentaje = 0;
	precio = 15000;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;


	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				porcentaje = 20;
			} else if (destino == "Mar del plata") {
				porcentaje = -20;
			} else {
				porcentaje = -10;
			}
			break;
		case "Verano":
			if (destino == "Bariloche") {
				porcentaje = -20;
			} else if (destino == "Mar del plata") {
				porcentaje = 20;
			} else {
				porcentaje = 10;
			}
			break;
		case "Otoño":
		case "Primavera":
			if (destino != "Cordoba") {
				porcentaje = 10;
				break;
			}
			break;
	}
	precioFinal = precio + (precio * porcentaje / 100);
	mensaje = " El precio es $" + precioFinal;

	alert(mensaje);

}//FIN 
