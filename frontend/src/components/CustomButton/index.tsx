import React from 'react';
import { Container } from './styles';

interface IProps {
  value: string;
  className: string;
  disabled?: boolean;
}

const CustomButton = (props:IProps) => {

  const {
    value,
    className, 
    disabled = false
  } = props

  return(
      <Container>
          <input type="submit" value={value} className={className} disabled={disabled} />
      </Container>
  );
}

export default CustomButton;