let prioridade = 2; // 1 baixa, media, 3 alta
let sistemaForaDoar = false;
let tempoEsperaMin = 35;
let categoria = "internet"; // login,internet,computador,outro

if (sistemaForaDoar == true || prioridade == 3) {
    console.log("prioridade critica");
} else if (tempoEsperaMin >= 30 && prioridade == 2) {
    console.log("Prioridade Alta");
} else if (prioridade == 1) {
    console.log("Prioridade normal");
} else {
    console.log("Em analise");
}
switch (categoria) {
    case "login":
        console.log("Redefinir senha e  validar usuario");
        break;
    case "internet":
        console.log("Verificar cabo,WI-FI e roteador");
        break;
    case "computador":
        console.log("Reiniciar maquina e verificar atualizações");
        break;
    case "outro":
        console.log("Coletar mais informações");
        break;
    default:
        console.log("categoria inválida");
        break;
}
