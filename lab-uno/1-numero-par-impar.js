/**
 * 
 * 
 *          EJERCICIO 1
 *  Este ejercicio es para verificar si un numero es positivo, negativo o cero.
 *  
 * 
 */

function verificarSigno(numero) {
    if (numero > 0) {
      return "Positivo";
    } else if (numero < 0) {
      return "Negativo";
    } else {
      return "Cero";
    }
  }
  
  console.log("-------------------------------------")
  console.log("Prueba para numero positivo")
  console.log(verificarSigno(5)); // Positivo
  console.log("-------------------------------------")
  console.log("Prueba para numero negativo")
  console.log(verificarSigno(-3));//  Negativo
  console.log("-------------------------------------")
  console.log("Prueba para numero 0")
  console.log(verificarSigno(0)); //  Cero