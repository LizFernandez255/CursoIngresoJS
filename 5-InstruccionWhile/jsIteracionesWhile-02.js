/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar() {
	let i;
	let mensaje;

	mensaje = "";
	i = 10;

	while (i > 0) {
		mensaje = mensaje + i + " ";

		i = i - 1;
	}

	alert(mensaje);
}
