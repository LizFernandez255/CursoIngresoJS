/* al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10. */
/* function mostrar() {
	// declaro variables
	let i;
	let mensaje;

	// inicializo y concateno espacios
	mensaje = " ";
	i = 0;

	// mientras contador sea menor a 10, le voy sumando 1
	while (i < 10) {
		i = i + 1;
		// concateno los numeros con espacios entre ellos
		mensaje = mensaje + i + " ";
	}
	// muestro
	alert(mensaje);
} */
function mostrar() {

	let banderaDelPrimero;
	let edadMax;
	let edadMin;
	let nombre;
	let edad;
	let respuesta;
	let nombreMin;
	let nombreMax;
	let mensajeMax;
	let mensajeMin;

	banderaDelPrimero = true;
	respuesta = "s";
		
		while(respuesta == "s") {
			nombre = prompt("Ingrese su nombre:");
			edad = parseInt(prompt("Ingrese su edad:"));
	
		while (isNaN(edad) || edad < 0 || edad > 103 ) {
			edad = parseInt(prompt("Error. Ingrese su edad:"));

		}

		if (banderaDelPrimero == true) {
			edadMax = edad;
			edadMin = edad;
			nombreMax = nombre;
			nombreMin = nombre;
			banderaDelPrimero = false;
		}
		else if (edadMax < edad) { //numero ingresado < al minimo
			nombreMax = nombre;
			edadMax = edad;
		
		} else if (edadMin > edad ){
			nombreMin = nombre;
			edadMin = edad;

		}

		respuesta = prompt("Desea ingresar mas datos? s/n");
		
	}
	
	mensajeMax = "La edad máxima es " + edadMax + " años de " + nombreMax + ".";
	mensajeMin = "La edad mínima es " + edadMin + " años de " + nombreMin + ".";

	document.write(mensajeMin + " </br>");
	document.write(mensajeMax + " </br>");
	
	
}

























/*
al presionar el botón "mostrar", mostrar 125 repeticiones 
con números ASCENDENTE, desde el 1 al 125. 
a) contar los numeros IMPARES 
b)contar los numeros PARES,
c)el total de la suma de los numeros impares
d)el total de la suma de los numeros pares
e)el mayor de los numeros impares; 
f)el mayor de los numeros; 

function mostrar()
{
	//declaro la varible
	let i;
	let contadorNumeroPares; 
	let contadorNumerosImpares; 
	let acumuladorNumeroImpares;
	let acumuladorNumeroPares;
	let mayorNumeroImpar; 
	let mayorNumero; 

	//inicializar la variable
	i = 10; 
	contadorNumeroPares = 0; 
	contadorNumerosImpares = 0; 
	acumuladorNumeroImpares = 0; 
	acumuladorNumeroPares = 0; 
	mayorNumeroImpar = 1; 
	mayorNumero = 0; 


	while(i < 125)
	{
		if(i%2 != 0) // esto es un impar 
		{       
			//a) contar los numeros IMPARES                    0      
			contadorNumerosImpares = contadorNumerosImpares + 1;
			//c)el total de la suma de los numeros impares
			acumuladorNumeroImpares = acumuladorNumeroImpares + i;
			//e)el mayor de los numeros impares; 
			if(i > mayorNumeroImpar)
			{
				mayorNumeroImpar = i; 
			}
		}
		else
		{	//d)el total de la suma de los numeros pares
			contadorNumeroPares = contadorNumeroPares + 1;
			acumuladorNumeroPares = acumuladorNumeroPares + i;	
		}

		if(i > mayorNumero)
		{
			mayorNumero = i; 
		}

		//modificar la condicion de uno en uno 
		i= i + 1; 

		//moestrar el contador
		console.log(i); 
	}//fin de while



	console.log("La cantidad de numeros impares es: " + contadorNumerosImpares); 
	console.log("La cantidad de numeros pares es: " + contadorNumeroPares); 
	console.log("el total de la suma de los numeros Impares "+acumuladorNumeroImpares); 
	console.log("el total de la suma de los numeros Pares "+acumuladorNumeroPares); 
	console.log("el mayor de los numeros impares "+ mayorNumeroImpar); 
	console.log("el mayor de los numeros es: "+ mayorNumero); 
	
}*/

/* function mostrar()
{
	let edad;

	edad = parseInt(prompt("Ingrese una edad valida 0 a 103"));
	
	while(isNaN(edad) || edad < 0 || edad > 103){

		edad = parseInt(prompt("ERROR: Ingrese una edad valida 0 a 103"));
	}

	alert("Numero correcto");
}//FIN DE LA FUNCIÓN */