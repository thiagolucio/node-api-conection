const express = require('express');
const app = express();

app.get('/',(request, response)=> {
    return response.json({message: 'Servidor está funcionado e OK'})
})

app.listen(3333)