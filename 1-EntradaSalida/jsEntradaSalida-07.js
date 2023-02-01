/*LIZ CAROLINA FERNANDEZ
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
	// DECLARO VARIABLE
	let numUno;
	let numDos;
	let suma;
	let mensaje;

	// ASIGNO EL VALOR DE LA CAJA DE TEXTO A LA VARIABLE
	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	// OPERO
	suma = numUno + numDos;

	// CONCATENO EL MENSAJE
	mensaje = "La suma es " + suma;
	
	// LO EXPONGO
	alert(mensaje);

}

function restar() {
	let numUno;
	let numDos;
	let resta;
	let mensaje;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resta = numUno - numDos;

	mensaje = "La resta es " + resta;

	alert(mensaje);

}

function multiplicar() {
	let numUno;
	let numDos;
	let multiplicar;
	let mensaje;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	multiplicar = numUno * numDos;

	mensaje = "El resultado es " + multiplicar;

	alert(mensaje);

}

function dividir() {
	let numUno;
	let numDos;
	let dividir;
	let mensaje;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	dividir = numUno / numDos;

	mensaje = "El resultado es " + dividir;

	alert(mensaje);

}



