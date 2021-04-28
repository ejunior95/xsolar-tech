import mongoose from 'mongoose';


// Define schema
const Schema = mongoose.Schema;

const EnderecoSchema = new mongoose.Schema({
    cep: String,
    cidade: String,
    estado: String,
    bairro: String,
    rua: String,
    numero: String,
    complemento: String,
    tipo: String
})

const ClientModelSchema = new Schema({
    nome: String,
    cpf: String,
    telefone: String,
    email: String,
    senha: String,
    enderecoPrincipal: EnderecoSchema,
    enderecosSecundarios: [EnderecoSchema],
});

// Compile model from schema
export const ClientModel = mongoose.model('Client', ClientModelSchema );