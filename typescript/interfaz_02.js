function MostrarAreaFigura(areafigura) {
    var area;
    if (areafigura.valor_02) {
        area = areafigura.valor_01 * areafigura.valor_02;
        return area;
    }
    else {
        if (areafigura.figura == "circulo") {
            area = 3.14 * areafigura.valor_01 * areafigura.valor_01;
            return area;
        }
        else {
            area = areafigura.valor_01 * areafigura.valor_01;
            return area;
        }
    }
}
var figura_01 = { figura: "circulo", valor_01: 10 };
var figura_02 = { figura: "cuadrado", valor_01: 10 };
var figura_03 = { figura: "rectangulo", valor_01: 10, valor_02: 5 };
var area;
area = MostrarAreaFigura(figura_01);
console.log("La figura ".concat(figura_01.figura, " tiene un area de ").concat(area));
area = MostrarAreaFigura(figura_02);
console.log("La figura ".concat(figura_02.figura, " tiene un area de ").concat(area));
area = MostrarAreaFigura(figura_03);
console.log("La figura ".concat(figura_03.figura, " tiene un area de ").concat(area));
