var nueva_persona = {
    nombre: 'Miguel',
    apellido: 'Ruiz'
};
function caminar(persona) {
    console.log("La persona ".concat(persona.nombre, " ").concat(persona.apellido, " esta caminando"));
}
caminar(nueva_persona);
