/*
	if(condicion)//verdadero o falso (0) true -> verdadero false -> falso
	{
		codigo...;
	}else
	{
		codigo...;		
	}

	operadores aritmeticos:
	+ - * / %
	operadores relacionales o condicionales
	< > <= >= == !=
	operadores logicos
	condicionUno	&&  condicionDos            ||               !
	y logica                                o logica         negacion
	*/

function mostrar() {

	let edad;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad == 15) {

		mensaje = "Niña bonita";

	}

	alert(mensaje);
}
//FIN DE LA FUNCIÓN
