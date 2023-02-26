/* Al ingresar una edad
debemos informar
  si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */
function mostrar() {
	//DECLARO VARIABLES
	let edad;
	let mensaje;

	//ASIGNO DE LA EDAD INGRESADA A LA VARIABLE
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//SI LA EDAD ES MAYOR A 17 "ES ADULTO".
	//SINO SI LA EDAD ES MENOR A 13 "ES NIÑO"
	//SINO "ES ADOLESCENTE"
	if (edad > 17) {
		mensaje = "Es adulto.";
	} else if (edad < 13) {
		mensaje = "Es niño.";
	} else {
		mensaje = "Es adolescente.";
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN 