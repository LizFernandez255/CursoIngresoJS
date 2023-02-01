/*LIZ CAROLINA FERNANDEZ M.
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numUno;
	let numDos;
	let suma;
	let mensaje;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	suma = numUno + numDos;

	mensaje = "La suma es " + suma;

	alert(mensaje);
}

