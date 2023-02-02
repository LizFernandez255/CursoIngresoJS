/* LIZ CAROLINA FERNANDEZ
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
// function mostrar() {
// 	let nombreIngresado;
// 	let mensaje;

// 	nombreIngresado = document.getElementById("txtIdNombre").value;

// 	mensaje = "Vos te llamas " + nombreIngresado;

// 	alert(mensaje);

// }

function mostrar() {
	// DECLARO VARIABLES
	let descripcion;
	let precio;
	let aumento;
	let mensaje;

	// TOMO LA DESCRIPCIÓN POR PROMPT
	descripcion = prompt("Ingrese descripción del producto:");

	// ASIGNO EL VALOR DE LA CAJA A LA VARIABLE PRECIO
	precio = parseInt(document.getElementById("txtIdNombre").value);

	// CALCULO AUMENTO
	aumento = precio * .30;

	// APLICO AUMENTO
	precioAumentado = precio + aumento;

	// CONCATENO MENSAJE
	mensaje = descripcion + " " + precioAumentado;

	//  EXPONGO
	alert(mensaje);
}

