const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

pergunta()
function pergunta(){
    rl.question("Digite um numero: ", numero => {
        const multiplos = []
        for (let i = 3; i < parseInt(numero); i++){
            if ((i % 3 === 0) || (i % 5 === 0)){
                multiplos.push(i)
            }
        }  
        console.log(multiplos)
        rl.close()
        }
    )}