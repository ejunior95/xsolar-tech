import React from 'react';
import { Container } from './styles';

interface IProps {
  value: string;
  className: string
}

const CustomButton = (props:IProps) => {

  const {
    value,
    className
  } = props

  return(
      <Container>
          <input type="submit" value={value} className={className} />
      </Container>
  );
}

export default CustomButton;