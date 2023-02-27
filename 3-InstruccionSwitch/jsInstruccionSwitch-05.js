/* Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.". */

/* function mostrar() {
	let hora;
	let mensaje;
	//tomo la hora
	hora = parseInt(document.getElementById("txtIdHora").value);

	switch (hora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
			break;
	} 
	alert(mensaje);
}*/

function mostrar() {
	let hora;
	let mensaje;
	//tomo la hora
	hora = parseInt(document.getElementById("txtIdHora").value);

	if (!(hora < 7 || hora > 11)) {
		//if (hora > 6 && hora < 12) {
		mensaje = "Es de mañana";
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN
