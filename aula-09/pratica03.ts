class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(
     marca: string,
    modelo: string,
    ano: number
    ) {
        this.ano = ano;
        this.marca = marca;
        this.modelo = modelo;
    }

    exibirDetalhes(): void {
        console.log(`${this.ano} ${this.marca} - ${this.modelo}`);
    }
}


let carro1 = new Carro("Toyota", "Corolla", 2022);


carro1.exibirDetalhes();