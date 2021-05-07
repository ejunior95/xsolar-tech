import { useEffect, useContext } from 'react';
import {createContext, ReactNode, useState} from 'react';
import { ToastContext } from './ToastContext';
import api from '../services/api';
  
  interface IResponseLogin {
    message: string;
    token: string
  }

  interface IContextData {
    validarLogin: (email:string, senha:string) => void;
    isLogado: boolean;
    encerrarSessao: () => void
  }
  
  interface IProviderProps {
    children : ReactNode
  }

export const GerenteContext = createContext({} as IContextData);

export function GerenteProvider({
    children
  }: IProviderProps) {
  const [token, setToken] = useState('')
  const { showToastMessage } = useContext(ToastContext);

  useEffect(() => {
      const token_ = localStorage.getItem('@SistemaXSolarTech/token')
      if (!token_) return 
      setToken(token_)
      api.defaults.headers.authorization = `Bearer ${token_}`
      // api.defaults.headers.Authorization = `Bearer ${token_}`
  },[])

    // async function recuperarNome(user_id: number) {
    //     let res
    //     res = await api.get<IUser[]>('users')
    //     const nomeEncontrado =  res.data.filter(user => user.id === user_id)
    //     return nomeEncontrado[0]?.name
    // }

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

  return (
      <GerenteContext.Provider value={{
          validarLogin,
          isLogado : !!token,
          encerrarSessao
      }}> 
      {children}
      </GerenteContext.Provider>
  );}