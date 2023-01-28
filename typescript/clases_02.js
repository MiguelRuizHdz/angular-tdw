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
// Herencia
// Hereda propiedades y metodos de clase Padre
var Padre = /** @class */ (function () {
    function Padre(_nombre, _edad) {
        this.nombre = _nombre;
        this.edad = _edad;
    }
    Padre.prototype.mostrarNombre = function () {
        console.log("El nombre es: ".concat(this.nombre));
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(_nombre, _edad, _apellido) {
        var _this = 
        // super ejecuta el constructor de la clase padre
        // que recibe dos parametros de acuerdo al tipo de dato super(_nombre,_edad)
        _super.call(this, _nombre, _edad) || this;
        _this.apellido = _apellido;
        return _this;
    }
    Hijo.prototype.mostrarDatosHijo = function () {
        console.log("Los datos de la persona son: ");
        console.log("nombre: ".concat(this.nombre, ", apellido: ").concat(this.apellido, " y edad ").concat(this.edad));
    };
    return Hijo;
}(Padre));
var persona = new Hijo("Miguel", 22, "Ruiz");
persona.mostrarNombre();
persona.mostrarDatosHijo();
