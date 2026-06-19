let idade = 19;
let temCadastro = true;
let temResponsavel = false;
let bloqueado = false;

if (bloqueado) {
    console.log("Acesso negado:Usuario boqueado");
} else if (idade >= 18 && temCadastro) {
console.log("Acesso liberado"); 
} else if (idade < 18 && temCadastro || temResponsavel) {
    console.log("Acesso liberado com responsável");
} else if (!temCadastro) {
    console.log("Acesso negado: cadastro necessário");
} else if (!temCadastro) {
    console.log("Acesso negado");
}