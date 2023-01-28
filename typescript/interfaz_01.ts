interface IPersona { // Atributos
    nombre: string
    apellido: string
}

let nueva_persona: IPersona = {
    nombre: 'Miguel',
    apellido: 'Ruiz',
}

function caminar (persona: IPersona): void {
    console.log(`La persona ${persona.nombre} ${persona.apellido} esta caminando`)
}

caminar(nueva_persona)
    