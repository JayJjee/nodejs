const express = require("express")
const app = express()

app.get("/", (req, res) =>{
    res.send("Hello World! GET")
})

app.post("/", (req, res) =>{
    const a = 3
    const b = 5
    const result = a + b
    res.send("Resultado: " + result)
})

app.listen(3000, () => {
    console.log("API Started!")
})