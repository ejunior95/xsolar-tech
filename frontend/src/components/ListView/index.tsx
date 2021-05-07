import { Container } from './styles';
import { FaTrashAlt } from "react-icons/fa";
import { useState } from 'react';
import ModalMessage from '../ModalMessage';
import api from '../../services/api';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ToastContext } from '../../context/ToastContext';
import { RiPencilFill } from "react-icons/ri";


interface IProps {
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
}

const ListView = (props:IProps) => {
 
  const { showToastMessage } = useContext(ToastContext);

const {
  clientes,
  setClientes
} = props

const [modal, setModal] = useState(false)
const [idSelect, setIdSelect] = useState('')

useEffect(() => {

},[clientes])


  function toggleModal() {
    setModal(!modal)
  }
  async function excluirCliente(_id:string) {    
   
    try {
     await api.delete(`/clientes/${_id}`)
    const clientes_ = clientes.filter(cliente => cliente._id !== _id)
    setClientes(clientes_)
    showToastMessage('sucesso',"Cliente excluído com sucesso!")
    toggleModal()
    } catch (error) {
    showToastMessage('erro',"Não foi possível excluir o cliente")
    }
  }
 
 
  return(
    <>   
    {modal && 
    <ModalMessage 
    title="Atenção!" 
    subtitle="Você irá EXCLUIR PERMANENTEMENTE esse cliente! Tem certeza que deseja continuar?" 
    >
      <button className="btn-sucesso" onClick={toggleModal}>
      Não, mudei de ideia</button> 
      <button 
      className="btn-cancelar" onClick={() => excluirCliente(idSelect)}>
        Sim, pode exluir!</button> 
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

            <RiPencilFill className="icone-editar" title="Editar cliente"/>

          </div>)
          
          )}

      </Container>

    </>
  );
}

export default ListView;