import React from 'react';
import CustomButton from '../../components/CustomButton';
import InputBox from '../../components/InputBox';
import { Container } from './styles';

const Cadastro: React.FC = () => {
  return(
      <Container>
          <form>
              <h1>Informe abaixo as informações do cliente</h1> <br/>
              <div className="container-inputs">
              <InputBox label="Nome completo" type="text" required/>
              <InputBox label="CPF" type="text" required/> 
              <InputBox label="Telefone" type="phone" required/>
              <InputBox label="Email" type="text" required/> 
              </div>
              
              <div className="container-endereco">
                <h1 className="titulo-endereco">Endereço principal</h1>
                <div className="container-conteudo-endereco">
                <InputBox label="CEP" type="text" required/> 
                <InputBox label="Cidade" type="text" required/> 
                <InputBox label="Estado" type="text" required/> 
                <InputBox label="Bairro" type="text" required/> 
                <InputBox label="Rua" type="text" required/> 
                <InputBox label="Número" type="text" required/> 
                <InputBox label="Complemento" type="text" required/> 
                <InputBox label="Tipo" type="text" required/> 
                </div>
              </div>

              <div className="container-buttons">
                  <div className="btn-salvar">
                  <CustomButton value="Salvar" className="btn-form disabled"/>
                  </div>
              </div>
          </form>
      </Container>
  );
}

export default Cadastro;