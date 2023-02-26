/* Al presionar el Botón,
 mostrar un número Random del 1 al 10 inclusive */
function mostrar()
{
	let numero;
	let mensaje;

	numero = Math.floor(Math.random() * 10 + 1);
	
	mensaje = numero;
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN