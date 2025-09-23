/**
 * 
 *              EJERCICIO NUMERO 17
 *  Este es un programa que cuenta los numero pares que hay dentro de un arreglo.
 * 
 */

function contarNumerosPares(arreglo) {
    let contadorPares = 0; 
    
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 === 0) {
        contadorPares++;
      }
    }
    
    return contadorPares;
  }
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const totalPares = contarNumerosPares(numeros);
  
  console.log("-------------------------------------");
  console.log("El arreglo es:", numeros);
  console.log("Cantidad de números pares:", totalPares);
  console.log("------------------------------------");
  