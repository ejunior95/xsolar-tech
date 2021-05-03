import React from 'react';
import ListView from '../../components/ListView';
import { Container } from './styles';

const Listar: React.FC = () => {
  return(
      <Container>
        <div className="container-conteudo">
          <h1>Todos os clientes cadastrados</h1><br />
          <ListView />
        </div>
      </Container>
  );
}

export default Listar;