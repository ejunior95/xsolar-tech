import React, { useState, useEffect, ChangeEvent } from 'react';
import { Container } from './styles';
import LogoXSolar from '../../assets/Logo_XSolar.png'
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';
import { Link } from 'react-router-dom';


const Login: React.FC = () => {

const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')

function atualizaEmail(e:ChangeEvent<HTMLInputElement>) {
  setEmail(e.target.value)
}
function atualizaSenha(e:ChangeEvent<HTMLInputElement>) {
  setSenha(e.target.value)
}

  return(

      <Container>

          <div className="container-login">
            <div className="container-textos">
              <h1 className="titulo">Olá, seja bem-vindo!</h1><br />
              <p className="subtitulo">Digite seu login e senha abaixo para continuar</p>
            </div>

            <div className="container-inputs">
            <form>   
              <InputBox label="Digite seu email" type="text" required={true} onChange={atualizaEmail}/>
              <InputBox label="Digite sua senha" type="password" required={true} onChange={atualizaSenha} />
          
              {/* <Link to="home"> */}
              <CustomButton value="Vamos lá!" />
              {/* </Link> */}
          
            </form>
            </div>

            <div className="container-logo">
              <img src={LogoXSolar} alt="X Solar Tech" className="logo"/>
            </div>
          </div>

      </Container>
  );
}

export default Login;