let aluno = {
    nome:"Kamila",
    idade: 17,
    curso:"Programacao Full Stack",
    matriculado:true,
    notaFinal:9,
};
    console.log("===Cadastro do Aluno===");

    console.log("Nome: " + aluno.nome);
    console.log("Idade: " + aluno.idade);
    console.log("Curso: " + aluno.curso);
    console.log("Matriculado: " + aluno.matriculado);
    console.log("Nota Final: " + aluno.notaFinal + "\n");
    
    console.log("===Dados Atualizados===");

    aluno.idade= 18;
    aluno.notaFinal= 10;

    console.log(aluno);
