// Metodos get y set
var Persona = /** @class */ (function () {
    function Persona(_name, _edad) {
        this.name = _name;
        this.edad = _edad;
    }
    Persona.prototype.getName = function () {
        return this.name;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setName = function (_name) {
        this.name = _name;
    };
    Persona.prototype.setEdad = function (_edad) {
        this.edad = _edad;
    };
    Persona.prototype.mostrarDatosPersona = function () {
        console.log("Los datos de la persona son: nombre ".concat(this.name, " y edad ").concat(this.edad));
    };
    return Persona;
}());
var persona01 = new Persona("Miguel", 22);
persona01.mostrarDatosPersona();
persona01.setName("Pepe");
persona01.setEdad(26);
persona01.mostrarDatosPersona();
