import express from 'express';
import LoginController from './Controllers/LoginController.js';

const server = express();

server.use (express.json())

server.get('/',(req,res)=>{
    res.status(200).json("Servidor Funcionando");
})

server.get('/login',LoginController.read);
server.post('/login',LoginController.create);
server.put('/login/:id_usuario', LoginController.update);
server.delete('/login/:id_usuario',LoginController.delete)

server.listen(5000);
