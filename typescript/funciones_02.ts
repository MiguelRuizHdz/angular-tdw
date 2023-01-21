// Funciones tipo Flecha

function mostrar01(): void {
    console.log("Funcion 01");
}

const mostrar02 = (): void => { console.log("Funcion 02") };

mostrar01();
mostrar02();


function mostrar03( nombre: string ): void {
    console.log(nombre);
}

const mostrar04 = ( apellido: string ): void => { console.log(apellido) }

mostrar03("Miguel");
mostrar04("Ruiz");