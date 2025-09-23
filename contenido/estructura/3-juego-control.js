const numeroSecreto = Math.floor(Math.random() * 10  + 1);

const numeroJugador = parseInt(prompt("Adivina el numero secreto entre 1 y 10"));

if (numeroJugador == numeroSecreto) {
    console.log("Felicidade ganaste, encontraste el nmumero seceto")
    
} else if (numeroSecreto < numeroJugador){
    console.log("El numero es muy najo, intenta de nuevo");
} else {
    console.log("El numero es muy alto, vuelve a intentarlo")
}