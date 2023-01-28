// la clase abstracta puede declarar metodos 
// que se implementan en los hijos
// debe tener por lo menos un metodo abstracto 
abstract class Animal02 {
    abstract ruido(): void;

    camina():void {
        console.log(`El animal esta caminando`);
    }
}

class gato extends Animal02{
    ruido() {
        console.log(`Miau`);
    }
}

class perro extends Animal02{
    ruido() {
       console.log("Guau");
    }
}

let perro01 = new perro();
perro01.ruido();

let gato01 = new gato();
gato01.ruido();
    