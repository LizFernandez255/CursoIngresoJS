/* al presionar el botón repetir el pedido de número hasta que ingresemos el 9 */
function mostrar() 
{

	let repetir;

	for (let i = 0 ; i < 10; i++) {

		repetir = prompt("Para cortar ingrese " + 9);
		
		if(	repetir == 9){
			break;
		}

	}

}//FIN DE LA FUNCIÓN