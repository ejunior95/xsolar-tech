import { ChangeEvent } from 'react';
import { Container, Input, Label, Span } from './styles';

interface IProps {
  label: string;
  type: string;
  required: boolean;
  value?: string;
  onChange?: (e:ChangeEvent<HTMLInputElement>) => void
}

const InputBox = (props:IProps) => {
  
  const {
    label,
    type,
    required, 
    value,
    onChange
  } = props
  
  return(
      <Container>
          <Input type={type} required={required} placeholder=" " onChange={onChange} value={value}/>
          <Label>{label}</Label>
          <Span></Span>
      </Container>
  );
}

export default InputBox;