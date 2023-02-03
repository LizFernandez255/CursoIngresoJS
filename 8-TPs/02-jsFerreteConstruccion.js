/*2.	LIZ CAROLINA FERNANDEZ
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    // DECLARO VARIABLE
    let largo;
    let ancho;
    let perimetro;
    let alambre;
    let mensaje;

    // ASIGNO EL VALOR DE CAJA A LA VARIABLE Y PARSEO PARA NUMEROS DECIMALES 
    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    // A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

    // PARA SACAR PERIMETRO: LARGO * 2 + BASE * 2
    perimetro = largo * 2 + ancho * 2;

    // PARA 3 HILOS DE ALAMBRE: PERIMETRO * 3
    alambre = perimetro * 3;

    // CONCATENO
    mensaje = "Necesita " + alambre + " hilos de alambre para el terreno rectangular.";

    alert(mensaje);

}

function Circulo() {
    // DECLARO VARIABLE
    let radio;
    let perimetro;
    let alambre;
    let mensaje;
    let pi;

    pi = 3.14;

    // ASIGNO EL VALOR DE CAJA A LA VARIABLE
    radio = parseFloat(document.getElementById("txtIdRadio").value);

    //B.   mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre. 

    // PARA SACAR EL PERIMETRO DE UN CIRCULO: 2 * pi * RADIO
    perimetro = 2 * pi * radio;

    // PARA 3 HILOS DE ALAMBRE: PERIMETRO * 3
    alambre = perimetro * 3;

    // CONCATENO
    mensaje = "Necesita " + alambre + " hilos de alambre para el terreno circular.";

    alert(mensaje);

}

function Materiales() {
    // DECLARO VARIABLE
    let largo;
    let ancho;
    let area;
    let bolsaCemento;
    let bolsaCal;
    let mensaje;

    // ASIGNO EL VALOR DE CAJA A LA VARIABLE
    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    // C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

    // SACAR LA SUPERFICIE TOTAL(AREA) DEL TERRENO: LARGO * ANCHO
    area = largo * ancho;

    // CALCULO LAS BOLSAS
    bolsaCemento = area * 2;

    bolsaCal = area * 3;

    // CONCATENO
    mensaje = "Necesita " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " bolsas de cal para el contrapiso.";

    alert(mensaje);

}
