import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  z-index: 9999;
  background: rgba(0,0,0,0.8);
  transition: .5s ease-in-out;

  .container-modal {
      width: 50%;
      height: 40vh;
      background-color: #ffffff;
      z-index: 10000;
      border-radius: 20px;
      transition: .2s ease-in-out;
  }

  .container-textos {
      width: 90%;
      height: 75%;
      margin-left: 5%;
      padding-top: 5vh;
  }

  h1 {
      font-size: 250%;
  }

  p {
      margin-top: 2vh;
      font-size: 150%;
  }

  .container-botoes {
      width: 100%;
      height: 20%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 5%;
  }

  .btn-sucesso,
  .btn-cancelar {
      cursor: pointer;
      border: 1px solid;
      color: #ffffff;
      font-size: 15px;
      font-weight: bolder;
      border-radius: 5px;
  }

  .btn-sucesso {
    background-color: green;
    padding: 10px 30px 10px 30px;
  }

  .btn-sucesso:hover {
      background-color: #089630;
  }

  .btn-cancelar {
    background-color: red;
    padding: 10px 15px 10px 15px;
  }

  .btn-cancelar:hover {
      background-color: #E82C0C;
  }

  button + button {
      margin-left: 1vw;
  }

`;
