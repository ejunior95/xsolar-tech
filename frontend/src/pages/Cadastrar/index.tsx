import React, { ChangeEvent, useState, useEffect } from 'react';
import { FormEvent } from 'react';
import { useContext } from 'react';
import CustomButton from '../../components/CustomButton';
import InputBox from '../../components/InputBox';
import { ToastContext } from '../../context/ToastContext';
import api  from '../../services/api';
import { Container } from './styles';

const Cadastro: React.FC = () => {
  
  const {
    showToastMessage
  } = useContext(ToastContext)

  const [camposInvalidos, setcamposInvalidos] = useState([] as string[])

  const [formData, setFormData] = useState({
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
  })

  function handleChange(e:ChangeEvent<HTMLInputElement>) {
    setFormData({ 
         ...formData, 
         [e.target.name]: e.target.value 
    });
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
  } catch (error) {
    console.log(error)
     showToastMessage('alerta', 'Não foi possível realizar o cadastro')
  }

  }

  return(
      <Container>
          
          <form onSubmit={cadastrarCliente}>
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
                    <CustomButton value="Salvar" className="btn-form" disabled={camposInvalidos.length > 0}/>
                  </div>
              </div>
          </form>
      </Container>
  );
}

export default Cadastro;