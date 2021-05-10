import { useState, useEffect, useContext } from 'react';
import { Container } from './styles';
import { FaTrashAlt } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { ImKey } from 'react-icons/im';
import ModalMessage from '../ModalMessage';
import { GerenteContext } from '../../context/GerenteContext';
import { useHistory } from 'react-router-dom';
import InputBox from '../InputBox';
import api from '../../services/api';
import { ToastContext } from '../../context/ToastContext';


interface IClienteProps {
  clientes: ICliente[];
  setClientes: (clientes: ICliente[]) => void;
}

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
  isAdmin: boolean
}


const ListView = (props:IClienteProps) => {
const history = useHistory()
  
const { clientes, listarClientes, excluirCliente, toggleModal, modal } = useContext(GerenteContext)
const { showToastMessage } = useContext(ToastContext)

const [idSelect, setIdSelect] = useState('')
const [adminChange,setAdminChange] = useState(false)
const [email, setEmail] = useState({})
const [operacaoAdmin, setOperacaoAdmin] = useState('')
const [novaSenhaAdmin, setNovaSenhaAdmin] = useState('')

function toggleAdminChange() {
  setAdminChange(!adminChange)
}

async function cadastrarAdmin() {
  const payload = {
    email: email,
    senha: novaSenhaAdmin
  }
  try {
    await api.post('/auth/register', payload)
    listarClientes()
    setEmail('')
    setNovaSenhaAdmin('')
    setOperacaoAdmin('')
    showToastMessage('sucesso',"Acesso do usuário alterado com sucesso!")
  } catch (error) {
    showToastMessage('erro',"Não foi possível alterar o acesso!")
  }
}
async function revogarAdmin() {
  const payload = {
    email
  }
  
  try {
    await api.post('/auth/remove', payload)
    listarClientes()
    setEmail('')
    setNovaSenhaAdmin('')
    setOperacaoAdmin('')
    showToastMessage('sucesso',"Acesso do usuário alterado com sucesso!")
  } catch (error) {
    showToastMessage('erro',"Não foi possível alterar o acesso!")
  }
}

  return(
    <>   
    {modal && 
    <ModalMessage 
    title="Atenção!" 
    subtitle="Você irá EXCLUIR PERMANENTEMENTE esse cliente! Tem certeza que deseja continuar?" 
    >
      <button className="btn-cancelar" onClick={toggleModal}>
      Não, mudei de ideia</button> 
      <button 
      className="btn-sucesso" onClick={() => excluirCliente(idSelect)}>
        Sim, pode exluir!</button> 
    </ModalMessage> 
    }

    {operacaoAdmin === 'revogarAcesso' &&
      (<ModalMessage 
      title="Atenção!" 
      subtitle="Tem certeza que deseja remover o acesso de administrador desse usuário?" 
      >
        <button className="btn-cancelar" onClick={() => setOperacaoAdmin('')}>
        Não, mudei de ideia</button> 
        <button 
        className="btn-sucesso" onClick={() => {
        revogarAdmin()
        setOperacaoAdmin('')}}>
        Sim, revogar acesso!</button> 
      </ModalMessage>) 
      }
      {operacaoAdmin === 'liberarAcesso' && 
      (<ModalMessage 
        title="Atenção!" 
        subtitle="Você irá conceder acesso de administrador para o usuário!" 
        component={<InputBox label="Digite uma senha para o usuário" type="password" value={novaSenhaAdmin} onChange={(e) => setNovaSenhaAdmin(e.target.value)} required />}
        >
          <button className="btn-cancelar" onClick={() => setOperacaoAdmin('')}>
          Não, mudei de ideia</button> 
          <button 
          className="btn-sucesso" onClick={() => {
            cadastrarAdmin()
            setOperacaoAdmin('')}}>
          Sim, liberar acesso!</button> 
        </ModalMessage>)}

      <Container>
          {clientes.map(cliente => 

          (<div className="card-cliente">

            <h1 className="titulos">{cliente.nome}</h1>
            <h4 className="subtitulos"><strong>Email: </strong>{cliente.email}</h4>
            <h4 className="subtitulos"><strong>CPF: </strong>{cliente.cpf}</h4>
            <h4 className="subtitulos"><strong>Telefone: </strong>{cliente.telefone}</h4>
            <h2 className="subtitulos">• Endereço principal</h2>
            <h4 className="subtitulos"><strong>CEP: </strong>{cliente.enderecoPrincipal.cep}</h4>
            <h4 className="subtitulos"><strong>Rua: </strong>{cliente.enderecoPrincipal.rua}</h4>
            <h4 className="subtitulos"><strong>Numero: </strong>{cliente.enderecoPrincipal.numero}</h4>
            <h4 className="subtitulos"><strong>Bairro: </strong>{cliente.enderecoPrincipal.bairro}</h4>
            <h4 className="subtitulos"><strong>Cidade: </strong>{cliente.enderecoPrincipal.cidade}</h4>
            <h4 className="subtitulos"><strong>Estado: </strong>{cliente.enderecoPrincipal.estado}</h4>
            <h4 className="subtitulos"><strong>Complemento: </strong>{cliente.enderecoPrincipal.complemento}</h4>
            <h4 className="subtitulos"><strong>Tipo de endereço: </strong>{cliente.enderecoPrincipal.tipo}</h4>
            
            <FaTrashAlt className="icone-excluir" title="Excluir cliente" onClick={() => {
              setIdSelect(cliente._id)
              toggleModal()
            }} />

            <RiPencilFill className="icone-editar" title="Editar cliente" onClick={() => {
              setIdSelect(cliente._id)
              history.push({
                pathname: '/cadastrar-cliente',
                state: { cliente }
              })
            }}/>

            <ImKey 
            className={cliente.isAdmin ? 'icone-gerente active' : 'icone-gerente inactive'} 
            title={cliente.isAdmin ? 'Acesso de administrador ativado' : 'Acesso de administrador desativado'} 
            onClick={() => {
              if(cliente.isAdmin) {
                setOperacaoAdmin('revogarAcesso')
              } else {
                setOperacaoAdmin('liberarAcesso')
              }
              setEmail(cliente.email)
              toggleAdminChange()
            }}
            />

          </div>)
          
          )}

      </Container>

    </>
  );
}

export default ListView;