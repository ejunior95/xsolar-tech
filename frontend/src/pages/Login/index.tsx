import React, { useState, useContext, ChangeEvent } from 'react';
import { Container } from './styles';
import LogoXSolar from '../../assets/Logo_XSolar.png'
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';
import BgVideo from '../../assets/bg-video.mp4';
import { GerenteContext } from '../../context/GerenteContext';

const Login: React.FC = () => {
  
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const { validarLogin } = useContext(GerenteContext);
  
  function atualizaEmail(e:ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }
  function atualizaSenha(e:ChangeEvent<HTMLInputElement>) {
    setSenha(e.target.value)
  }

  function handledSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    validarLogin(email, senha)
    setEmail('')  
    setSenha('')
  }
  
  return(

      <Container>
          <video src={BgVideo} autoPlay loop muted />
          <div className="container-login">
            <div className="container-textos">
              <h1 className="titulo">Olá, seja bem-vindo!</h1><br />
              <p className="subtitulo">Digite seu login e senha abaixo para continuar</p>
            </div>

            <div className="container-inputs">

            <form onSubmit={handledSubmit} >   
              
              <InputBox label="Digite seu email" type="text" onChange={atualizaEmail} value={email} required />
              <InputBox label="Digite sua senha" type="password" onChange={atualizaSenha} value={senha} required />
          
              <CustomButton value="Vamos lá!" className="btn-login"/>
            
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