let nome = "Valentina";
let nota1 = 9;
let nota2 = 7;
let frequencia = 85;
let atividadesEntregas = true;
let estaBloqueado = false;
let mediun = (nota1 + nota2) / 2;
let situaçãoFinal;

if (mediun >= 9 && frequencia >= 60) {
    situaçãoFinal = "Esta aprovado com destaque";
} else if (mediun >= 6 && frequencia >= 75 && atividadesEntregas) {
    situaçãoFinal = "Você esta aprovado ";
} else {
    situaçãoFinal = "Você esta reprovado";
}

console.log("Nome: " + nome);
console.log("Média: " + mediun);
console.log("Frequencia: " + frequencia + "%");
console.log("Atividades Entregues: " + atividadesEntregas);
console.log("Situação Final: " + situaçãoFinal);