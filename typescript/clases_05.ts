// Modificadores Protegidos
// Son accesibles desde la misma clase
// O accesibles de la clase heredada
class Padre02 {
    private nombre: string;
    private apellido: string;
    protected edad: number
    public constructor(_nombre:string, _apellido:string){
        this.nombre = _nombre
        this.apellido = _apellido
    }
    mostrarDatosPadre() {
        console.log(`Los datos del hijo son: nombre ${this.nombre}, apellido ${this.apellido}`)
    }
}
class Hijo02 extends Padre02 {
    constructor(_nombre:string,_apellido: string, _edad){
        super(_nombre,_apellido)
        this.edad = _edad
    }
    mostrarDatosHijo(){
        console.log(`La edad es: ${this.edad}`)
    }
}

const hijo02 = new Hijo02("Juan", "Sin Miedo", 6)
hijo02.mostrarDatosPadre();
hijo02.mostrarDatosHijo();
    