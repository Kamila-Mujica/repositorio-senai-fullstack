let produto = {

     nome:"Teclado",
    preco:120,
    estoque:10,
    disponivel:true
};
console.log("===Produto antes da venda===");
console.log("Nome:"+ produto.nome);
console.log("Preço:" + produto.preco);
console.log("Estoque:" + produto.estoque);
console.log("Disponivel:" + produto.disponivel + "\n");

produto.preco = 99.99;
produto.estoque = 9;

console.log("===Produto após alteração===");
console.log ("Nome: "+produto.nome);
console.log ("Preço:"+ produto.preco);
console.log ("Estoque:" + produto.estoque);
console.log("Disponivel:" + produto.disponivel);