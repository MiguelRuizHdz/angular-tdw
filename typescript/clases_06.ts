// Metodos get y set

class Persona {
    private edad: number;
    private name: string;
    constructor(_name:string, _edad: number){
        this.name = _name
        this.edad = _edad
    }
    getName(): string {
        return this.name
    }
    getEdad(): number {
        return this.edad
    }
    setName(_name:string):void {
        this.name = _name
    }
    setEdad(_edad: number):void{
        this.edad = _edad
    }
    mostrarDatosPersona(){
        console.log(`Los datos de la persona son: nombre ${this.name} y edad ${this.edad}`)
    }
}

let persona01 = new Persona("Miguel", 22);
persona01.mostrarDatosPersona();

persona01.setName("Pepe");
persona01.setEdad(26);

persona01.mostrarDatosPersona();
    