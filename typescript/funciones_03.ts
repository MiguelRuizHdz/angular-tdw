// Parametros opcionales

const opcionales = (nombre: string, apellido: string, edad?: number) => {
    if (edad) {
        console.log(`Se llama ${ nombre } y su apellido es ${ apellido } y su edad es ${ edad }`);
    } else {
        console.log(`Se llama ${ nombre } y su apellido es ${ apellido }`);
    }
}

opcionales("Miguel", "Ruiz", 22);
opcionales("Miguel", "Ruiz");