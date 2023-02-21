/* al presionar el botón repetir hasta que utilizamos 'BREAK'.*/
function mostrar() 
{

	let repetir;

	for (let i = 0 ; i < 1000; i++) {

		repetir = prompt("Para cortar ingrese 'BREAK'");
		
		if(	repetir == 'BREAK'){
			break;
		}

	}

}//FIN DE LA FUNCIÓN