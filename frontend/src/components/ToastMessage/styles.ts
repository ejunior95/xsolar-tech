import styled from 'styled-components';

export const Container = styled.div`

/* Media query para exibição em desktop */

@media(min-width: 1025px) {
  
  div {
    position: absolute;
    right: 20px;
    top: 20px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    width: 300px;
    padding: 15px;
    border-radius: 5px;
    z-index: 9999;
  }
  
  h1 {
    text-align: center;
    font-size: 14px;
    color: #ffffff;
    width: 100%;
  }
  
  .sucesso {
    background-color: #44bd32;
  }
  .erro {
    background-color: #c23616;
  }
  .alerta {
    background-color: #e1b12c;
  }
  .icone {
    color: #ffffff;
    font-size: 30px;
    padding-left: 10px;
    opacity: 0.7;
  }
}

/* Media query para exibição mobile (tablet e celular) */

@media(max-width: 1024px) {

div {
  position: absolute;
  top: 10px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  width: 95%;
  left: 2.5%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  z-index: 9999;
}

h1 {
  font-size: 15px;
  text-align: center;
  color: #ffffff;
  width: 100%;
}

.sucesso {
  background-color: #44bd32;
}
.erro {
  background-color: #c23616;
}
.alerta {
  background-color: #e1b12c;
}
.icone {
  color: #ffffff;
  font-size: 33px;
  padding-left: 20px;
  opacity: 0.7;
}
}
`;
  