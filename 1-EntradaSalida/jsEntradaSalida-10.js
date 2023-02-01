/*LIZ CAROLINA FERNANDEZ
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	// DECLARO VARIABLE
	let importe;
	let descuento;
	let resultado;

	// ASIGNO EL VALOR DE LA CAJA DE TEXTO A LA VARIABLE
	importe = parseInt(document.getElementById("txtIdImporte").value);

	// CALCULO EL DESCUENTO
	descuento = importe * 0.25;

	// OBTENGO EN NUEVO IMPORTE
	resultado = importe - descuento;

	// EXPONGO EL RESULTADO EN LA CAJA DE TEXTO
	document.getElementById("txtIdResultado").value = resultado;

}
