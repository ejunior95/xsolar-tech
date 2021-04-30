import {createContext, ReactNode, useState} from 'react';
import { ToastMessage } from '../components/ToastMessage';
  

  interface IContextData {
    showToastMessage: (type: 'sucesso' | 'erro' | 'alerta', text: string) => void
  }
 
  interface IOptions {
    type: 'sucesso' | 'erro' | 'alerta';
    text: string
  }
  
  interface IProviderProps {
    children : ReactNode
  }

export const ToastContext = createContext({} as IContextData);

export function ToastProvider({
    children
  }: IProviderProps) {
 
    const [isShownToast, setIsShownToast] = useState(false);
    const [options, setOptions] = useState({} as IOptions);

    function showToastMessage(type: 'sucesso' | 'erro' | 'alerta', text: string, time=5000 ) {
      setIsShownToast(true);
      setOptions({
        type,
        text
      })
      setTimeout(() => {
        setIsShownToast(false);
        setOptions({} as IOptions)
      }, time);
    }

  return (
      <ToastContext.Provider value={{
          showToastMessage
      }}> 
      {children}
      {
        isShownToast && <ToastMessage {...options}/>
      }
      </ToastContext.Provider>
  );}