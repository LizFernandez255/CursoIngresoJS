/* Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base,
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

En Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

En Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

En Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento */

/* function mostrar() {
	let precio;
	let estacion;
	let destino;
	let precioFinal;
	let porcentaje;

	porcentaje = 0;
	precio = 15000;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	//--------------------------------------------SWITCH  E  IF-----------------------------------------------------------------------------------
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

}//FIN  */

//--------------------------------------------SWITCH -----------------------------------------------------------------------------------
/* function mostrar() {
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
		switch (destino) {
			case "Bariloche":
				porcentaje = 20;
				break;
			case "Mar del Plata":
				porcentaje = -20;
				break;
			default:
				porcentaje = -10;
		}
		break;
	case "Verano":
		switch (destino) {
			case "Bariloche":
				porcentaje = -20;
				break;
			case "Mar del Plata":
				porcentaje = 20;
				break;
			default:
				porcentaje = 10;
		}
		break;
	case "Otoño":
	case "Primavera":
		switch (destino) {
			case "Cordoba":
				mensaje = precio;
				break;
			default:
				porcentaje = 10;
		}

}
precioFinal = precio + (precio * porcentaje / 100);
mensaje = " El precio es $" + precioFinal;

alert(mensaje);

}//FIN  */

//--------------------------------------------IF-----------------------------------------------------------------------------------
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

	if (estacion == "Invierno") {
		if (destino == "Bariloche") {
			porcentaje = 20;
		} else if (destino == "Mar del plata") {
			porcentaje = -20;
		} else {
			porcentaje = -10;
		}
	} else if (estacion == "Verano") {
		if (destino == "Bariloche") {
			porcentaje = -20;
		} else if (destino == "Mar del plata") {
			porcentaje = 20;
		} else {
			porcentaje = 10;
		}
	} else {
		if (destino != "Cordoba") {
			porcentaje = 10;
		}
	}
	precioFinal = precio + (precio * porcentaje / 100);
	mensaje = " El precio es $" + precioFinal;

	alert(mensaje);

}//FIN 
