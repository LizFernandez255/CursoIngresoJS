/* al presionar el botón repetir hasta que utilizamos 'BREAK'.*/
function mostrar() {

	let repetir;

	//SI NO UTILIZAMOS EL BREAK, SE VA A REPETIR HASTA 1000 VECES 
	for (let i = 0; i < 1000; i++) {

		repetir = prompt("Para cortar ingrese 'BREAK'");

		if (repetir == 'BREAK') {
			break;
		}

	}

}//FIN DE LA FUNCIÓN