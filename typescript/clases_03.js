// Modificadores Publicos
// Por default las clases, propiedades y metodos son publicos
var Animal01 = /** @class */ (function () {
    function Animal01(_nombre, _patas) {
        this.nombre = _nombre;
        this.patas = _patas;
    }
    Animal01.prototype.moverse = function () {
        console.log("El ".concat(this.nombre, " se esta moviendo"));
    };
    return Animal01;
}());
var animal01 = new Animal01("perro", 4);
animal01.moverse();
animal01.nombre = "gato";
animal01.moverse();
