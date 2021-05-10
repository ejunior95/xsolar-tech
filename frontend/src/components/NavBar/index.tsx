import React, { useContext, useState, useEffect } from 'react';
import { Container } from './styles';
import LogoXSolar from '../../assets/Logo_XSolar.png';
import { GerenteContext } from '../../context/GerenteContext';
import ModalMessage from '../ModalMessage';
import { Link, useLocation } from 'react-router-dom';
import { ImMenu } from "react-icons/im";


const NavBar: React.FC = () => {
  
    const { encerrarSessao } = useContext(GerenteContext)

  const [modal, setModal] = useState(false)
  const [menuMobile, setMenuMobile] = useState('expandido')

    function toggleModal() {
      setModal(!modal)
    }

    function toggleMenuMobile() {
      if(menuMobile === 'expandido') {
        setMenuMobile('retraido')
      }
      if(menuMobile === 'retraido') {
        setMenuMobile('expandido')
      }
    }

    function logoff() {
      toggleModal()
      encerrarSessao()
    }

    const location = useLocation()

  return(
    <>   
        {modal && 
        <ModalMessage 
        title="Atenção!" 
        subtitle="Tem certeza que deseja sair do sistema?" 
        >
          <button className="btn-cancelar" onClick={toggleModal}>
          Quero continuar logado</button> 
          <button 
          className="btn-sucesso" onClick={logoff}>
          Sim, por favor!</button> 
        </ModalMessage> 
        }

      <Container>
      <Link to="/home"><img src={LogoXSolar} alt="Logo Xsolar Tech" title="A melhor solução em energia solar" /></Link>
          <div className="container-itens-menu">
            
            <ul>
              {location.pathname === '/home' ? 
              (<li className="active"><Link to="/home">Página Inicial</Link></li>) 
              :  
              (<li><Link to="/home">Página Inicial</Link></li>)
              }
              {location.pathname === '/cadastrar-cliente' ? 
              (<li className="active"><Link to="/cadastrar-cliente">Cadastrar novo cliente</Link></li>) 
              :  
              (<li><Link to="/cadastrar-cliente">Cadastrar novo cliente</Link></li>)
              }
              {location.pathname === '/listar' ? 
              (<li className="active"><Link to="/listar">Listar todos os cadastros</Link></li>) 
              :  
              (<li><Link to="/listar">Listar todos os cadastros</Link></li>)
              }
                <li onClick={toggleModal}>Encerrar sessão</li>
            </ul>  
            
            <div className="container-menu-mobile">
              <ImMenu className="icone-menu-mobile"/>
            </div>

          </div>
      </Container>
</>
  );
}

export default NavBar;


