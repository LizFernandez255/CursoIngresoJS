function mostrar()
{
	let numero;
	let max = 10;
	let min = 1;
	let mensaje;

	numero = Math.floor(Math.random() * (max - min + 1) + min);
	
	mensaje = numero;
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN