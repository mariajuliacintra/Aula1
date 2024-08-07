const prompt = require('prompt-sync')();

let nota = parseFloat(prompt("Digite sua nota:"));

if (nota < 4){
    console.log("O aluno está reprovado!!")
}
else if ( nota >= 4 && nota < 6){
    console.log("O aluno está de recuperação!!")
}
else{
    console.log("O aluno está aprovado!!")
}