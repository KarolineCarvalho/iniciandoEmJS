console.log(`Trabalhando com condicionais \n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 11;
const estaAcompanhada = false;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);
const temPassagemComprada = true;

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade.")
//     listaDeDestinos.splice(1, 1); //removendo um item
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado.")
//     listaDeDestinos.splice(1, 1); //removendo um item
// } else {
//     console.log("Não é maior de idade. Compra não efetuada")
// }


if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa viagem!!!")
    listaDeDestinos.splice(1, 1); //removendo um item
} else {
    console.log("Não é maior de idade e não está acompanhado. Compra não efetuada")
}

console.log("Embarque: \n")
if(idadeComprador >=18 && temPassagemComprada){
    console.log("Boa viagem!!!")
} else{
    console.log("Você não pode embarcar.")
}

console.log(listaDeDestinos);