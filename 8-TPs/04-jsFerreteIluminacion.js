/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

*/
function CalcularPrecio() {

    // DECLARO VARIABLES
    let cantLamp;
    let marca;
    let porcentaje;
    let aumento;
    let precioBase;
    let precio;
    let precioFinal;
    let precioImpuesto;
    let impuesto;
    let mensaje;
    let mensajePImpuesto;

    // INICIALIZO VARIABLES FIJAS
    aumento = 10;
    precioBase = 35;
    porcentaje = 0;

    // TOMO LOS DATOS DE LAS CAJAS
    cantLamp = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    // CALCULO EL PRECIO INICIAL
    precio = cantLamp * precioBase;

    switch (marca) {
        case "ArgentinaLuz":
            switch (cantLamp) {
                case 1:
                case 2:
                    porcentaje = 0;
                    break;
                case 5:
                    porcentaje = -40;
                    break;
                case 4:
                    porcentaje = -25;
                    break;
                case 3:
                    porcentaje = -15;
                    break;
                default:
                    porcentaje = -50;
                    break;
            }
            break;
        case "FelipeLamparas":
            switch (cantLamp) {
                case 1:
                case 2:
                    porcentaje = 0;
                    break;
                case 5:
                    porcentaje = -30;
                    break;
                case 4:
                    porcentaje = -25;
                    break;
                case 3:
                    porcentaje = -10;
                    break;
                default:
                    porcentaje = -50;
                    break;
            }
            break;
        case "JeLuz":
        case "HazIluminacion":
        case "Osram":
            switch (cantLamp) {
                case 1:
                case 2:
                    porcentaje = 0;
                    break;
                case 5:
                    porcentaje = -30;
                    break;
                case 4:
                    porcentaje = -20;
                    break;
                case 3:
                    porcentaje = -5;
                    break;
                default:
                    porcentaje = -50;
                    break;
            }
    }
    // CALCULO EL PRECIO FINAL CON DESCUENTO
    precioFinal = precio + (precio * porcentaje / 100);

    // CONCATENO MENSAJE PARA PRECIO FINAL CON DESCUENTO
    mensaje = "$" + precioFinal;

    // CONDICION SI EL PRECIO FINAL SUPERA LOS $120
    if (precioFinal > 119) {
        impuesto = precioFinal * aumento / 100;
        precioImpuesto = precioFinal + aumento;
        mensajePImpuesto = "Usted pago $" + precioImpuesto + " de IIBB., siendo $" + impuesto + " el impuesto que se pagó.";

        alert(mensajePImpuesto);
    }


    // EXPONGO LOS RESULTADOS EN LA CAJA DE PRECIOS CON DESCUENTO
    document.getElementById("txtIdprecioDescuento").value = mensaje;






}



//------------------------------------------------------------------------------------------------------------------------------
// switch (cantLamp) {
    //     case 1:
    //     case 2:
    //         porcentaje = 0;
    //         break;
    //     case 5:
//         if (marca == "ArgentinaLuz") {
    //             porcentaje = 40;
//         } else {
//             porcentaje = 30;
//         }
//         break;
//     case 4:
//         if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
//             porcentaje = 25;
//         } else {
//             porcentaje = 20;
//         }
//         break;
//     case 3:
//         if (marca == "ArgentinaLuz") {
//             porcentaje = 15;
//         } else if (marca == "FelipeLamparas") {
//             porcentaje = 10;
//         } else {
//             porcentaje = 5;
//         }
//         break;
//         default:
//             porcentaje = 50;
//             break;
//         }

//-----------------------------------------------------------------------------------------------------------------
//     // AGREGO PORCENTAJES SEGÚN CONDICIONES
//     if (cantLamp > 5) {
    //         porcentaje = 50;
    //     } else if (cantLamp == 5) {
        //         if (marca == "ArgentinaLuz") {
            //             porcentaje = 40;
            //         } else {
                //             porcentaje = 30;
                //         }
                //     } else if (cantLamp == 4) {
                    //         if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                        //             porcentaje = 25;
                        //         } else {
                            //             porcentaje = 20;
                            //         }
                            //     } else if (cantLamp == 3) {
                                //         if (marca == "ArgentinaLuz") {
                                    //             porcentaje = 15;
                                    //         } else if (marca == "FelipeLamparas") {
                                        //             porcentaje = 10;
                                        //         } else {
//             porcentaje = 5;
//         }
//     } else {
//         porcentaje = 0;
//     }
// -----------------------------------------------------------------------------------------------------------------
// if (cantLamp > 5) {
//     porcentaje = 50;
//         } else {
//             switch (marca) {
//                 case "ArgentinaLuz":
//                     if (cantLamp == 5) {
//                         porcentaje = 40;
//                     } else if (cantLamp == 4) {
//                         porcentaje = 25;
//                     } else if (cantLamp == 3) {
//                         porcentaje = 15;
//                     }
//                     break;
//                 case "FelipeLamparas":
//                     if (cantLamp == 4) {
//                         porcentaje = 25;
//                     } else if (cantLamp == 3) {
//                         porcentaje = 10;
//                     }
//                     break;
//                 case "JeLuz":
//                 case "HazIluminacion":
//                 case "Osram":
//                     if (cantLamp == 5) {
//                         porcentaje = 30;
//                     } else if (cantLamp == 4) {
//                         porcentaje = 20;
//                     } else if (cantLamp == 3) {
//                         porcentaje = 5;
//                         break;
//                     } default:
//                     porcentaje = 0;
//                     break;
//             }
//         }