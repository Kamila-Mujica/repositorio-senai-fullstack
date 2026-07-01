let produto = {
    nome: "Arroz",
    preco: 5,
    quantidade:10,

    calcularTotal: function (){
        return this.preco * this.quantidade
    }

};

console.log(produto.calcularTotal());