/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombrePersona;
	let apellidoPersona;
	let mensaje;

	nombrePersona = prompt("¿Cuál es tu nombre?");
	apellidoPersona = prompt("¿Cuál es tu apeliido?");
	
	mensaje = "Su nombre es " + nombrePersona + " y su apellido " + apellidoPersona;

	alert(mensaje);

	
	




}

