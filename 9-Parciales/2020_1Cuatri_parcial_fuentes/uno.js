/* Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
 */
function mostrar() {

	let tipoProducto;
	let precioProducto;
	let unidadesProducto;
	let marcaProducto;
	let fabricanteProducto;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let acumuladorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let unidadesCantidadMasBaratoAlcohol;
	let fabricanteMasBaratoAlcochol;
	let precioMasBaratoAlcohol;
	let flagAlcohol;
	let promedioCompra;
	let mayorTipo;

	flagAlcohol = 0;
	flagTipoConMasUnidades = 0;

	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;

	//for para ingresar 5 veces
	for (let i = 0; i < 5; i++) {
		tipoProducto = prompt("Ingrese el nombre del producto: barbijo, jabon o alcohol");
		//mientras el producto sea distinto de barbijo y distinto de jabon y distinto de alcohol. se ingresa al bloque para reportar el error
		while (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") {
			tipoProducto = prompt("Error- Ingrese el nombre del producto: barbijo, jabon o alcohol");
		}

		precioProducto = parseFloat(prompt("Ingrese el precio del producto unitario: "));
		//minetras el precio no sea numero o sea menor a 100 0 mayor a 300, reportar error
		while (isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300) {
			precioProducto = parseFloat(prompt("Error- Ingrese el precio del producto: "));
		}

		unidadesProducto = parseInt(prompt("ingrese la cantidad de unidades del producto: "));
		//mientras la unidad no sea numero o sea menor a 1 o mayor a 1000, se notifica el error
		while (isNaN(unidadesProducto) || unidadesProducto < 1 || unidadesProducto > 1000) {
			unidadesProducto = parseInt(prompt("Error- ingrese la cantidad de unidades del producto: "));
		}
		//ingreser marca y fabricante
		marcaProducto = prompt("Ingrse la marca del producto: ");
		fabricanteProducto = prompt("ingrese el fabricante del producto: ");


		switch (tipoProducto) {
			case "alcohol":
				//si la bandera es cero O si el precio ingresado es menor al precio mas barato de alcohol
				if (flagAlcohol == 0 || precioProducto < precioMasBaratoAlcohol) {          //DEL MAS BARATO DE ALCOHOL
					//guardo fabricante  dentro del fabricante mas barato
					fabricanteMasBaratoAlcochol = fabricanteProducto;                      //FABRICANTE
					//la unidad ingresada se guarda en la unidad mas barata de alcohol
					unidadesCantidadMasBaratoAlcohol = unidadesProducto;                   //LA CANTIDAD DE UNIDADES
					//el precio del producto se guarda en el precio mas barato del alcohol
					precioMasBaratoAlcohol = precioProducto;
					flagAlcohol = 1;
				}
				//se cuenta la cantidad de alcohol
				contadorAlcohol = contadorAlcohol + 1;
				//se suman las unidades
				acumuladorAlcohol = unidadesProducto + acumuladorAlcohol;
				break;
			case "barbijo":
				contadorBarbijo = contadorBarbijo + 1;
				acumuladorBarbijo = acumuladorBarbijo + unidadesProducto;
				break;
			case "jabon":
				contadorJabon = contadorJabon + 1;
				acumuladorJabon = acumuladorJabon + unidadesProducto;
				break;
		}

	} //fin del for

	//si el acumulador de alcohol es mayor al de jabon..
	if (acumuladorAlcohol > acumuladorJabon) {
		//el alcchol es el producto con mas unidades
		mayorTipo = "el alcohol";
		//se saca el promedio
		promedioCompra = acumuladorAlcohol / contadorAlcohol;
		//sino si el acumulador de jabon es menor al acumulador de barbijos
	} else if (acumuladorJabon > acumuladorBarbijo) {
		//el jabon es el producto con mas unidades
		mayorTipo = " el jabon";
		promedioCompra = acumuladorJabon / contadorJabon;
	} else {
		promedioCompra = acumuladorBarbijo / contadorBarbijo;
		mayorTipo = " el barbijo";
	}

	console.log("Cantidad de unidades del mas barato de los alcohol: " + unidadesCantidadMasBaratoAlcohol + ". Su fabricante es: " + fabricanteMasBaratoAlcochol);
	console.log("Unidades totales de jabon: " + acumuladorJabon);
	console.log("El tipo con mas unidades es: " + mayorTipo);
	console.log("El promedio de compra del tipo con mas unidades es: " + promedioCompra);
}

