/* Al ingresar una edad debemos informar si la persona es adolescente,
 edad entre 13 y 17 años (inclusive) . */
function mostrar() {
	//DECLARO VARIABLES
	let edad;
	let mensaje;

	// GUARDO LA EDAD INGRESADA EN LA VARIABLE CORRESPONDIENTE
	edad = parseInt(document.getElementById("txtIdEdad").value);

	// SI LA EDAD INGRESADA ES MAYOR A 12 Y MENOR A 18: MUESTRO MENSAJE.
	//15:  V      &&    V     = V ( ENTRA AL BLOQUE )
	//28   V      &&    F     = F ( SALE DEL BLOQUE )
	if (edad > 12 && edad < 18) {

		mensaje = "Es adolescente.";
	}

	alert(mensaje);
}
//FIN DE LA FUNCIÓN

/* function mostrar() {
	//DECLARO VARIABLES
	let edad;
	let mensaje;

	// GUARDO LA EDAD INGRESADA EN LA VARIABLE CORRESPONDIENTE
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//SI LA EDAD INGRESADA NO ES MENOR A 12 AÑOS O MAYOR A 18 AÑOS: MUESTRO EL MENSAJE
	//15   F       ||    F    = F | F.! = V ( ENTRA AL BLOQUE)
	//28   F       ||    V    = V | V.! = F ( NO ENTRA )
	//11   V       ||    F    = V | V.! = F ( NO ENTRA ) 
	
	if(!(edad < 13 || edad > 17)) {

		mensaje = "Es adolescente.";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓ */