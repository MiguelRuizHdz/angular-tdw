interface Figura{ 
    figura:string
    valor_01:number
    valor_02?: number
}

function MostrarAreaFigura (areafigura:Figura): number { 
    let area: number
    if(areafigura.valor_02){
        area = areafigura.valor_01 * areafigura.valor_02
        return area
    }
    else{
        if(areafigura.figura == "circulo") {
            area = 3.14 * areafigura.valor_01 * areafigura.valor_01
            return area
        } else {
            area = areafigura.valor_01 * areafigura.valor_01
            return area
        }
    }
}

let figura_01 = { figura:"circulo", valor_01:10 }
let figura_02 = { figura: "cuadrado", valor_01:10 }
let figura_03 = { figura:"rectangulo", valor_01:10, valor_02:5 }
let area: number
area = MostrarAreaFigura(figura_01)
console.log(`La figura ${figura_01.figura} tiene un area de ${area}`)

area = MostrarAreaFigura(figura_02)
console.log(`La figura ${figura_02.figura} tiene un area de ${area}`)

area = MostrarAreaFigura(figura_03)
console.log(`La figura ${figura_03.figura} tiene un area de ${area}`)
