/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */
function mostrar() {
	let nota;
	let mensaje;

	//Genero el número RANDOM entre 1 y 10 
	nota = Math.floor(Math.random() * 10 + 1);

	//SI LA NOTA ES MAYOR A 8: EXCELENTE
	if (nota > 8) {
		mensaje = "EXCELENTE: " + nota;
		//SINO SI ES MAYOR A 3: APROBÓ
	} else if (nota > 3) {
		mensaje = "APROBÓ: " + nota;
		//SINO: LA PROXIMA...
	} else {
		mensaje = "Vamos, la proxima se puede: " + nota;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN