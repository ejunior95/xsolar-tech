import React from 'react';
import { Container } from './styles';

interface IProps {
  value: string;
}

const CustomButton = (props:IProps) => {

  const {
    value
  } = props

  return(
      <Container>
          <input type="submit" value={value} />
      </Container>
  );
}

export default CustomButton;