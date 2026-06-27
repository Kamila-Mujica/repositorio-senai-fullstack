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
          let mediaNotas = (somarNotas/ nota.length);
          console.log("A média da turamaé:"+ mediaNotas);
          
          for(let i =0; i < nome.length;i++){
            if(nota[i]>= 7 && frequencia[i] >75){
              console.log("Aluno:"+nome [i]+ "foi aprovado");
            } else if (nota[i]>=5 && frequencia[i]>=75){
              console.log("Aluno :"+nome[i] +"Esta de recuperação");
            }else{
              console.log ("nome:"+  nome[i] + "Foi reprovado")
            }
          }
          let opcao = 4;

          switch(opcao){
            case 1:
              console.log("----Lista de Alunos---")
          }