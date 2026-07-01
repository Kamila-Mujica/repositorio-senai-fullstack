class aluno{
aluno:string
nota1:number
nota2:number
 
constructor (nome :string, nota1:number,nota2:number){
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 =nota2;
}

calcularMédia():number{
return (this.nota1 + this.nota2)/2;
}
verificarSituacao ():string{
    let media = this.calcularMédia();
    if (media >=7 ){
        re
    }
}


}



