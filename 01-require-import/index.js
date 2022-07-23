const operacoes = require("./operacoes.js")
const multiplicacao = require("./operacoes2.js") //Não é um objeto
const operacoesNomeados = require("./operacoesNomeados.js")

console.log(operacoes.soma(10, 2))
console.log(operacoes.subtracao(7, 2))
console.log(multiplicacao(3,4)) //Não precisa puxar o operações2
console.log(operacoesNomeados.divisao(10, 5))
console.log(operacoesNomeados.resto(11, 5))