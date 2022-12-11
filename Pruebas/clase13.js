var estudiantes = ["Alexander", "Diego", "Laura", "Natalia"]

function saludar(estudiante){
    console.log(`Hola ${estudiante}`);
}

for(var i=0; i<estudiantes.length; i++){
    saludar(estudiantes[i]);
}