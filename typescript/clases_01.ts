// Clase
class Vehiculo {
    marca: string;
    anio: number;
    modelo: string;
    precio: number;
    velocidad: number;

    constructor( _marca: string, _anio: number, _modelo: string, _precio: number ) {
        this.marca = _marca;
        this.anio = _anio;
        this.modelo = _modelo;
        this.precio = _precio;
        this.velocidad = 0
    }

    acelerar(): void {
        if (this.velocidad < 200) {
            this.velocidad = this.velocidad + 10;
            console.log(`El vehiculo va a una velocidad de ${ this.velocidad} km/hr`);
        } else {
            this.velocidad = 200;
            console.log(`El vehiculo va a su máxima velocidad que es ${ this.velocidad} km/hr`);
        }
    }

    frenar():void{
        if (this.velocidad > 10){
            this.velocidad = this.velocidad - 10
            console.log(`El vehiculo va a una velocidad de ${this.velocidad} km/hr`)
        } else{
            this.velocidad = 0
            console.log(`El vehiculo se encuentra parado, su velocidad es ${this.velocidad} km/hr`)
        }
    }
        
}

const auto_01 = new Vehiculo("Ford", 2023, "Lobo",1300000)
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
