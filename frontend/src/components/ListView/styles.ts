import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 450px;
  background-color: #dcdde1;
  overflow: hidden;
  overflow-y: scroll;
  border-radius: 20px;

  ::-webkit-scrollbar-track {
    background-color: #BABABA;
    border-radius: 5px;
  }
  ::-webkit-scrollbar {
    width: 10px;
    background: #BABABA;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #353B48;
    
  }

  .card-cliente {
      background-color: #353b48;
      height: 90%;
      width: 95%;
      margin-left: 2.5%;
      margin-top: 2.5%;
      padding-bottom: 2.5%;
      border-radius: 20px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;      
  }

  .titulos {
    color: #dcdde1;
    font-size: 50px;
    width: 90%;
  }

  .subtitulos {
    color: #ffffff;
    width: 90%;
  }

  .icone-editar,
  .icone-excluir,
  .icone-gerente {
    position: absolute;
    cursor: pointer;
    font-size: 30px;
  }

  .icone-editar:hover:before {
      content: '';
      width: 40px;
      height: 40px;
      background-color: blue;
  }

  .icone-excluir {
    color: #ffffff;
    right: 40px;
    top: 25px;
  }

  .icone-editar {
    color: #ffffff;
    right: 90px;
    top: 25px;
  }

  .icone-gerente.active {
    color: #ffffff;
    right: 140px;
    top: 25px;
  }

  .icone-gerente.inactive {
    
    color: #262A33;
    right: 140px;
    top: 25px;
  }

  strong { 
    color: #7f8fa6;
    }
`;
