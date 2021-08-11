console.log("Trabalhando com atribuição de variáveis");

const idade = 29;
let primeiroNome = "Ricardo";
const sobrenome = "Bugan";

//console.log(primeiroNome + " " + sobrenome) // Ricardo Bugan
console.log(primeiroNome, sobrenome); // Ricardo Bugan
console.log(`Meu primeiroNome é ${primeiroNome} ${sobrenome}`) //Meu primeiroNome é Ricardo Bugan

primeiroNome = primeiroNome + sobrenome;  //concatenação simples
console.log(primeiroNome);