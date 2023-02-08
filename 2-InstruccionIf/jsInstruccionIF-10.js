function mostrar() {
	let nota;
    let mensaje;
	
	//Genero el número RANDOM entre 1 y 10 
	nota = Math.floor(Math.random() * 10 + 1);

	if (nota >= 9) {
		mensaje = "EXCELENTE: " + nota;
	} else if (nota >= 4) {
		mensaje = "APROBÓ: " + nota;
	} else {
		mensaje = "Vamos, la proxima se puede: " + nota;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN