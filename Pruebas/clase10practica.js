const prompt = require("prompt-sync")();
let informacionLeida = prompt("Escribe tu eleccion: ");
let cpu;


if (informacionLeida === "piedra") {
    console.log ("Piedras le gana a tijeras");
} else if (informacionLeida === "papel"){
    console.log ("Papel pierde contra tijeras");
} else {
    console.log ("Empate")
}