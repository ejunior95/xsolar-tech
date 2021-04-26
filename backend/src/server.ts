import express from 'express'

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

server.post('/clientes', (request, response) => {
    const {
        nome,
        cpf,
        telefone,
        email,
        enderecoPrincipal,
        enderecosSecundarios
    } = request.body

    
   
})


server.listen(3333, () => {
   console.log('O servidor esta rodando na porta 3333')
})