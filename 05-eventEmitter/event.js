const events = require("node:events")
const eventEmitter = new events.EventEmitter()

eventEmitter.on("testEvent", obj => {
    console.log(obj)
})

module.exports = eventEmitter

// eventEmitter.on("testEvent", obj => {
//     console.log(obj + " 2 ")
// })

// eventEmitter.emit("testEvent", "textoteste")