class Circulo {
    raio: number = 0;

    calcularArea() {
        return Math.PI * (this.raio ** 2)
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.raio
    }
}

let circulo1 = new Circulo();
circulo1.raio = 5;
console.log("Área do círculo 1:",circulo1.calcularArea());
console.log("Perímetro do círculo 1:",circulo1.calcularPerimetro());