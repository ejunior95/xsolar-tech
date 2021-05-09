import { ClientModel } from './models/ClientSchema';
import authGerente from './middlewares/GerenteAutenticacao';
import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import * as dotenv from "dotenv";
import { listMany } from './dtos/client';

dotenv.config();

//Conexão com o banco
const mongoDB = 'mongodb://127.0.0.1/x-solar-techBD';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true  });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const server = express()
server.use(express.json())

server.use(cors())


// Rotas autenticadas

server.post('/auth/login', async (request, response) => {
    const {
        email,
        senha
    } = request.body

    const client = await ClientModel.findOne({email})
    if (!client) {
        return response.status(404).json({message: "Usuário não encontrado!"})
    }
    
    try {
        const validaSenha = await bcrypt.compare(senha, client.senha);
        if (!validaSenha || !client.senha) {
            return response.status(401).json()
        }
    } catch (error) {
        return response.status(401).json()
    }

    const jwt_secret = process.env.JWT_SECRET

    if (!jwt_secret) return response.status(500).json()
    const token = jwt.sign({ client_id: client._id }, jwt_secret , {
        expiresIn: "1d",
     });

    return response.status(200).json({
        message: "Acesso autorizado!",
        token
    })
})

server.use(authGerente)
server.post('/auth/register', async (request, response) => {
    const {
        email,
        senha
    } = request.body

    const client = await ClientModel.findOne({email})
    if (!client) {
        return response.status(404).json({message: "Usuário não encontrado!"})
    }

    const hash = await bcrypt.hash(senha, 7);
    
    client.senha = hash

    await client.save()
    return response.status(201).json({})

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
    const clients_ = listMany(Object.assign(clients))
    return response.json(clients_)
})

//Rota de listar apenas um cliente

server.get('/clientes/:_id', async (request, response) => {
    
    const {
        _id
    } = request.params

    const client = await ClientModel.findOne({_id})

    return response.json(client)
})

//Rota de deletar um cliente

server.delete('/clientes/:_id', async (request, response) => {
    
    const {
        _id
    } = request.params

    await ClientModel.deleteOne({_id})

    return response.status(204).json({})
})

//Rotas de alteração

server.put('/clientes/:_id', async (request, response) => {
    
    const {
        _id
    } = request.params

    const {
        nome,
        cpf,
        telefone,
        email,
        enderecoPrincipal,
        enderecosSecundarios
    } = request.body
    

    const client = await ClientModel.findOneAndUpdate({_id}, {$set:{
        nome,
        cpf,
        telefone,
        email,
        enderecoPrincipal,
        enderecosSecundarios
    }}, {new: true})

    return response.json(client)
})

server.listen(3333, () => {
   console.log('O servidor esta rodando na porta 3333')
})