class SituacaoFinanceira {
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    calcularSaldo(){
        return this.valorCreditos - this.valorDebitos;
    }
}

let situacaofinanceira1 = new SituacaoFinanceira();
situacaofinanceira1.valorCreditos = 1500;
situacaofinanceira1.valorDebitos = 800;
console.log("O saldo financeiro é:",situacaofinanceira1.calcularSaldo());