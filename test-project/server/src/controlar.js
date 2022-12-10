const messageCollection = require('./messages')

exports.sendingMessage=(req,res)=>{
    console.log(req.body)
    const {name,email,address,phoneNumber,short_message}=req.body
    const message = messageCollection.create(name,email,address,phoneNumber,short_message)
    res.status(201).json({
        message: 'Ticket Created Successfully', message
    })

};

exports.findAll=(req,res)=>{
    const message = messageCollection.findMessage()
      res.status(200).json(message)
}