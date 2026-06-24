// Criacao da Arrays

let nome = ["Kamila","Valentina","Pablo","Maria","Joao"];
let nota = [9, 8, 5, 4, 8, 9];
let frequencia = [95, 90, 75, 78, 96];

for(let  i = 0; i < nome.length; i++ )
  console.log("O(a) estudante", nome[i], "tem a nota", nota[i], "e", frequencia[i], "de frequencia");
 
let somarNotas = 0;

for(let i = 0; i < nota.length; i++){
    somarNotas = somarNotas + nota[i];
}                               