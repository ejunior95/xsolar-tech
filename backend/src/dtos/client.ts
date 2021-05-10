export function list(cliente:any) {
    let cliente_ = cliente.toJSON()
    delete cliente_.senha
    return {...cliente_, isAdmin: !!cliente.senha}
}

export function listMany(clientes=[]) {
    const clientes_ = clientes.map(cliente => list(cliente)) 
    return clientes_
}
