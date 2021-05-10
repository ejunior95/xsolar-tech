import {useEffect, useContext, createContext, ReactNode, useState} from 'react';
import { ToastContext } from './ToastContext';
import api from '../services/api';
  
  interface IResponseLogin {
    message: string;
    token: string
  }
  
  interface IProviderProps {
    children : ReactNode
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

  interface IContextData {
    validarLogin: (email:string, senha:string) => void;
    isLogado: boolean;
    clientes: ICliente[];
    setClientes: (clientes: ICliente[]) => void;
    listarClientes: () => void;
    excluirCliente: (_id: string) => void;
    modal: boolean;
    toggleModal: () => void;
    encerrarSessao: () => void
  }

  interface IsAdmin {
    _id: string;
    isAdmin: boolean;
  }

export const GerenteContext = createContext({} as IContextData);

export function GerenteProvider({
    children
  }: IProviderProps) {

  const [token, setToken] = useState('');
  const [clientes, setClientes] = useState([] as ICliente[]);
  const [isAdmin, setIsAdmin] = useState({} as IsAdmin)
  const { showToastMessage } = useContext(ToastContext);
  const [modal, setModal] = useState(false)

  useEffect(() => {
      const token_ = localStorage.getItem('@SistemaXSolarTech/token')
      if (!token_) return 
      setToken(token_)
      api.defaults.headers.authorization = `Bearer ${token_}`
      // api.defaults.headers.Authorization = `Bearer ${token_}`
  },[])

  async function listarClientes() {
    try {
     const res = await api.get('/clientes')
     setClientes(res.data)
      } catch (error) {
      console.log(error)
  }}

  function toggleModal() {
    setModal(!modal)
  }
  
    async function validarLogin(email:string, senha:string) {
        let res
        try {
          res = await api.post<IResponseLogin>('auth/login', {email, senha})
          api.defaults.headers.authorization = `Bearer ${res.data.token}`
          localStorage.setItem('@SistemaXSolarTech/token', res.data.token)
           setToken(res.data.token)
          } catch (error) {
            showToastMessage('erro',"Não foi possível realizar o login!")
            return 
          }
      }

      function encerrarSessao() {
        localStorage.removeItem('@SistemaXSolarTech/token')
        // api.defaults.headers.common['Authorization'] = undefined
        setToken('')
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

  return (
      <GerenteContext.Provider value={{
          validarLogin,
          isLogado : !!token,
          clientes,
          setClientes,
          excluirCliente,
          listarClientes,
          toggleModal,
          modal,
          encerrarSessao
      }}> 
      {children}
      </GerenteContext.Provider>
  );}