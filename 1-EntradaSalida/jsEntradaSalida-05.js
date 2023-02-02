/*LIZ CAROLINA FERNANDEZ
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
// function mostrar()
// {	
// 	let nombre;
// 	let edad;
// 	let mensaje;

// 	nombre = document.getElementById("txtIdNombre").value;
// 	edad = document.getElementById("txtIdEdad").value;

// 	mensaje = "Usted se llama " + nombre + " y tiene " + edad + " años. "

// 	alert(mensaje);
// }

function mostrar() {

	// DECLARO VARIABLE
	let apellido;
	let nombre;
	let edad;
	let mensaje;

	// PIDO APELLIDO Y LO ASIGNO A LA VARIABLE
	apellido = prompt("Ingrese su apellido: ");

	// ASIGNO EL VALOR DE LAS CAJAS A LAS VARIABLES
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	// CONCATENO EL MENSAJE
	mensaje = apellido + "," + " usted se llama " + nombre + " y tiene " + edad + " años.";

	// EXPONGO
	alert(mensaje);


}

