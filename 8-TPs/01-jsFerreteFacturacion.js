/*1.	LIZ CAROLINA FERNANDEZ M.
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {

    // DECLARO VARIABLES
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let mensaje;

    // ASIGNO EL VALOR DE LAS CAJAS A LAS VARIABLES
    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    // CALCULO LA SUMA
    suma = precioUno + precioDos + precioTres;

    // CONCATENO MENSAJE
    mensaje = "La suma es " + suma;

    // EXPONGO MENSAJE
    alert(mensaje);
}
function Promedio() {
    let precioUno;
    let precioDos;
    let precioTres;
    let promedio;
    let mensaje;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    promedio = (precioUno + precioDos + precioTres) / 3;

    mensaje = "El promedio es " + promedio;

    alert(mensaje);

}
function PrecioFinal() {
    let precioUno;
    let precioDos;
    let precioTres;
    let importe;
    let iva;
    let preciofinal;
    let mensaje;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    importe = precioUno + precioDos + precioTres;

    iva = importe * 0.21;

    preciofinal = importe + iva;

    mensaje = "El precio final es " + preciofinal;

    alert(mensaje);
}
