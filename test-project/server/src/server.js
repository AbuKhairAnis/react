require('dotenv').config();
const express = require('express')
const morgan = require('morgan')
const cors = require('cors');


const app = express();

app.use([morgan('dev'), cors(), express.json()])

app.use('/api/v1/message', require('./routes'))

app.get('/health', (_req, res)=>{
    res.status(200).json({message: "success"})
});

app.use((_req,_res,next)=>{
    const error = new Error('Resource Not Found')
    error.status =404;
    next(error)
});

app.use((error, _req, res, _next)=>{
     if(error.status){
        return res.status(error.status).json({
            message: error.message
        })
    }
    res.status(500).json({
        message: 'Something went Wrong'
    })

});




const PORT = process.env.PORT || 4444


app.listen(PORT, ()=>{
    console.log('Server is listen port',PORT)
})