import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 450px;
  background-color: #dcdde1;
  overflow: hidden;
  overflow-y: scroll;
  border-radius: 10px;

  .card-cliente {
      background-color: #353b48;
      height: 90%;
      width: 95%;
      
      margin-left: 2.5%;
      margin-top: 2.5%;
      padding-bottom: 2.5%;
      border-radius: 10px;
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

  strong { 
    color: #7f8fa6;
    }
`;
