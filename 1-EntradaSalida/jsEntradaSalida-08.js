/*LIZ CAROLINA FERNANDEZ
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
	// DECLARO VARIABLE
	let dividendo;
	let divisor;
	let resto;
	let mensaje;

	// ASIGNO EL VALOR DE LA CAJA DE TEXTO A LA VARIABLE
	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	// CALCULO EL RESTO
	resto = dividendo % divisor;

	// CONCATENO EL MENSAJE
	mensaje = "El resto es " + resto + ".";

	// EXPONGO EL MENSAJE
	alert(mensaje);
}
