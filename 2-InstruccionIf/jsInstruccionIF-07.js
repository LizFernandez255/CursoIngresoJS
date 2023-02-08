function mostrar() {
	let edad;
	let estadoCivil;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;   //RECORDAR QUE SI NO ES UN VALOR NUMERCO, NO VA PARSEINT

	if (edad <= 17 && estadoCivil != "Soltero") {

		mensaje = "Es muy pequeño para NO ser soltero";

		alert(mensaje);

	}


}//FIN DE LA FUNCIÓN