/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	// declaro variable
	let sexo;

	// pido string
	sexo = prompt("ingrese f ó m .");

	// while (sexo != "f" && sexo != "m") {
	// mientras el sexo no sea igual a f o m, entro al bucle
	while (!(sexo == "f" || sexo == "m")) {
		sexo = prompt("Incorrecto. Ingrese f ó m:");

	}
	// expongo el sexo
	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN