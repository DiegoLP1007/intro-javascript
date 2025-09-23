/**
 *      ESTRUCTURA DE SWITCH
 * 
 */


let comprar = "Mangos"
switch (comprar) {
    case "Naranjas":
        console.log("Las naranjas cuestan Q16 la mano");
        break;
    case "Platanos":
        console.log("Los platanos se venden a Q18 la docena");
        break;
    case "Manzanas":
        console.log("El precio de las manzanas por unidad es de Q5");
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papays vale Q12 la libra")
        break;    
    default:
        console.log(`No se encontraron con inventario para ${comprar}`)
        break;
}
