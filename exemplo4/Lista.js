const prompt = require('prompt-sync')();

let Array = [];

let tamanho = parseFloat(prompt("Digite o tamanho do Array:"))

for(let i = 0; i < tamanho; i++){
    let num = parseFloat(prompt("Digite o numero para inserir no Array:"));
    Array.push(num);
    Array.sort(function(a, b) {
        return a - b;
      });
}
console.log("A sua lista ficou assim:", Array);

//O método sort passa diferentes pares de elementos a e b para a função de comparação durante o processo de ordenação.
//a - b é calculado para cada par de elementos do array. Se o resultado for negativo, o elemento a deve vir antes de b. Se for positivo, b deve vir antes de a.