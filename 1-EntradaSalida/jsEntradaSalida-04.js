/* LIZ CAROLINA FERNANDEZ
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
	let datoIngresado;

	datoIngresado = prompt("Ingresar dato");

	if (datoIngresado == "dato") {
		document.getElementById("txtIdNombre").value = "datazo";
	} else {
		document.getElementById("txtIdNombre").value = datoIngresado;
	}
}
