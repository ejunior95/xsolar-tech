import React from 'react';
import InputBox from '../../components/InputBox';
import { Container } from './styles';

const Cadastro: React.FC = () => {
  return(
      <Container>
          <form>
              <h1>Informe abaixo as informações do cliente</h1> <br/>
              <div className="container-inputs">
              <InputBox label="Digite seu nome" type="text" required/>
              <InputBox label="Digite seu CPF" type="text" required/> 
              <InputBox label="Digite seu telefone" type="text" required/>
              <InputBox label="Digite seu email" type="text" required/> 
              <InputBox label="Digite seu endereço" type="text" required/>
              </div>
          </form>
      </Container>
  );
}

export default Cadastro;