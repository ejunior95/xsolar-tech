import React, { useContext, useState, useEffect } from 'react';
import { Container } from './styles';
import LogoXSolar from '../../assets/Logo_XSolar_ALT2.png';
import { GerenteContext } from '../../context/GerenteContext';
import ModalMessage from '../ModalMessage';
import { Link } from 'react-router-dom';


const NavBar: React.FC = () => {
  
    const {
      encerrarSessao
    } = useContext(GerenteContext)

  const [modal, setModal] = useState(false)

    function toggleModal() {
      setModal(!modal)
    }

    function logoff() {
      toggleModal()
      encerrarSessao()
    }

  return(
    <>   
        {modal && 
        <ModalMessage 
        title="Atenção!" 
        subtitle="Tem certeza que deseja sair do sistema?" 
        >
          <button 
          className="btn-sucesso" onClick={logoff}>
            Sim, por favor</button> 
          <button className="btn-cancelar" onClick={toggleModal}>
            Não, quero continuar logado</button> 
        </ModalMessage> 
        }

      <Container>
          <img src={LogoXSolar} alt="Logo Xsolar Tech" title="A melhor solução em energia solar" />
          <div className="container-itens-menu">
            <ul>
                <li><Link to="/home">Página Inicial</Link></li>
                <li><Link to="/cadastrar-cliente">Cadastrar novo cliente</Link></li>
                <li><Link to="/alterar-cliente">Alterar cadastros</Link></li>
                <li><Link to="/listar">Excluir cadastros</Link></li>
                <li><Link to="/listar">Listar todos os cadastros</Link></li>
                <li onClick={toggleModal}>Encerrar sessão</li>
            </ul>   
          </div>
      </Container>
</>
  );
}

export default NavBar;


