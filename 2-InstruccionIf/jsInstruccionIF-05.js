/* Al ingresar una edad solo debemos informar si la persona NO es adolescente. */
function mostrar() {
	//DECLARO VARIABLES
	let edad;
	let mensaje;

	//GUARDO LA EDAD INGRESADA EN LA VARIABLE
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//SI LA EDAD INGRESADA ES MENOR A 13 O MAYOR A 17 AÑOS: EJECUTO MENSAJE
	//12   V      ||   F       =  V
	//20   F      ||   V       =  V         SE EJECUTA EL MENSAJE
	if (edad < 13 || edad > 17) {
		mensaje = "NO es adolescente.";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN

/* function mostrar() {
	//DECLARO VARIABLES
	let edad;
	let mensaje;

	//GUARDO LA EDAD INGRESADA EN LA VARIABLE
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//SI LA EDAD INGRESADA NO ES MAYOR A 13 Y MENOR A 17 AÑOS: EJECUTO MENSAJE
	//18     V      &&     F       =  F
	//12     F      &&     V       =  F  
	//20     V      &&     F       =  F ( F.!)= V         SE EJECUTA EL MENSAJE
	if (!(edad > 12 && edad < 18)) {
		mensaje = "NO es adolescente.";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN */