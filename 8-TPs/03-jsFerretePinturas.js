/*3.	LIZ CAROLINA FERNANDEZ
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
(32 °F - 32) x 5/9
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
(0 °C x 9/5) + 32
*/
function FahrenheitCentigrados() {
    // DECLARO VARIABLES
    let fahrenheit;
    let centigrados;
    let mensaje;

    //ASIGNO EL VALOR DE LA CAJA A LA VARIABLE  
    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    // CALCULO LOS CENTIGRADOS
    centigrados = (fahrenheit - 32) * 5 / 9;

    // CONCATENO
    mensaje = fahrenheit + " Fahrenheit son " + centigrados + ".";

    alert(mensaje);

}

function CentigradosFahrenheit() {
    let centigrados;
    let fahrenheit;
    let mensaje;

    centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);

    fahrenheit = (centigrados * 9 / 5) + 32;

    mensaje = centigrados + " Centigrados son " + fahrenheit + ".";

    alert(mensaje);

}
