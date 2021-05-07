import { ChangeEvent } from 'react';
import { Container, Input, Label, Span } from './styles';

interface IProps {
  label: string;
  type: string;
  required: boolean;
  value?: string;
  name?: string;
  onChange?: (e:ChangeEvent<HTMLInputElement>) => void
}

const InputBox = (props:IProps) => {
  
  const {
    label,
    type,
    required, 
    value,
    name,
    onChange
  } = props
  
  return(
      <Container>
          <Input type={type} required={required} placeholder=" " onChange={onChange} value={value} name={name}/>
          <Label>{label}</Label>
          <Span></Span>
      </Container>
  );
}

export default InputBox;