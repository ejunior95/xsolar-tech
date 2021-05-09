import { useState, useEffect, useContext } from 'react';
import { Container } from './styles';
import { FaTrashAlt } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { ImKey } from 'react-icons/im';
import ModalMessage from '../ModalMessage';
import { GerenteContext } from '../../context/GerenteContext';
import { useHistory } from 'react-router-dom';
import InputBox from '../InputBox';


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
 
const { clientes, excluirCliente, toggleModal, modal } = useContext(GerenteContext)
const [idSelect, setIdSelect] = useState('')
const [adminChange,setAdminChange] = useState(false)

function toggleAdminChange() {
  setAdminChange(!adminChange)
}

function cadastrarAdmin(_id: string) {
  
}

const history = useHistory()

useEffect(() => {},[clientes]) 

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

    {adminChange && 
    <ModalMessage 
    title="Atenção!" 
    subtitle="Você irá conceder acesso de administrador para o usuário!" 
    component={<InputBox label="Digite uma senha para o usuário" type="password" required />}
    >
      <button className="btn-cancelar" onClick={toggleAdminChange}>
      Não, mudei de ideia</button> 
      <button 
      className="btn-sucesso" onClick={toggleAdminChange}>
        Liberar acesso!</button> 
    </ModalMessage> 
    }

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
              setIdSelect(cliente._id)
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