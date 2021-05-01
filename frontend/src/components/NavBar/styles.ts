import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12vh;
  background-color: #0C29F2;
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
    padding: 8px;
    cursor: pointer;
    border-radius: 5px;
    transition: .2s ease-in-out;
    border: 1px solid #0C29F2;
  }

  .container-itens-menu ul li:hover {
    background-color: #0D69FC;
    border: 1px solid #ffffff;
    transition: .2s ease-in-out;
  }

`;
