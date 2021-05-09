import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import ListView from '../../components/ListView';
import { GerenteContext } from '../../context/GerenteContext';
import api from '../../services/api';
import { Container } from './styles';

const Listar: React.FC = () => {

  const { listarClientes, clientes, setClientes } = useContext(GerenteContext)

 
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