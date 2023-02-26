/* LIZ CAROLINA FERNANDEZ
Debemos lograr tomar un dato por 'ID'b
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
// function mostrar() {
// 	let nombreIngresado;
// 	let mensaje;

// 	nombreIngresado = document.getElementById("txtIdNombre").value;

// 	mensaje = "Vos te llamas " + nombreIngresado;

// 	alert(mensaje);

// }

//------------------------------------------------------------------------------------------------------

/* Ejercicio 3.bis: Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto 
junto al precio aumentado en un 30%. */ 
function mostrar() {
	// DECLARO VARIABLES
	let descripcion;
	let precio;
	let aumento;
	let mensaje;
	let porcentaje;

	porcentaje = 30;

	// TOMO LA DESCRIPCIÓN POR PROMPT
	descripcion = prompt("Ingrese descripción del producto:");

	// ASIGNO EL VALOR DE LA CAJA A LA VARIABLE PRECIO
	precio = parseInt(document.getElementById("txtIdNombre").value);

	// CALCULO AUMENTO
	aumento = precio * porcentaje / 100;

	precioAumento = precio + aumento;

	// CONCATENO MENSAJE
	mensaje = descripcion + " " + precioAumento;

	//  EXPONGO
	alert(mensaje);
}

