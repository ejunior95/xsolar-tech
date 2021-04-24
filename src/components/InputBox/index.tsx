import { Container } from './styles';

interface IProps {
  label: string;
  type: string;
}

const InputBox = (props:IProps) => {
  
  const {
    label,
    type
  } = props
  
  return(
      <Container>
          <label>{label}</label><br />
          <input type={type} required />
      </Container>
  );
}

export default InputBox;