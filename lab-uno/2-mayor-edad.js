/**
 * 
 *      EJERCICIO 2
 *  Este programa es para verificar que la edad de alguien sea mayor o menor de edad. 
 * 
 */

function verificarMayoriaDeEdad(edad) {
    if (edad >= 18) {
      console.log("Eres mayor de edad.");
    } else {
      console.log("Eres menor de edad.");
    }
  }
  
  console.log("Prueba para ver que si es mayor de edad")
  verificarMayoriaDeEdad(25);

  console.log("------------------------")
  
  console.log("Prueba para ver que es menor de edad")
  verificarMayoriaDeEdad(14);