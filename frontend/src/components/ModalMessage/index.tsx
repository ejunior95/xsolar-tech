import React, { useContext } from 'react';
import { Container } from './styles';

interface IProps {
    title: string;
    subtitle: string;
    component?: React.ReactNode;
    children?: React.ReactNode;
}

const ModalMessage = (props:IProps) => {
  
    const {
        title,
        subtitle,
        component,
        children
    } = props


    return(
      <Container>
          <div className="container-modal">
              <div className="container-textos">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                {component}
              </div>
              <div className="container-botoes">
                  {children}
              </div>
          </div>
      </Container>
  );
}

export default ModalMessage;