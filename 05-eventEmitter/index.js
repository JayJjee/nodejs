const eventEmitter = require("./event.js")

eventEmitter.on("testEvent", () => {
    console.log("Ouviu no index.js")
})

eventEmitter.emit("testEvent", "testandoIndex")