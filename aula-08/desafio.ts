// Boletim

function calcularMedia(nota1:number, nota2:number, nota3:number): number{
  return (nota1 + nota2 + nota3 )/3;
}
function verificarSituacao(media: number): string{
    if(media >= 7){
        return "Aprovado!";
    } else if(media >=5 ){
        return "Recuperação!"
    } else{
        return "Reprovado!"
    }

}


function exibirBoletim(nome:string, media:number, situacao:string):void{
    console.log(nome  + media ,situacao);
}

let media = calcularMedia(10, 7, 5);

exibirBoletim("Ana", media ,verificarSituacao(media));


     
    
    
