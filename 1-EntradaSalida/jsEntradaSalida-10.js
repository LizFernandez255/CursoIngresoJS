/*LIZ CAROLINA FERNANDEZ
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
// function mostrarAumento() {
// 	// DECLARO VARIABLE
// 	let importe;
// 	let descuento;
// 	let resultado;
// let porcentaje;

// porcentaje = 25;

// 	// ASIGNO EL VALOR DE LA CAJA DE TEXTO A LA VARIABLE
// 	importe = parseInt(document.getElementById("txtIdImporte").value);

// 	// CALCULO EL DESCUENTO
// 	descuento = importe * porcentaje / 100;

// 	// OBTENGO EN NUEVO IMPORTE
// 	resultado = importe - descuento;

// 	// EXPONGO EL RESULTADO EN LA CAJA DE TEXTO
// 	document.getElementById("txtIdResultado").value = resultado;

// }

//-----------------------------------------------------------------------------------------------------------------------

/* Ejercicio 10.bis: Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO" */
function mostrarAumento() {

	// DECLARO VARIABLES
	let importe;
	let porcDescuento;
	let descuento;
	let resultado;

	// ASIGNO EL VALOR DE LA CAJA DE TEXTO A LA VARIABLE
	importe = parseInt(document.getElementById("txtIdImporte").value);

	// PIDO EL PORCENTAJE POR PROMPT
	porcDescuento = parseInt(prompt("Ingrese un porcentaje de descuento: "));

	// CALCULO EL DESCUENTO
	descuento = importe * porcDescuento / 100;

	// SACO EL RESULTADO
	resultado = importe - descuento;

	// ASIGNO EL RESULTADO A LA CAJA DE TEXTO
	document.getElementById("txtIdResultado").value = resultado;


}