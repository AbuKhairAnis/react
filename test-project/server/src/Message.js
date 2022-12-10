const shortid = require('shortid')

class Message  {
    /**
     * 
     * @param {string} name 
     * @param {string} email 
     * @param {string} address 
     * @param {string} short_message 
     * @param {string} phoneNumber 
     */
    
    constructor(name, email,address,phoneNumber,short_message){
      this.id = shortid.generate(),
      this.name = name,
      this.email = email,
      this.address = address,
      this.phoneNumber = phoneNumber,
      this.short_message = short_message

    }
}

module.exports = Message