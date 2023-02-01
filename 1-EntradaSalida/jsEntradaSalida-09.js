/*Liz Carolina Fernandez
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
  // DECLARO VARIABLE
  let sueldo;
  let resultado;
  let aumento;

  // ASIGNO EL VALOR DE LA CAJA DE TEXTO A LA VARIABLE
  sueldo = parseInt(document.getElementById("txtIdSueldo").value);

  // CALCULO EL AUMENTO
  aumento = sueldo * 0.1;

  // OBTENGO EN NUEVO SUELDO
  resultado = sueldo + aumento;

  // EXPONGO EL RESULTADO EN LA CAJA DE TEXTO
  document.getElementById("txtIdResultado").value = resultado;

}
