let nomeDaPessoa = "Valentina";
let idadeDaPessoa = 19;
let alturaDaPessoa = 1.50;
let pesoDaPessoa = 48;

let imc = pesoDaPessoa / (alturaDaPessoa*alturaDaPessoa)

if (imc < 18.5){
    console.log("Voce esta abaixo do peso");

}else if (imc >=18.5 && imc < 25 ){
    console.log("Voce esta com peso normal");
}
if (imc >= 25 && imc < 30){
   console.log("voce esta com sobre peso");
   console.log (nomePessoa + "tem um imc de" + imc);
}


