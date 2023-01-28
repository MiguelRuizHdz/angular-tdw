// Modificadores Privados
// Por default las clases, propiedades y metodos son publicos 
class Animal {
    private nombre:string
    private patas: number
    public constructor(_nombre:string, _patas:number){
        this.nombre = _nombre
        this.patas = _patas
    }
    public moverse(){
       console.log(`El ${this.nombre} se esta moviendo`)
    }
}

const animal02 = new Animal("cocodrilo",4)
animal02.moverse();
// No se puede asignar el valor de una propiedad privada
//anima102.nombre = "pato"
animal02.moverse()
    