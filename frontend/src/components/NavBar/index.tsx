import React, { useContext } from 'react';
import { Container } from './styles';
import LogoXSolar from '../../assets/Logo_XSolar_ALT2.png';
import { GerenteContext } from '../../context/GerenteContext';


const NavBar: React.FC = () => {

  const {
    encerrarSessao
  } = useContext(GerenteContext)

  return(
      <Container>
          <img src={LogoXSolar} alt="Logo Xsolar Tech" title="A melhor solução em energia solar" />
          <div className="container-itens-menu">
            <ul>
                <li>Página Inicial</li>
                <li>Cadastrar novo cliente</li>
                <li>Alterar cadastros</li>
                <li>Excluir cadastros</li>
                <li>Listar todos os cadastros</li>
                <li onClick={encerrarSessao}>Encerrar sessão</li>
            </ul>   
          </div>
      </Container>
  );
}

export default NavBar;