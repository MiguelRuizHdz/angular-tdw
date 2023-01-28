// Clase
var Vehiculo = /** @class */ (function () {
    function Vehiculo(_marca, _anio, _modelo, _precio) {
        this.marca = _marca;
        this.anio = _anio;
        this.modelo = _modelo;
        this.precio = _precio;
        this.velocidad = 0;
    }
    Vehiculo.prototype.acelerar = function () {
        if (this.velocidad < 200) {
            this.velocidad = this.velocidad + 10;
            console.log("El vehiculo va a una velocidad de ".concat(this.velocidad, " km/hr"));
        }
        else {
            this.velocidad = 200;
            console.log("El vehiculo va a su m\u00E1xima velocidad que es ".concat(this.velocidad, " km/hr"));
        }
    };
    Vehiculo.prototype.frenar = function () {
        if (this.velocidad > 10) {
            this.velocidad = this.velocidad - 10;
            console.log("El vehiculo va a una velocidad de ".concat(this.velocidad, " km/hr"));
        }
        else {
            this.velocidad = 0;
            console.log("El vehiculo se encuentra parado, su velocidad es ".concat(this.velocidad, " km/hr"));
        }
    };
    return Vehiculo;
}());
var auto_01 = new Vehiculo("Ford", 2023, "Lobo", 1300000);
auto_01.acelerar();
auto_01.acelerar();
auto_01.acelerar();
auto_01.acelerar();
auto_01.frenar();
auto_01.frenar();
auto_01.frenar();
auto_01.frenar();
auto_01.frenar();
auto_01.frenar();
