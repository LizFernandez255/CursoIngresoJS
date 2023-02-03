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

    // EXPONGO
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
    let IVA;
    let preciofinal;
    let mensaje;

    IVA = 21;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    importe = precioUno + precioDos + precioTres;

    preciofinal = importe + importe * IVA / 100;

    mensaje = "El precio final es " + preciofinal;

    alert(mensaje);
//HEAD
    console.log(mensaje);
}

// function Sumar () 
// {DE LA PROFE
//     //A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
//     let precioUnoTexto; 
//     let precioDosTexto; 
//     let precioTresTexto; 
//     let precioUnoNumero; 
//     let precioDosNumero; 
//     let precioTresNumero; 
//     let sumaPrecios; 
//     let precioUno; 

//     //asignado a mis variables lo que ingreso el usuario por teclado
//     precioUnoTexto = document.getElementById("txtIdPrecioUno").value;//"10"
//     precioDosTexto = document.getElementById("txtIdPrecioDos").value;//"100"
//     precioTresTexto = document.getElementById("txtIdPrecioTres").value; //"20"

//     //parseo de texto a numero
//     precioUnoNumero = parseInt(precioUnoTexto); 
//     precioDosNumero = parseInt(precioDosTexto); 
//     precioTresNumero = parseInt(precioTresTexto); 

//     // sumaPrecios = precioUnoTexto + precioDosTexto + PrecioTresTexto; 1010020
//     sumaPrecios = precioUnoNumero + precioDosNumero + precioTresNumero; 

//     alert("La suma total de precios es: " + sumaPrecios); 
//     console.log("La suma total de precios es: " + sumaPrecios);

//     // uso una misma variable y piso el valor
//     // precioUno = document.getElementById("txtIdPrecioUno").value;
//     // precioUno = parseInt(precioUno); 

//     //solo es una linea de codigo pido el numero y lo parseo. 
//     //precioUno = parseInt(document.getElementById("txtIdPrecioUno").value)

//     //precioUno = parseInt(prompt("Que precio queres poner? "))

//     //prompt("precio") = parseInt(numero) NO ANDAAAAA

	
// }
// function Promedio () 
// {
//     //B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
    
//     //promedio = suma total de los ingresos,  dividido la cantidad de veces ingresado

//     let precioUnoTexto; 
//     let precioDosTexto; 
//     let precioTresTexto; 
//     let precioUnoNumero; 
//     let precioDosNumero; 
//     let precioTresNumero; 
//     let sumaPrecios; 
//     let promedio; 

//     //asignado a mis variables lo que ingreso el usuario por teclado
//     precioUnoTexto = document.getElementById("txtIdPrecioUno").value;//"10"
//     precioDosTexto = document.getElementById("txtIdPrecioDos").value;//"100"
//     precioTresTexto = document.getElementById("txtIdPrecioTres").value; //"20"

//     //parseo de texto a numero
//     precioUnoNumero = parseInt(precioUnoTexto); 
//     precioDosNumero = parseInt(precioDosTexto); 
//     precioTresNumero = parseInt(precioTresTexto); 

//     // sumaPrecios = precioUnoTexto + precioDosTexto + PrecioTresTexto; 1010020
//     sumaPrecios = precioUnoNumero + precioDosNumero + precioTresNumero; 

//     promedio = sumaPrecios / 3; 

//     alert("El promedio de los precios es: " + promedio); 
//     console.log("El promedio de los precios es: " + promedio);

// }

// function PrecioFinal () 
// {
//     //escope de la variable: la variable vive y muere entre las llaves que se la declara
//     //C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

//     /* 
       
      
      
       
//     */

//         let precioUnoTexto; 
//         let precioDosTexto; 
//         let precioTresTexto; 
//         let precioUnoNumero; 
//         let precioDosNumero; 
//         let precioTresNumero; 
//         let sumaPrecios; 
//         let precioFinal; 
//         let IVA; 

//         IVA = 21; 

//         // 1) ingresar los precios hecho 
//         //asignado a mis variables lo que ingreso el usuario por teclado
//         precioUnoTexto = document.getElementById("txtIdPrecioUno").value;//"10"
//         precioDosTexto = document.getElementById("txtIdPrecioDos").value;//"100"
//         precioTresTexto = document.getElementById("txtIdPrecioTres").value; //"20"
    
//         //  2) parsear los precios hecho 
//         //parseo de texto a numero
//         precioUnoNumero = parseInt(precioUnoTexto); 
//         precioDosNumero = parseInt(precioDosTexto); 
//         precioTresNumero = parseInt(precioTresTexto); 
//         //  3) sumar los tres precios hecho 
//         sumaPrecios = precioUnoNumero + precioDosNumero + precioTresNumero; 

//         // 4) agregar el 21 % NO ESTA HECHO 
        
//         // forma larga 
//         // precioIVA = sumaPrecios * IVA / 100; 
//         // precioFinal = sumaPrecios + precioIVA; 
//                            //30 + (30*21/100) 
//         //otra forma; 
//         //precioFinal = sumaPrecios *( 1 + IVA/100); 

//         precioFinal =  sumaPrecios + sumaPrecios * IVA / 100; 
        
//         alert("El precio fina con el IVA del 21% es: " + precioFinal); 
//         console.log("El precio fina con el IVA del 21% es: " + precioFinal);
    
// }


// 5fef26c524b7e000a45ca87b26f8666a325f9246
