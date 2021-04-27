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

//Rota de cadastro

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

//Rota de listar

server.get('/clientes', async (request, response) => {
    
    const clients = await ClientModel.find({})

    return response.json(clients)
})

//Rota de listar apenas um cliente

server.get('/clientes/:_id', async (request, response) => {
    
    const {
        _id
    } = request.params

    const clients = await ClientModel.findOne({_id})

    return response.json(clients)
})

//Rota de deletar um cliente

server.delete('/clientes/:_id', async (request, response) => {
    
    const {
        _id
    } = request.params

    await ClientModel.deleteOne({_id})

    return response.status(204).json({})
})



server.listen(3333, () => {
   console.log('O servidor esta rodando na porta 3333')
})