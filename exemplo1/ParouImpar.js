const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Digite um valor para que seja indentificado se é par ou impar:"))

if(numero % 2 === 0){
    console.log(`O número ${numero} é Par`)
}
else{
    console.log(`O número ${numero} é Impar`)
}