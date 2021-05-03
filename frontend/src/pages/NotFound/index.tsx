import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { GerenteContext } from '../../context/GerenteContext';
import { Container } from './styles';
import Loader from '../../assets/loader.gif';

const NotFound: React.FC = () => {
  
  const history= useHistory()

  const {isLogado} = useContext(GerenteContext)


  useEffect(() => {

    if(!isLogado) {
        history.push('/login')
    } else {
      history.push('/home')
    }
  },[isLogado])

  return(
    
      <Container>
        <h1>Carregando...</h1>
      </Container>
  );
}

export default NotFound;