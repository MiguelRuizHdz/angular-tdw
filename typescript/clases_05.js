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
// Modificadores Protegidos
// Son accesibles desde la misma clase
// O accesibles de la clase heredada
var Padre02 = /** @class */ (function () {
    function Padre02(_nombre, _apellido) {
        this.nombre = _nombre;
        this.apellido = _apellido;
    }
    Padre02.prototype.mostrarDatosPadre = function () {
        console.log("Los datos del hijo son: nombre ".concat(this.nombre, ", apellido ").concat(this.apellido));
    };
    return Padre02;
}());
var Hijo02 = /** @class */ (function (_super) {
    __extends(Hijo02, _super);
    function Hijo02(_nombre, _apellido, _edad) {
        var _this = _super.call(this, _nombre, _apellido) || this;
        _this.edad = _edad;
        return _this;
    }
    Hijo02.prototype.mostrarDatosHijo = function () {
        console.log("La edad es: ".concat(this.edad));
    };
    return Hijo02;
}(Padre02));
var hijo02 = new Hijo02("Juan", "Sin Miedo", 6);
hijo02.mostrarDatosPadre();
hijo02.mostrarDatosHijo();
