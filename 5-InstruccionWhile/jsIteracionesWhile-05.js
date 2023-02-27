/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
/* function mostrar() {
	// declaro variable
	let sexo;

	// pido string
	sexo = prompt("b, f ó m .");

	// mientras el sexo no sea igual a f o m, entro al bucle
	while (!(sexo == "f" || sexo == "m" || sexo == "b")) {
		sexo = prompt("Incorrecto. Ingrese f ó m:");

	}
	// expongo el sexo
	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN. */


function mostrar() {
	// declaro variable
	let sexo;

	// pido string
	sexo = prompt("b, f ó m .");

	// mientras sexo de distino de f , m  y b, entra al bucle
	while (sexo != "f" && sexo != "m" && sexo != "b") {
		sexo = prompt("Incorrecto. Ingrese f ó m:");

	}
	// expongo el sexo
	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN.