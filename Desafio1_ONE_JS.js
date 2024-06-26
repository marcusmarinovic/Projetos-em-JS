alert("Boas vindas ao nosso site!");
let nomeInicial = 'Lua' ;
let idadeinicial = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = "Eroo! Preencha todos os campos";

alert(mensagemDeErro);

let nome = prompt("Qual o seu nome?");

let idade = prompt("Digite a sua idade");

idade = Number(idade);

if (idade>=18) {
    alert("Pode tirar habilitação")
} else {
    alert("Ainda não pode tirar habilitação")
}

