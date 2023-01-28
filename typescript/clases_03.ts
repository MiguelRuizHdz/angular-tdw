// Modificadores Publicos
// Por default las clases, propiedades y metodos son publicos
class Animal01{
    nombre:string;
    patas: number;

    constructor( _nombre:string, _patas:number){
        this.nombre = _nombre
        this.patas = _patas
    }

    moverse() {
        console.log(`El ${ this.nombre } se esta moviendo`);
    }
}

const animal01 = new Animal01("perro",4)
animal01.moverse();
animal01.nombre = "gato";
animal01.moverse();
    