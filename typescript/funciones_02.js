"use strict";
// Funciones tipo Flecha
function mostrar01() {
    console.log("Funcion 01");
}
const mostrar02 = () => { console.log("Funcion 02"); };
mostrar01();
mostrar02();
function mostrar03(nombre) {
    console.log(nombre);
}
const mostrar04 = (apellido) => { console.log(apellido); };
mostrar03("Miguel");
mostrar04("Ruiz");
