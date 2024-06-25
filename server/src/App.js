import express from 'express';
import DoceController from './Controllers/DoceController.js';

const server = express();

server.use (express.json())

server.get('/',(req,res)=>{
    res.status(200).json("Servidor Funcionando");
})

server.get('/doces',DoceController.read);
server.post('/doces',DoceController.create);
server.put('/doces/:id_doce', DoceController.update);
server.delete('/doces/:id_doce',DoceController.delete)

server.listen(5000);
