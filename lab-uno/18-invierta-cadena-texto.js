/**
 * 
 * 
 *      EJERCICIO 18
 *  Este ejercicio hace que un texto se invierta.
 * 
 * 
 */
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
  }
  
  // Ejemplo de uso para el Ejercicio 18:
  const textoInicial = "Que lindo es tu cucu";
  const textoNuevo = invertirCadena(textoInicial);

  console.log("--------------------------------------")
  console.log("--- Ejercicio 18: Invertir Cadena ---");
  console.log("Cadena original:", textoInicial);
  console.log("Cadena invertida:", textoNuevo);
  console.log("------------------------------------");