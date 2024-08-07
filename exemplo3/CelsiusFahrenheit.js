const prompt = require('prompt-sync')();

let temperatura = parseFloat(prompt("Digite a temperatura em celsius: "));

console.log("a temperatura em fahrenheit é:", (temperatura * 1.8)+32)
