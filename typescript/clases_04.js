// Modificadores Privados
// Por default las clases, propiedades y metodos son publicos 
var Animal = /** @class */ (function () {
    function Animal(_nombre, _patas) {
        this.nombre = _nombre;
        this.patas = _patas;
    }
    Animal.prototype.moverse = function () {
        console.log("El ".concat(this.nombre, " se esta moviendo"));
    };
    return Animal;
}());
var animal02 = new Animal("cocodrilo", 4);
animal02.moverse();
// No se puede asignar el valor de una propiedad privada
//anima102.nombre = "pato"
animal02.moverse();
