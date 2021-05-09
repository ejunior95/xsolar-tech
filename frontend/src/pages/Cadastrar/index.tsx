import React, { ChangeEvent, useState, useEffect } from 'react';
import { FormEvent } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import InputBox from '../../components/InputBox';
import { ToastContext } from '../../context/ToastContext';
import api  from '../../services/api';
import { Container } from './styles';

interface ICliente {
  _id: string;
  nome: string,
  cpf: string,
  telefone: string,
  email: string,
  enderecoPrincipal: {
    _id: string;
    cep: string;
    cidade: string;
    estado: string;
    bairro: string;
    rua: string;
    numero: string;
    complemento: string;
    tipo: string;
  }
}

interface IStateProps {
  cliente: ICliente
}

const Cadastro: React.FC = () => {
  
  const {showToastMessage} = useContext(ToastContext)

  const [camposInvalidos, setcamposInvalidos] = useState([] as string[])
  const [idUsuario, setIdUsuario] = useState('')

  const [formData, setFormData] = useState(() => valorDefaultForm())

  function handleChange(e:ChangeEvent<HTMLInputElement>) {
    setFormData({ 
         ...formData, 
         [e.target.name]: e.target.value 
    });
  }

  function valorDefaultForm() {
    return {
      nome: '',
      cpf: '',
      telefone: '',
      email: '',
      cep: '',
      cidade: '',
      estado: '',
      bairro: '',
      rua: '',
      numero: '',
      complemento: '',
      tipo: ''
    }
  }

  function validarCampos() {
   
    const camposInvalidos_ = (Object.keys(formData) as Array<keyof typeof formData>).filter(key => {
      return !formData[key] 
    })
   setcamposInvalidos(camposInvalidos_)

  }

  useEffect(() => {
      validarCampos()
  },[formData])

  const history = useHistory()

  useEffect(() => {
    if(!history.location.state) return
    const state = history.location.state as IStateProps
    const cliente = state.cliente
    if(!cliente) return
    
    setFormData({
      nome: cliente.nome,
      cpf: cliente.cpf,
      telefone: cliente.telefone,
      email: cliente.email,
      cep: cliente.enderecoPrincipal.cep,
      cidade: cliente.enderecoPrincipal.cidade,
      estado: cliente.enderecoPrincipal.estado,
      bairro: cliente.enderecoPrincipal.bairro,
      rua: cliente.enderecoPrincipal.rua,
      numero: cliente.enderecoPrincipal.numero,
      complemento: cliente.enderecoPrincipal.complemento,
      tipo: cliente.enderecoPrincipal.tipo
    })
    setIdUsuario(cliente._id)
  },[])

  async function cadastrarCliente(e:FormEvent) {
    e.preventDefault()

    const payload = {

      nome: formData.nome,
      cpf: formData.cpf,
      telefone: formData.telefone,
      email: formData.email,
      enderecoPrincipal: {
        cep: formData.cep,
        cidade: formData.cidade,
        estado: formData.estado,
        bairro: formData.bairro,
        rua: formData.rua,
        numero: formData.numero,
        complemento: formData.complemento,
        tipo: formData.tipo
    }
  }

  try {
      await api.post('/clientes', payload)
      showToastMessage('sucesso', 'Cadastro realizado com sucesso!')
      setFormData(valorDefaultForm())
      window.scrollTo(0,0)
      setIdUsuario('')
  } catch (error) {
    console.log(error)
     showToastMessage('alerta', 'Não foi possível realizar o cadastro')
  }

  }

  async function alterarCliente(e:FormEvent) {
    e.preventDefault()

    
    const payload = {

      nome: formData.nome,
      cpf: formData.cpf,
      telefone: formData.telefone,
      email: formData.email,
      enderecoPrincipal: {
        cep: formData.cep,
        cidade: formData.cidade,
        estado: formData.estado,
        bairro: formData.bairro,
        rua: formData.rua,
        numero: formData.numero,
        complemento: formData.complemento,
        tipo: formData.tipo
    }
  }

  try {
      await api.put(`/clientes/${idUsuario}`, payload)
      showToastMessage('sucesso', 'Cadastro alterado com sucesso!')
      setFormData(valorDefaultForm())
      window.scrollTo(0,0)
      setIdUsuario('')
  } catch (error) {
    console.log(error)
     showToastMessage('alerta', 'Não foi possível alterar o cliente')
  }

  }

  return(
      <Container>
          
          <form onSubmit={idUsuario ? alterarCliente : cadastrarCliente}>
              <h1>Informe abaixo as informações do cliente</h1>
              <div className="container-inputs">
                <InputBox label="Nome completo" type="text" name="nome" value={formData.nome} required onChange={handleChange}/>
                <InputBox label="CPF" type="text" name="cpf" value={formData.cpf} required onChange={handleChange}/> 
                <InputBox label="Telefone" type="phone" name="telefone" value={formData.telefone} required onChange={handleChange}/>
                <InputBox label="Email" type="text" name="email" value={formData.email} required onChange={handleChange}/> 
              </div>
              
              <div className="container-endereco">
                <h1 className="titulo-endereco">Endereço principal</h1>
                <div className="container-conteudo-endereco">
                  <InputBox label="CEP" type="text" name="cep" value={formData.cep} required onChange={handleChange}/> 
                  <InputBox label="Cidade" type="text" name="cidade" value={formData.cidade} required onChange={handleChange}/> 
                  <InputBox label="Estado" type="text" name="estado" value={formData.estado} required onChange={handleChange}/> 
                  <InputBox label="Bairro" type="text" name="bairro" value={formData.bairro} required onChange={handleChange}/> 
                  <InputBox label="Rua" type="text" name="rua" value={formData.rua} required onChange={handleChange}/> 
                  <InputBox label="Número" type="text" name="numero" value={formData.numero} required onChange={handleChange}/> 
                  <InputBox label="Complemento" type="text" name="complemento" value={formData.complemento} required onChange={handleChange}/> 
                  <InputBox label="Tipo" type="text" name="tipo" value={formData.tipo} required onChange={handleChange}/> 
                </div>
              </div>

              <div className="container-buttons">
                  <div className="btn-salvar">
                    {idUsuario.length === 0 ? 
                    <CustomButton value="Salvar" className="btn-form" disabled={camposInvalidos.length > 0}/> :
                    <CustomButton value="Editar" className="btn-form" disabled={camposInvalidos.length > 0}/>}
                  </div>
              </div>
          </form>
      </Container>
  );
}

export default Cadastro;