import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12vh;
  background-color: #013399;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-left: 1vw;
    width: 10vw;
    cursor: pointer;
  }

  .container-itens-menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 80vw;
  }

  .container-itens-menu ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1vw;
    color: #ffffff;
  }

  .container-itens-menu ul li {
    font-size: 1rem;
    margin-left: 1vw;
    list-style: none;
    padding: 8px;
    cursor: pointer;
    border-radius: 5px;
    transition: .2s ease-in-out;
    border: 1px solid #013399;
  }

  .container-itens-menu ul li:hover {
    background-color: #024EE6;
    border: 1px solid #ffffff;
    transition: .2s ease-in-out;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

`;
