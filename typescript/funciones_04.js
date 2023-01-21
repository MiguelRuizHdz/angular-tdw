"use strict";
// Parametros por defecto
const mostrar = (nombre, apellido, edad = 20) => {
    return `Se llama ${nombre} y su apellido es ${apellido} y su edad es ${edad}`;
};
console.log(mostrar("Miguel", "Ruiz", 22));
console.log(mostrar("Miguel", "Ruiz"));
