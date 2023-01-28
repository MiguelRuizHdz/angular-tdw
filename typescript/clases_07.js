var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// la clase abstracta puede declarar metodos 
// que se implementan en los hijos
// debe tener por lo menos un metodo abstracto 
var Animal02 = /** @class */ (function () {
    function Animal02() {
    }
    Animal02.prototype.camina = function () {
        console.log("El animal esta caminando");
    };
    return Animal02;
}());
var gato = /** @class */ (function (_super) {
    __extends(gato, _super);
    function gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    gato.prototype.ruido = function () {
        console.log("Miau");
    };
    return gato;
}(Animal02));
var perro = /** @class */ (function (_super) {
    __extends(perro, _super);
    function perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    perro.prototype.ruido = function () {
        console.log("Guau");
    };
    return perro;
}(Animal02));
var perro01 = new perro();
perro01.ruido();
var gato01 = new gato();
gato01.ruido();
