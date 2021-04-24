import React from 'react';
import { Container } from './styles';
import LogoXSolar from '../../assets/Logo_XSolar.png'
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';

const Home: React.FC = () => {
  return(

      <Container>

          <div className="container-login">
            <div className="container-textos">
              <h1 className="titulo">Olá, seja bem-vindo!</h1><br />
              <p className="subtitulo">Digite seu login e senha abaixo para continuar</p>
            </div>

            <div className="container-inputs">
            <form>   
              <InputBox label="Digite seu email" type="email"/>
              <InputBox label="Digite sua senha" type="password" />
              <CustomButton value="Vamos lá!" />
            </form>
            </div>

            <div className="container-logo">
              <img src={LogoXSolar} alt="X Solar Tech" className="logo"/>
            </div>
          </div>

      </Container>
  );
}

export default Home;