import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ListView from '../../components/ListView';
import api from '../../services/api';
import { Container } from './styles';

interface ICliente {
  _id: string;
  nome: string,
  cpf: string,
  telefone: string,
  email: string,
  enderecoPrincipal: {
    _id: string;
    cep: string;
    cidade: string;
    estado: string;
    bairro: string;
    rua: string;
    numero: string;
    complemento: string;
    tipo: string;
  }
}

const Listar: React.FC = () => {

  const [clientes, setClientes] = useState([] as ICliente[])

  async function listarClientes() {
      try {
       const res = await api.get('/clientes')
       setClientes(res.data)
     
        } catch (error) {
        console.log(error)
    }}

    useEffect(() => {
      listarClientes()
    },[])

  
  return(
      <Container>
        <div className="container-conteudo">
        
          <h1>Todos os clientes cadastrados</h1><br />
        
          <ListView clientes={clientes} setClientes={setClientes}/>
        
        </div>
      </Container>
  );
}

export default Listar;