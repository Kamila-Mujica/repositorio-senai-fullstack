function verificarMaioridade (idade:number):
String{
    if (idade>=18) {
        return "Maior de idade";
    }
    return "Menor de idade";
}
console.log(verificarMaioridade(20));
console.log(verificarMaioridade(17));

    
