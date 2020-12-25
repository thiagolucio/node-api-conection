const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(request, response)=> {
    return response.json({message: 'Servidor está funcionado e OK'})
})

app.get('/atualizou',(request, response)=> {
    return response.json({message: 'Atualizou!!!'})
})

app.get('/test',(request, response)=> {
    const {name, date} = request.body;
    return response.json({name, date})
})

app.listen(3333)