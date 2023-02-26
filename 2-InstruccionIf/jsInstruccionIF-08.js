/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.' */
/* function mostrar()
{
	//DECLARO VARIABLES
	let edad;
	let estadoCivil;
	let mensaje;

	//ASIGNO LOS DATOS A LAS VARIABLES
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	//SI LA EDAD ES MAYOR A 17 AÑOS Y EL ESTADO CIVIL ES SOLTERO: EJECUTAR MENSAJE
	//20.S:  V    &&      V  =   V
	//15.S:  F    &&      V  =   F
	//50:D:  V   &&       F  =   F
	if ( edad > 17 && estadoCivil == "Soltero") {
		mensaje = "Es soltero y no es menor.";
	}
	
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN */

function mostrar()
{
	//DECLARO VARIABLES
	let edad;
	let estadoCivil;
	let mensaje;

	//ASIGNO LOS DATOS A LAS VARIABLES
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	//SI LA EDAD NO ES MENOR A 17 AÑOS O EL ESTADO CIVIL NO ES DISTINTO DE SOLTERO: EJECUTAR MENSAJE
	//20.S:  F    ||      F  =   F =!=> V
	//15.S:  V    ||      F  =   V =!=> F
	//50:D:  F    ||      V  =   V =!=> F
	if (!( edad < 18 || estadoCivil != "Soltero")) {
		mensaje = "Es soltero y no es menor.";
	}
	
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN