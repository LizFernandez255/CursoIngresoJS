function mostrar() {
	let precio = 15000;
	let estacion;
	let destino;
	let precioFinal;
	let aumento = 0;
	let descuento = 0;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	/*switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				aumento = precio * .20; // 0.2
			} else if (destino == "Mar del plata") {
				descuento = precio * .20;
			} else {
				descuento = precio * .10; //0.1
			}
			break;
		case "Verano":
			if (destino == "Bariloche") {
				descuento = precio * .20;
			} else if (destino == "Mar del plata") {
				aumento = precio * .20;
			} else {
				aumento = precio * .10;
			}
			break;
		case "Otoño":
		case "Primavera":
			if (destino != "Cordoba") {
				aumento = precio * .10;
				break;

			}
	}
	precioFinal = precio + aumento - descuento;

	alert(" El precio es $" + precioFinal);*/

	// AHORA LO HACEMOS DE NUEVO PERO SON SWITH "DESTINO"

	switch (destino) {
		case "Bariloche":
			if (estacion == "Invierno") {
				aumento = precio * .20;       // precioFinal = precio *1.2 (Esto es igual y da el aumento directo, sirve mientras no se declare let aum y des)
			} else if (estacion == "Verano") {
				descuento = precio * .20;
			} else {
				aumento = precio * .10;
			}
			break;
		case "Mar del plata":
			if (estacion == "Invierno") {
				descuento = precio * .20;
			} else if (estacion == "Verano") {
				aumento = precio * .20;
			} else {
				aumento = precio * .10;
			}
			break;
		case "Cataratas":
			if (estacion == "Invierno") {
				descuento = precio * .10;
			} else {
				aumento = precio * .10;
			}
		case "Cordoba":
			if (estacion == "Invierno") {
				descuento = precio * .10;
			} else if (estacion == "Verano") {
				aumento = precio * .10;
			} else {
				precioFinal = precio;
			}
			break;
	}
	precioFinal = precio + aumento - descuento;

	alert(" El precio es $" + precioFinal);

}//FIN 
