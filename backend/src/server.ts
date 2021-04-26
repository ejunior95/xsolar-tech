import { ClientModel } from './models/ClientSchema';
import express from 'express';
import mongoose from 'mongoose';

//Conexão com o banco
const mongoDB = 'mongodb://127.0.0.1/x-solar-techBD';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const server = express()
server.use(express.json())
server.get('/', (request, response) => {
    return response.json({ok: true})
})


// Rotas autenticadas

server.post('/login', (request, response) => {
    const {
        login,
        senha
    } = request.body

    if (senha !== "1234" || login !== "admin") {
        return response.status(401).json({
            message: "Login ou senha inválida!"
        })
    }
    return response.status(200).json({
        message: "Acesso autorizado!",
        token: "Berer 102030dsadsalkkoekopqw913892132145dsa564d56sa421921"
    })
})

// Rotas do CRUD

server.post('/clientes', async (request, response) => {
   
    const {
        nome,
        cpf,
        telefone,
        email,
        enderecoPrincipal,
        enderecosSecundarios
    } = request.body

    const client = new ClientModel({
        nome,
        cpf,
        telefone,
        email,
        enderecoPrincipal,
        enderecosSecundarios
    })
   const clientCreated = await client.save()

    return response.status(201).json(clientCreated)

})


server.listen(3333, () => {
   console.log('O servidor esta rodando na porta 3333')
})