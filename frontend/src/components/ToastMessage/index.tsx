import React from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdAlert } from 'react-icons/io';
import { Container } from './styles';

interface IProps {
    type?: 'sucesso' | 'erro' | 'alerta';
    text: string
  }

export const ToastMessage: React.FC<IProps> = (props:IProps) => {
  
    const {
        type,
        text
    } = props
    
    return(
      <Container>
          <div className={type}>
            {type === 'sucesso' && <FaCheckCircle className="icone"/>}
            {type === 'erro' && <RiCloseCircleFill className="icone"/>}
            {type === 'alerta' && <IoMdAlert className="icone" />}
            <h1>{text}</h1>
          </div>
      </Container>
  );
}