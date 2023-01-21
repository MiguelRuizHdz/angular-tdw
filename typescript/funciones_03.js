"use strict";
// Parametros opcionales
const opcionales = (nombre, apellido, edad) => {
    if (edad) {
        console.log(`Se llama ${nombre} y su apellido es ${apellido} y su edad es ${edad}`);
    }
    else {
        console.log(`Se llama ${nombre} y su apellido es ${apellido}`);
    }
};
opcionales("Miguel", "Ruiz", 22);
opcionales("Miguel", "Ruiz");
