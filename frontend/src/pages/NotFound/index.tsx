import React, { useContext, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { GerenteContext } from '../../context/GerenteContext';
import { Container } from './styles';

const NotFound: React.FC = () => {
  
  const location = useLocation()
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
        <h1>{isLogado.toString()}</h1>
      </Container>
  );
}

export default NotFound;