import React, { useState, useContext, ChangeEvent } from 'react';
import { Container } from './styles';
import LogoXSolar from '../../assets/Logo_XSolar.png'
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';
import { Link } from 'react-router-dom';
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
    console.log({email, senha})
    e.preventDefault()
    validarLogin(email, senha)
    setEmail('')  
    setSenha('')

  }
  
  
  return(

      <Container>

          <div className="container-login">
            <div className="container-textos">
              <h1 className="titulo">Olá, seja bem-vindo!</h1><br />
              <p className="subtitulo">Digite seu login e senha abaixo para continuar</p>
            </div>

            <div className="container-inputs">
            <form onSubmit={handledSubmit} >   
              <InputBox label="Digite seu email" type="text" required onChange={atualizaEmail} value={email}/>
              <InputBox label="Digite sua senha" type="password" required onChange={atualizaSenha} value={senha} />
          
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

export default Login;