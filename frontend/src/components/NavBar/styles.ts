import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12vh;
  background-color: #133ABA;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-left: 1vw;
    width: 10vw;
    cursor: pointer;
  }

  .container-itens-menu {
    width: 60vw;
  }

  .container-itens-menu ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #ffffff;
  }

  .container-itens-menu ul li {
    font-size: 1rem;
    list-style: none;
    padding: 5px;
    cursor: pointer;
  }

`;
