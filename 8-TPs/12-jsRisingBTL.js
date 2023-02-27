/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
*/
function ComenzarIngreso() {
	let edad;
	let sexo;
	let estadoCivil;
	let sueldo;
	let legajo;
	let nacionalidad;

	// A.	Edad, entre 18 y 90 años inclusive.
	edad = parseInt(prompt("Ingrese su edad: "));
	while (isNaN(edad) || edad < 18 || edad > 90) {
		edad = parseInt(prompt("Su edad debe ser entre 18 y 90 años. Vuelva a ingresar: "));
	}

	// B.	Sexo, “M” para masculino y “F” para femenino
	sexo = prompt("Ingrese 'M' para sexo masculino y 'F' para femenino");
	while (!(sexo == "M" || sexo == "m" || sexo == "F" || sexo == "f")) {
		sexo = prompt("Error. Ingrese 'M' para sexo masculino y 'F' para femenino");
	}
	switch (sexo) {
		case "M":
		case "m":
			sexo = "Masculino";
			break;
		default:
			sexo = "Femenino";
	}

	// C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	estadoCivil = parseInt(prompt("Ingrese 1-para soltero, 2-para casados, 3-para divorciados o 4-para viudos"));
	while (isNaN(estadoCivil) || estadoCivil < 1 || estadoCivil > 4) {
		estadoCivil = parseInt(prompt("Error. Ingrese 1-para soltero, 2-para casados, 3-para divorciados o 4-para viudos"));
	}
	if (estadoCivil == 1) {
		estadoCivil = "Soltero";
	} else if (estadoCivil == 2) {
		estadoCivil = "Casado";
	} else if (estadoCivil == 3) {
		estadoCivil = "Divorciado";
	} else {
		estadoCivil = "Viudo";
	}

	// D.	Sueldo bruto, no menor a 8000.
	sueldo = parseInt(prompt("Ingrese sueldo bruto, no menor a $8000: "));
	while (isNaN(sueldo) || sueldo < 8000) {
		sueldo = parseInt(prompt("Error. Ingrese sueldo bruto, no menor a $8000: "));
	}

	// E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
	legajo = parseInt(prompt("Ingrese número de legajo, numérico de 4 cifras, sin ceros a la izquierda:"));
	while (isNaN(legajo) || legajo < 1000 || legajo > 9999) {
		legajo = parseInt(prompt("Error. Ingrese número de legajo, numérico de 4 cifras, sin ceros a la izquierda:"));
	}

	// F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
	nacionalidad = prompt('Ingrese en Nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados');
	while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N" && nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n") {
		nacionalidad = prompt('Error. Ingrese en Nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados');
	}
	switch (nacionalidad) {
		case "A":
		case "a":
			nacionalidad = "Argentina";
			break;
		case "E":
		case "e":
			nacionalidad = "Extranjero";
			break;
		default:
			nacionalidad = "Nacionalizado";
	}

	document.getElementById("txtIdEdad").value = edad + " años";
	document.getElementById("txtIdSexo").value = "Sexo: " + sexo;
	document.getElementById("txtIdEstadoCivil").value = "Estado civil: " + estadoCivil;
	document.getElementById("txtIdSueldo").value = "Sueldo bruto: " + sueldo;
	document.getElementById("txtIdLegajo").value = "Número de legajo: " + legajo;
	document.getElementById("txtIdNacionalidad").value = "Nacionalidad: " + nacionalidad;


}
