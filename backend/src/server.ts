import express from 'express'

const server = express()
server.use(express.json())
server.get('/', (request, response) => {
    return response.json({ok: true})
})


// Rotas autenticadas

server.post('/login', (request, response) => {
   
})


server.listen(3333, () => {
   console.log('O servidor esta rodando na porta 3333')
})