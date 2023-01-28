// Herencia
// Hereda propiedades y metodos de clase Padre
class Padre{
    nombre:string
    edad: number
    constructor(_nombre:string, _edad: number){
        this.nombre = _nombre
        this.edad = _edad;
    }
    mostrarNombre():void{
        console.log(`El nombre es: ${this.nombre}`)
    }
}

class Hijo extends Padre{
    apellido:string;
    constructor(_nombre:string, _edad: number,_apellido:string) {
        // super ejecuta el constructor de la clase padre
        // que recibe dos parametros de acuerdo al tipo de dato super(_nombre,_edad)
        super(_nombre,_edad)
        this.apellido = _apellido
    }
    mostrarDatosHijo():void {
        console.log("Los datos de la persona son: ");
        console.log(`nombre: ${this.nombre}, apellido: ${this.apellido} y edad ${this.edad}`)
    }
}

const persona = new Hijo("Miguel", 22, "Ruiz")

persona.mostrarNombre()
persona.mostrarDatosHijo()
    