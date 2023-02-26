/* Al ingresar una edad menor a 18 años
y un estado civil distinto a "Soltero",
  mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */
/* function mostrar() {
	//DECLARO VARIABLES
	let edad;
	let estadoCivil;
	let mensaje;

	//ASIGNOS LOS DATOS INGRESADOS A LAS VARIABLES
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;   //RECORDAR QUE SI NO ES UN VALOR NUMERCO, NO VA PARSEINT

	//SI LA EDAD ES MENOR A 18 AÑOS Y EL ESTADO CIVIL NO ES SOLTERO: EJECUTAR MENSAJE
	//15:  V      &&     F               = F
	if (edad < 18 && estadoCivil != "Soltero") {
		mensaje = "Es muy pequeño para NO ser soltero";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN */

function mostrar() {
	//DECLARO VARIABLES
	let edad;
	let estadoCivil;
	let mensaje;

	//ASIGNOS LOS DATOS INGRESADOS A LAS VARIABLES
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;   //RECORDAR QUE SI NO ES UN VALOR NUMERCO, NO VA PARSEINT

	//SI LA EDAD NO ES MAYOR A 18 AÑOS O EL ESTADO CIVIL NO ES IGUAL A SOLTERO: EJECUTAR MENSAJE
	//15.S:   F     ||   V           = V =!=> F
	//15.D:   F     ||   F           = F =!=> V 
	//35.S:   V     ||   V           = V =!=> F
	//35.D    V     ||   F           = V =!=> F
	if (!(edad > 17 || estadoCivil == "Soltero")) {
		mensaje = "Es muy pequeño para NO ser soltero";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN

