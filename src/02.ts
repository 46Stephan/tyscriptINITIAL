/*2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material

b. Métodos
i. Trocar Cor
ii. Mostrar cor*/

class Bola {
    private cor: string;
    private circunferencia: number;
    private material: string;

    constructor(cor: string, circunferencia: number, material: string) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }

    public trocarCor(): string {
       return this.cor = 'Azul'; 
    }

    public mostrarCor(): string {
        return this.cor;
    }
}

const bola = new Bola('Azul', 10, 'Plastico');
console.log(bola);
console.log(bola.trocarCor());
console.log(bola);
console.log(bola.mostrarCor());