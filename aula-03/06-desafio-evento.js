let idade = 16;
let temIngresso = true;
let ehAlunoSENAI = true;
let horaChegada = 19;
let codigoIngresso = "padrao";// vip ,padrao ou meia

if (idade <14 ){
console.log("Entrada negada")
}else if(! temIngresso){
    console.log("Voce nao tem ingresso");

}else if(horaChegada >20){
    console.log("Entrada foi encerrada");
}else{
    console.log("Entrada liberada")
} 
    switch (codigoIngresso){
    case "Vip":
    console.log("Entrada VIP");
        break;

     case "padrao":
     console.log("entrada Padrao");
        break;
     case "meia":
        console.log("meia entrada");
        break;
        
        default: console.log("Codigo de ingresso invalido");

    }

    if (ehAlunoSENAI &&  codigoIngresso === "meia"){
        console.log("Aluno com desconto");
    }
    console.log("A idade do participante é: "+ idade);
    console.log("O ingresso é válido? "+ temIngresso);

