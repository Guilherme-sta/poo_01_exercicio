class Retangulo {
    lado1: number = 0;
    lado2: number = 0;

    calcularArea() {
        return this.lado1 * this.lado2;
    }
    calcularPerimetro() {
        return 2 * (this.lado1 + this.lado2);
    }
}  

let retangulo1 = new Retangulo();
retangulo1.lado1 = 10;
retangulo1.lado2 = 20;
console.log("Área do retângulo 1:",retangulo1.calcularArea());
console.log("Perímetro do retângulo 2:",retangulo1.calcularPerimetro());

let retangulo2 = new Retangulo();
retangulo2.lado1 = 5;
retangulo2.lado2 = 10;
console.log(retangulo2.calcularArea())
console.log("Área do retângulo 2:",retangulo2.calcularArea());
console.log("Perímetro do retângulo 2:",retangulo2.calcularPerimetro());