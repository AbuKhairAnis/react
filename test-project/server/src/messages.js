const Message = require('./Message')
const { readFile, writeFile } = require('./utils')

const messages = Symbol('messages')

class MessageCollection {
    constructor() {
        (async function () {
            this[messages] = await readFile()
        }).call(this)
    }

    create(name, email, address, phoneNumber, short_message) {
        const message = new Message(name, email, address, phoneNumber, short_message)
        this[messages].push(message)
        writeFile(this[messages])
        return message

    };

    findMessage() {
        // console.log(this[messages])
        return this[messages]
    }

}



const messageCollection = new MessageCollection()

module.exports = messageCollection