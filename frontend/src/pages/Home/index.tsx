import React from 'react';
import { Container } from './styles';
import BarChart from '../../components/BarChart'
import PieChart from '../../components/PieChart'

const Home: React.FC = () => {
  return(

      <Container>
        <div className="container-titulos">
          <h1 className="titulos">Cadastros por estado</h1>
          <h1 className="titulos">Tipos de endereços</h1>
        </div>
        <div className="container-graficos">
          <PieChart></PieChart>
          <BarChart></BarChart>
        </div>
      </Container>
  );
}

export default Home;