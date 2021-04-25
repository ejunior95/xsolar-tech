import { Container, Input, Label, Span } from './styles';

interface IProps {
  label: string;
  type: string;
  required: boolean;
}

const InputBox = (props:IProps) => {
  
  const {
    label,
    type,
    required
  } = props
  
  return(
      <Container>
          <Input type={type} required={required} placeholder=" " />
          <Label>{label}</Label>
          <Span></Span>
      </Container>
  );
}

export default InputBox;