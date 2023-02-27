/* En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */
function mostrar() {
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let banderaTemperatura;
	let respuesta;
	let nombreMaxTemperatura;
	let contadorViudos;
	let contadorHombreViudo;
	let contadorHombreSoltero;
	let acumEdadHombreSoltero;
	let promedioEdadHombreSoltero;
	let contMayoresTemperaturaAlta;


	banderaTemperatura = true;
	respuesta = "s";
	contadorViudos = 0;
	contadorHombreViudo = 0;
	contadorHombreSoltero = 0;
	acumEdadHombreSoltero = 0;
	contMayoresTemperaturaAlta = 0;

	while (respuesta == "s" || respuesta == "S") {

		nombre = prompt("Ingrese su nombre: ");

		edad = parseInt(prompt("Ingrese su edad: "));
		while (isNaN(edad) || edad < 0 || edad > 120) {
			edad = prompt("Error, Ingrese su edad: ");
		}
		sexo = prompt("Ingrese 'F' para femenino o 'M' para masculino:");
		while (!(sexo == "F" || sexo == "M" || sexo == "f" || sexo == "m")) {
			sexo = prompt("Error. Ingrese 'F' para femenino o 'M' para masculino: ");
		}
		estadoCivil = prompt("Ingrese 'S' para soltero, 'C' para casado o 'V' para viudo:");
		while (!(estadoCivil == "S" || estadoCivil == "C" || estadoCivil == "V" || estadoCivil == "s" || estadoCivil == "c" || estadoCivil == "v")) {
			estadoCivil = prompt("Error. Ingrese 'S' para soltero, 'C' para casado o 'V' para viudo:");
		}

		temperatura = parseInt(prompt("Ingrese su temperatura corporal: "));
		while (isNaN(temperatura) || temperatura < 35 || temperatura > 42) {
			temperatura = parseInt(prompt("Error. Ingrese su temperatura corporal de 35 a 42: "));
		}

		if (banderaTemperatura == true) {
			nombreMaxTemperatura = nombre;
			temperaturaNombreMax = temperatura;
			banderaTemperatura = false;
		}
		// a) El nombre de la persona con mas temperatura.
		if (temperaturaNombreMax < temperatura) {
			nombreMaxTemperatura = nombre;
		}

		// d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if (edad > 59 && temperatura > 37) {
			contMayoresTemperaturaAlta = contMayoresTemperaturaAlta + 1;
		}

		switch (estadoCivil) {
			// c) La cantidad de hombres que hay solteros o viudos.
			case 'S':
			case 's':
				if (sexo == "M" || sexo == "m") {
					contadorHombreSoltero = contadorHombreSoltero + 1;
					// e) El promedio de edad entre los hombres solteros.
					acumEdadHombreSoltero = acumEdadHombreSoltero + edad;
				}
				break;
			// b) Cuantos mayores de edad estan viudos
			case 'V':
			case 'v':
				if (edad > 17) {
					contadorViudos = contadorViudos + 1;
					// c) La cantidad de hombres que hay solteros o viudos.
					if (sexo == "M" || sexo == "m") {
						contadorHombreViudo = contadorHombreViudo + 1;
					}
					break;
				}
		}
		respuesta = prompt("Desea ingresar mas datos? s/n");
	}

	promedioEdadHombreSoltero = acumEdadHombreSoltero / contadorHombreSoltero;

	document.write("Nombre de la persona con mayor temperatura: " + nombreMaxTemperatura + " </br> ");
	document.write(contadorViudos + " mayores de edad viudos. " + " </br> ");
	document.write(contadorHombreSoltero + " hombres solteros y " + contadorHombreViudo + " hombres viudos " + " </br> ");
	document.write(contMayoresTemperaturaAlta + " persona de la tercera edad con temperatura mayor a 38. " + " </br> ");
	document.write(promedioEdadHombreSoltero + " es el promedio de edad de los hombres solteros. " + " </br> ");
}
