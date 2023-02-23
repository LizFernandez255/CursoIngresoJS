/* al presionar el botón repetir el pedido de número hasta que ingresemos el 9 */
// function mostrar() 
// {

// 	let repetir;

// 	for (let i = 0 ; i < 10; i++) {

// 		repetir = prompt("Para cortar ingrese " + 9);

// 		if(	repetir == 9){
// 			break;
// 		}

// 	}

// }//FIN DE LA FUNCIÓN

/* For 5 bis, Realizar el programa que permita el ingreso de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m” o "b") de 7 alumnos, informar por console.log: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) La cantidad de alumnos desaprobados (nota < 4) */

function mostrar() {
	let sexoAlumno;
	let notaAlumno;
	let totalNotas;
	let banderaNotaBaja = 0;
	let notaMasBaja;
	let sexoNotaBaja;
	let varMayorSeis;
	let desaprobados;
	let promedio;


	sexoAlumno = prompt("Ingrese un sexo valido: 'f' o 'm' o 'b'");

notaAlumno = parseInt(prompt("Ingrese la nota alumno: "));
while (isNaN(notaAlumno) && notaAlumno < 0 && notaAlumno > 11) {
	notaAlumno = parseInt(prompt("Error. Ingrese nota valida: "));
}
totalNotas = totalNotas + notaAlumno;
if (banderaNotaBaja == 0) {
	notaMasBaja = notaAlumno;
	sexoNotaBaja = sexoAlumno;
	banderaNotaBaja = 1;
} else if (notaAlumno < notaMasBaja) {
	notaMasBaja = notaAlumno;
	sexoNotaBaja = sexoAlumno;
}
if (notaAlumno > 5 && (sexoAlumno == 'm' || sexoAlumno == 'M')) {
	varMayorSeis = varMayorSeis + 1;
}
if (notaAlumno < 4) {
	desaprobados = desaprobados + 1;
}


promedio = totalNotas / i;

console.log("El promedio de las notas totales: " + promedio);
console.log("La nota más baja es " + notaMasBaja + " y el sexo de esa persona es :" + sexoNotaBaja);
console.log("Cantidad de varones que su nota haya sido mayor o igual a 6 es: " + varMayorSeis);
console.log("Cantidad de alumnos desaprobados " + desaprobados);
}