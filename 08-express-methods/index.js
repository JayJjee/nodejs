const express = require("express")
const app = express()

app.all("/testAll", (request, response) => {
    response.send(request.method)
})

app.get("/teste?", (request, response) => { //Funcionalidade do sinal de interrogação
    response.send("/teste?")
})

app.get("/buzz+", (request, response) => { //Funcionalidade do sinal de interrogação
    response.send("/buzz+")
})

app.listen(3000, () => {
    console.log("API Started")
})